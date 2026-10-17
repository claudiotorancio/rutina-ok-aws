// controllers/movil/intervenciones.controller.js
import prisma from "../../../config/dbConnection.js";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

// Instancia del cliente de S3
const s3 = new S3Client({
    region: process.env.S3_BUCKET_REGION || process.env.AWS_REGION,
    credentials: {
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    },
});

const registrarIntervencion = async (req, res) => {
    try {
        const id_orden = req.query.id_orden;
        const tipo = req.query.tipo;
        const detalles_json = req.query.detalles_json;
        // Indicador opcional enviado en la URL: 'antes' o 'despues'
        const tipo_foto = req.query.tipo_foto || 'antes';

        // if (!id_orden || !tipo) {
        //     return res.status(400).json({ success: false, error: "Faltan parámetros id_orden o tipo en la URL." });
        // }

        // 1. Validar técnico autenticado
        const id_tecnico_autenticado = req.usuarioMovil.id_usuario;

        // 2. Validaciones de la orden
        const orden = await prisma.ordenTrabajo.findUnique({
            where: { id_orden: parseInt(id_orden) }
        });

        if (!orden) {
            return res.status(404).json({ success: false, error: "La orden de trabajo no existe." });
        }

        if (orden.id_tecnico !== id_tecnico_autenticado) {
            return res.status(403).json({ success: false, error: "Acceso denegado, sin permisos para modificar la orden." });
        }

        // 3. Recomponemos el Buffer binario de la imagen enviada por App Inventor (PostFile)
        const chunks = [];
        for await (const chunk of req) {
            chunks.push(chunk);
        }
        const buffer = Buffer.concat(chunks);

        let urlImagenSubida = null;

        // Si llegaron bytes de imagen, la subimos a S3
        if (buffer.length > 0) {
            const fileName = `intervencion-${id_orden}-${Date.now()}.png`;
            const bucketName = process.env.BUCKET_AWS || process.env.AWS_BUCKET_NAME;
            const region = process.env.S3_BUCKET_REGION || process.env.AWS_REGION;

            await s3.send(
                new PutObjectCommand({
                    Bucket: bucketName,
                    Key: fileName,
                    Body: buffer,
                    ContentType: "image/png",
                })
            );

            urlImagenSubida = `https://${bucketName}.s3.${region}.amazonaws.com/${fileName}`;
        }

        // 4. Decodificamos el JSON de detalles
        const infoFormulario = typeof detalles_json === "string" ? JSON.parse(detalles_json) : (detalles_json || {});

        // Asignamos la URL de la imagen según corresponda
        const urlAntes = tipo_foto === 'antes' ? urlImagenSubida : null;
        const urlDespues = tipo_foto === 'despues' ? urlImagenSubida : null;

        const detallesFinales = {
            ...infoFormulario,
            fotos_evidencia: {
                antes_url: urlAntes,
                despues_url: urlDespues
            }
        };

        // 5. Transacción e inserción en la base de datos
        const resultado = await prisma.$transaction(async (tx) => {
            const nuevaIntervencion = await tx.intervencion.create({
                data: {
                    id_orden: orden.id_orden,
                    tipo: tipo.toUpperCase(),
                    detalles_json: detallesFinales
                }
            });

            return { nuevaIntervencion };
        });

        return res.status(201).json({
            success: true,
            message: `¡Informe guardado! Intervención de tipo ${tipo} registrada con éxito.`,
            id_intervencion: resultado.nuevaIntervencion.id_intervencion,
            url_foto: urlImagenSubida
        });

    } catch (error) {
        console.error("Error al registrar intervención técnica:", error);
        return res.status(500).json({ success: false, error: "Error interno del servidor al procesar el cierre." });
    }
};

export default registrarIntervencion;