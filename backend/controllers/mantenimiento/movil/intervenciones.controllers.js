import prisma from "../../../config/dbConnection.js";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

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
        const detalles_json_query = req.query.detalles_json;

        // Extraemos imagen1 e imagen2 desde req.body
        const imagen1B64 = req.body?.imagen1 || null;
        const imagen2B64 = req.body?.imagen2 || null;
        if (!id_orden || !tipo) {
            return res.status(400).json({ success: false, error: "Faltan parámetros obligatorios." });
        }

        const id_tecnico_autenticado = req.usuarioMovil?.id_usuario;

        const orden = await prisma.ordenTrabajo.findUnique({
            where: { id_orden: parseInt(id_orden) }
        });

        if (!orden) {
            return res.status(404).json({ success: false, error: "La orden no existe." });
        }

        if (orden.id_tecnico !== id_tecnico_autenticado) {
            return res.status(403).json({ success: false, error: "Sin permisos para esta orden." });
        }

        const bucketName = process.env.BUCKET_AWS || process.env.AWS_BUCKET_NAME;
        const region = process.env.S3_BUCKET_REGION || process.env.AWS_REGION;

        let urlImagen1Subida = null;
        let urlImagen2Subida = null;

        // Procesar Imagen 1 si existe
        if (imagen1B64 && imagen1B64.length > 50) {
            const base64Data1 = imagen1B64.replace(/^data:image\/\w+;base64,/, "");
            const buffer1 = Buffer.from(base64Data1, 'base64');
            if (buffer1.length > 100) {
                const fileName1 = `intervencion-ord${id_orden}-1-${Date.now()}.jpg`;
                await s3.send(new PutObjectCommand({
                    Bucket: bucketName,
                    Key: fileName1,
                    Body: buffer1,
                    ContentType: "image/jpeg"
                }));
                urlImagen1Subida = `https://${bucketName}.s3.${region}.amazonaws.com/${fileName1}`;
            }
        }

        // Procesar Imagen 2 si existe
        if (imagen2B64 && imagen2B64.length > 50) {
            const base64Data2 = imagen2B64.replace(/^data:image\/\w+;base64,/, "");
            const buffer2 = Buffer.from(base64Data2, 'base64');
            if (buffer2.length > 100) {
                const fileName2 = `intervencion-ord${id_orden}-2-${Date.now()}.jpg`;
                await s3.send(new PutObjectCommand({
                    Bucket: bucketName,
                    Key: fileName2,
                    Body: buffer2,
                    ContentType: "image/jpeg"
                }));
                urlImagen2Subida = `https://${bucketName}.s3.${region}.amazonaws.com/${fileName2}`;
            }
        }

        // Parsear los detalles que vienen por query
        let infoFormulario = {};
        if (detalles_json_query) {
            try {
                infoFormulario = typeof detalles_json_query === "string"
                    ? JSON.parse(decodeURIComponent(detalles_json_query))
                    : detalles_json_query;
            } catch (e) {
                infoFormulario = {};
            }
        }

        // Unificar formulario y las URLs de las imágenes
        const detallesFinales = {
            ...infoFormulario,
            image1: urlImagen1Subida,
            image2: urlImagen2Subida
        };

        // Guardar en la base de datos con Prisma
        const resultado = await prisma.$transaction(async (tx) => {
            const nuevaIntervencion = await tx.intervencion.create({
                data: {
                    id_orden: parseInt(id_orden),
                    tipo: tipo.toUpperCase(),
                    realizada: true,
                    detalles_json: detallesFinales
                }
            });
            return { nuevaIntervencion };
        });

        return res.status(201).json({
            success: true,
            message: "¡Intervención registrada y fotos subidas con éxito!",
            id_intervencion: resultado.nuevaIntervencion.id_intervencion,
            detalles: detallesFinales
        });

    } catch (error) {
        console.error("Error al registrar intervención:", error);
        return res.status(500).json({ success: false, error: "Error interno del servidor." });
    }
};