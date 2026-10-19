
//middlewares/uploadS3
import multer from "multer";
import { S3Client } from "@aws-sdk/client-s3";
import multerS3 from "multer-s3"
import path from "path"

//Instancia con AWS SDK v3
const s3 = new S3Client({
    region: process.env.S3_BUCKET_REGION || process.env.AWS_REGION,
    credentials: {
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    },
});

//Configuracion de storage
const upload = () =>
    multer({
        storage: multerS3({
            s3: s3,
            bucket: process.env.BUCKET_AWS || process.env.AWS_BUCKET_NAME,
            contentType: multerS3.AUTO_CONTENT_TYPE,
            metadata(req, file, cb) {
                cb(null, { fieldName: file.fieldname });
            },
            key(req, file, cb) {
                cb(null, Date.now().toString() + path.extname(file.originalname));
            }
        })
    });

export const uploadSingle = upload().fields([
    { name: "foto_antes", maxCount: 1 },
    { name: "foto_despues", maxCount: 1 }
]);
