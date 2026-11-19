import express, { Router  } from 'express';
import { getImage, getImageKeys, postImage } from '../controllers/image.controller';
import multer from "multer";

const imageRouter: Router = express.Router();
const UPLOAD = multer({ dest: 'uploads/' })

imageRouter.get("/:image_id", getImage);
imageRouter.get("/keys/:username", getImageKeys);
imageRouter.post("/:user_id", UPLOAD.single('flash_sheet'), postImage);
imageRouter.delete("/:file_id", (req: express.Request, res: express.Response) => {});

export default imageRouter;