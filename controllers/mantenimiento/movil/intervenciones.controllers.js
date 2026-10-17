import prisma from "../../../config/dbConnection.js";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

// Instancia única del cliente de AWS S3 con AWS SDK v3
const s3 = new S3Client({
    region: process.env.S3_BUCKET_REGION || process.env.AWS_REGION,
    credentials: {
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    },
});

const registrarIntervencion = async (req, res) => {
    try {
        // 1. Obtener parámetros enviadas desde App Inventor vía req.query
        const id_orden = req.query.id_orden;
        const tipo = req.query.tipo;
        const detalles_json = req.query.detalles_json;
        // Permite saber si la foto subida es 'antes' o 'despues' (por defecto 'antes')
        const tipo_foto = req.query.tipo_foto || "antes";

        if (!id_orden || !tipo) {
            return res.status(400).json({
                success: false,
                error: "Faltan parámetros id_orden o tipo en la URL."
            });
        }

        // 2. Validar técnico autenticado
        const id_tecnico_autenticado = req.usuarioMovil.id_usuario;

        // 3. Validar existencia de la orden en Supabase/PostgreSQL
        const orden = await prisma.ordenTrabajo.findUnique({
            where: { id_orden: parseInt(id_orden) }
        });

        if (!orden) {
            return res.status(404).json({
                success: false,
                error: "La orden de trabajo no existe."
            });
        }

        // 4. Verificar pertenencia de la orden al técnico logueado
        if (orden.id_tecnico !== id_tecnico_autenticado) {
            return res.status(403).json({
                success: false,
                error: "Acceso denegado, sin permisos para modificar la orden."
            });
        }

        // 5. Recomponer el Buffer binario enviado por App Inventor mediante PostFile
        const chunks = [];
        for await (const chunk of req) {
            chunks.push(chunk);
        }
        const buffer = Buffer.concat(chunks);

        let urlImagenSubida = null;

        // Si se recibieron bytes de la imagen en la petición, subimos a AWS S3
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

        // 6. Decodificación segura de detalles_json
        const infoFormulario = typeof detalles_json === "string"
            ? JSON.parse(detalles_json)
            : (detalles_json || {});

        // Asignación de la URL de la evidencia fotográfica segun tipo_foto
        const urlAntes = tipo_foto === "antes" ? urlImagenSubida : null;
        const urlDespues = tipo_foto === "despues" ? urlImagenSubida : null;

        const detallesFinales = {
            ...infoFormulario,
            fotos_evidencia: {
                antes_url: urlAntes,
                despues_url: urlDespues
            }
        };

        // 7. Transacción en la base de datos con Prisma
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

        // 8. Respuesta de éxito única y cortada con return
        return res.status(201).json({
            success: true,
            message: `¡Informe guardado! Intervención de tipo ${tipo} registrada con éxito.`,
            id_intervencion: resultado.nuevaIntervencion.id_intervencion,
            url_foto: urlImagenSubida
        });

    } catch (error) {
        console.error("Error al registrar intervención técnica:", error);
        return res.status(500).json({
            success: false,
            error: "Error interno del servidor al procesar el cierre de intervención."
        });
    }
};

export default registrarIntervencion;