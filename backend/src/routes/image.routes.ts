import express, { Router  } from 'express';

const imageRouter: Router = express.Router();

imageRouter.get("/:user_id", (req: express.Request, res: express.Response) => {});
imageRouter.post("/:user_id", (req: express.Request, res: express.Response) => {});
imageRouter.delete("/:file_id", (req: express.Request, res: express.Response) => {});

export default imageRouter;