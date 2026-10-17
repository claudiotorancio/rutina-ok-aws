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

        if (!id_orden || !tipo) {
            return res.status(400).json({ success: false, error: "Faltan parámetros obligatorios." });
        }

        // const id_tecnico_autenticado = req.usuarioMovil?.id_usuario;

        const orden = await prisma.ordenTrabajo.findUnique({
            where: { id_orden: parseInt(id_orden) }
        });

        if (!orden) {
            return res.status(404).json({ success: false, error: "La orden no existe." });
        }

        // if (orden.id_tecnico !== id_tecnico_autenticado) {
        //     return res.status(403).json({ success: false, error: "Sin permisos para esta orden." });
        // }

        // El Buffer de la imagen viene limpio gracias a express.raw()
        const buffer = req.body;
        console.log("Buffer binario limpio recibido:", buffer.length, "bytes");

        let urlImagenSubida = null;

        if (buffer && Buffer.isBuffer(buffer) && buffer.length > 100) {
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

        const resultado = await prisma.$transaction(async (tx) => {
            const nuevaIntervencion = await tx.intervencion.create({
                data: {
                    id_orden: parseInt(id_orden),
                    tipo: tipo.toUpperCase(),
                    realizada: true,
                    detalles_json: infoFormulario,
                    image: urlImagenSubida
                }
            });
            return { nuevaIntervencion };
        });

        return res.status(201).json({
            success: true,
            message: "¡Intervención registrada y foto subida con éxito!",
            id_intervencion: resultado.nuevaIntervencion.id_intervencion,
            url_foto: urlImagenSubida
        });

    } catch (error) {
        console.error("Error al registrar intervención:", error);
        return res.status(500).json({ success: false, error: "Error interno del servidor." });
    }
};