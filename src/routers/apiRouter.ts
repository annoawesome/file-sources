import express from "express";
import { filesRouter } from "./filesRouter.js";
import { usersRouter } from "./usersRouter.js";
import { uploadRouter } from "./uploadRouter.js";

export const apiRouter = express.Router();

apiRouter.use("/upload/", uploadRouter);
apiRouter.use("/files/", filesRouter);
apiRouter.use("/users/", usersRouter);
