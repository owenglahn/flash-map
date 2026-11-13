import { GetObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { Request, Response } from "express";
import fs from "fs";

const S3 = new S3Client({
    region: process.env.AWS_REGION || "us-east-1", // must match your bucket's region
});

export async function getImage(req: Request, res: Response) {
    if (typeof req.params.image_id === "string") {
        const { Body, ContentType, ContentLength } = await S3.send(
            new GetObjectCommand({
                Bucket: process.env.S3_BUCKET, 
                Key: req.params.image_id
            })
        );
        res.set({
            "Content-Type": ContentType,
            "Content-Length": ContentLength, 
            "Cache-Control": "private, max-age=3600"
        });
        if (Body) {
            Body.transformToByteArray().then(data => res.status(200).send(data));
        }
    } else {
        res.status(400).json("Error processing params");
    }
}

export async function postImage(req: Request, res: Response) {
    if (typeof req.params.user_id === "string" && typeof req.query.image_id === "string" && req.file) {
        const response = await S3.send(new PutObjectCommand({
            Bucket: process.env.S3_BUCKET,
            Body: fs.readFileSync(req.file.path),
            Key: `${req.params.user_id}/${req.query.image_id}`,
            ContentType: req.file.mimetype
        }));
        res.status(300).json(response);
        // fs.unlink(req.file.path, () => console.log("Temp file deleted"));
    } else if (typeof req.params.user_id !== "string") {
        res.status(400).json("User ID error");
    } else if (!req.file) {
        res.status(400).json("File undefined error");
    } else {
        res.status(400).json("Image ID error");
    }
}