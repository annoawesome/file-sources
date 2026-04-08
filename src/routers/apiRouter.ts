import express from "express";
import { filesRouter } from "./filesRouter.js";
import { usersRouter } from "./usersRouter.js";

export const apiRouter = express.Router();

apiRouter.use("/files/", filesRouter);
apiRouter.use("/users/", usersRouter);
