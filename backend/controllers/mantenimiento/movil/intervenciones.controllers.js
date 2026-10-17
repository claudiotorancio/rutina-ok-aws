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
        // Ahora todo llega ordenado y limpio en req.body (usando PostText)
        const { id_orden, tipo, detalles_json, imagen_b64 } = req.body;

        if (!id_orden || !tipo) {
            return res.status(400).json({
                success: false,
                error: "Faltan parámetros obligatorios (id_orden o tipo)."
            });
        }

        // const id_tecnico_autenticado = req.usuarioMovil?.id_usuario;

        const orden = await prisma.ordenTrabajo.findUnique({
            where: { id_orden: parseInt(id_orden) }
        });

        if (!orden) {
            return res.status(404).json({ success: false, error: "La orden no existe." });
        }

        // if (orden.id_tecnico !== id_tecnico_autenticado) {
        //     return res.status(403).json({ success: false, error: "Sin permisos para modificar esta orden." });
        // }

        let urlImagenSubida = null;

        // Si viene la imagen en Base64, la procesamos y subimos a S3
        if (imagen_b64) {
            const base64Data = imagen_b64.replace(/^data:image\/\w+;base64,/, "");
            const buffer = Buffer.from(base64Data, 'base64');

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

        // Guardar en la base de datos
        const resultado = await prisma.$transaction(async (tx) => {
            const nuevaIntervencion = await tx.intervencion.create({
                data: {
                    id_orden: parseInt(id_orden),
                    tipo: tipo.toUpperCase(),
                    realizada: true,
                    detalles_json: detalles_json || {},
                    image: urlImagenSubida
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
        return res.status(500).json({ success: false, error: "Error interno del servidor." });
    }
};