import prisma from "../../../config/dbConnection.js";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import dotenv from "dotenv"

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


        // // 1. Validar técnico autenticado
        // const id_tecnico_autenticado = req.usuarioMovil.id_usuario;

        // // 2. Validar orden
        // const orden = await prisma.ordenTrabajo.findUnique({
        //     where: { id_orden: parseInt(id_orden) }
        // });

        // if (!orden) return res.status(404).json({ success: false, error: "La orden no existe." });
        // if (orden.id_tecnico !== id_tecnico_autenticado) {
        //     return res.status(403).json({ success: false, error: "Sin permisos para modificar esta orden." });
        // }

        // Depuración en el controlador
        console.log("Headers recibidos:", req.headers);
        console.log("Content-Length de la petición:", req.headers['content-length']);

        // 3. Capturar el stream binario de la foto que manda PostFile
        const chunks = [];
        for await (const chunk of req) {
            chunks.push(chunk);
        }
        const buffer = Buffer.concat(chunks);

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
                    ContentType: "image/png"
                })
            );

            urlImagenSubida = `https://${bucketName}.s3.${region}.amazonaws.com/${fileName}`;
        }


        // 4. Parsear detalles_json de forma segura
        // let infoFormulario = {};
        // if (detalles_json) {
        //     try {
        //         infoFormulario = typeof detalles_json === "string"
        //             ? JSON.parse(decodeURIComponent(detalles_json))
        //             : detalles_json;
        //     } catch (e) {
        //         infoFormulario = {};
        //     }
        // }

        const detallesFinales = {
            id_orden,
            tipo,
            detalles_json,
            image: urlImagenSubida
        };

        // 5. Guardar en Prisma

        const nuevaIntervencion = await prisma.intervencion.create(
            detallesFinales
        );



        return res.status(201).json(nuevaIntervencion);

    } catch (error) {
        console.error("Error al registrar intervención:", error);
        return res.status(500).json({ success: false, error: "Error interno del servidor." });
    }
};

