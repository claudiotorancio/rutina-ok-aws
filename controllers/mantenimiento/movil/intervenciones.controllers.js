import prisma from "../../../config/dbConnection.js";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import dotenv from "dotenv";

dotenv.config();

const s3 = new S3Client({
    region: process.env.S3_BUCKET_REGION || process.env.AWS_REGION,
    credentials: {
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    },
});

export const registrarIntervencion = async (req, res) => {
    
    try {
        const id_orden = req.query.id_orden;
        const tipo = req.query.tipo;
        const detalles_json = req.query.detalles_json;

        // if (!id_orden || !tipo) {
        //     return res.status(400).json({
        //         success: false,
        //         error: "Faltan parámetros obligatorios (id_orden o tipo)."
        //     });
        // }

 

        // 1. Validar técnico autenticado
        // const id_tecnico_autenticado = req.usuarioMovil?.id_usuario;

        // 2. Validar existencia de la orden de trabajo
        const orden = await prisma.ordenTrabajo.findUnique({
            where: { id_orden: parseInt(id_orden) }
        });

        if (!orden) {
            return res.status(404).json({ success: false, error: "La orden de trabajo no existe." });
        }

        // if (orden.id_tecnico !== id_tecnico_autenticado) {
        //     return res.status(403).json({ success: false, error: "Acceso denegado, sin permisos para modificar esta orden." });
        // }

        // 3. Capturar el stream binario de la foto enviado por PostFile
        const chunks = [];
        for await (const chunk of req) {
            chunks.push(chunk);
        }
        const buffer = Buffer.concat(chunks);

        console.log("TAMAÑO REAL DEL BUFFER RECIBIDO:", buffer.length);

        let urlImagenSubida = null;

        if (buffer.length > 0) {
            const bucketName = process.env.BUCKET_AWS || process.env.AWS_BUCKET_NAME;
            const region = process.env.S3_BUCKET_REGION || process.env.AWS_REGION;
            const fileName = `intervencion-ord${id_orden}-${Date.now()}.png`;

            await s3.send(
                new PutObjectCommand({
                    Bucket: bucketName,
                    Key: fileName,
                    Body: buffer,
                    ContentType: "image/png",
                    ACL: "public-read",
                })
            );

            urlImagenSubida = `https://${bucketName}.s3.${region}.amazonaws.com/${fileName}`;
        }

        // 4. Parsear detalles_json de forma segura
        let infoFormulario = {};
        if (detalles_json) {
            try {
                infoFormulario = typeof detalles_json === "string"
                    ? JSON.parse(decodeURIComponent(detalles_json))
                    : detalles_json;
            } catch (e) {
                infoFormulario = {};
            }
        }

        // 5. Guardar en la base de datos usando exactamente los campos de tu schema
        const resultado = await prisma.$transaction(async (tx) => {
            const nuevaIntervencion = await tx.intervencion.create({
                data: {
                    id_orden: parseInt(id_orden), // Campo escalar con @unique
                    tipo: tipo.toUpperCase(),
                    realizada: true,              // Marcamos que ya fue realizada al registrarse
                    detalles_json: infoFormulario, // Objeto JSON puro para la columna Json?
                    image: urlImagenSubida        // URL directa a la columna image String?
                }
            });
            return { nuevaIntervencion };
        });

        return res.status(201).json({
            success: true,
            message: "¡Intervención registrada y foto guardada con éxito!",
            id_intervencion: resultado.nuevaIntervencion.id_intervencion,
            url_foto: urlImagenSubida
        });

    } catch (error) {
        console.error("Error al registrar intervención técnica:", error);
        return res.status(500).json({ success: false, error: "Error interno del servidor al procesar el cierre." });
    }
};