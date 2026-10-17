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

        // Si Express ya parseó el body como objeto con claves binarias:
        let buffer = null;
        if (Buffer.isBuffer(req.body)) {
            buffer = req.body;
        } else if (req.body && typeof req.body === 'object') {
            const rawKeys = Object.keys(req.body);
            if (rawKeys.length > 0) {
                // Juntamos las claves que interceptó express.urlencoded y las pasamos a Buffer
                buffer = Buffer.from(rawKeys.join(''), 'latin1');
            }
        }

        console.log("Buffer rescatado desde req.body:", buffer ? buffer.length : 0, "bytes");

        let urlImagenSubida = null;

        if (buffer && buffer.length > 100) {
            const bucketName = process.env.BUCKET_AWS || process.env.AWS_BUCKET_NAME;
            const region = process.env.S3_BUCKET_REGION || process.env.AWS_REGION;
            const fileName = `intervencion-ord${id_orden}-${Date.now()}.jpg`; // Usamos .jpg ya que vimos cabeceras Exif/JFIF

            await s3.send(
                new PutObjectCommand({
                    Bucket: bucketName,
                    Key: fileName,
                    Body: buffer,
                    ContentType: "image/jpeg"
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