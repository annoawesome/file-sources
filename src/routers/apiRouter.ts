import express from "express";
import { filesRouter } from "./filesRouter.js";

export const apiRouter = express.Router();

apiRouter.use("/files/", filesRouter);
