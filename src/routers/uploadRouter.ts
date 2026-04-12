import express from "express";
import authenticate from "../middleware/authenticate.js";

export const uploadRouter = express.Router();

uploadRouter.use(authenticate);

uploadRouter.post("file", (req, res) => {
  // Not implemented
  res.sendStatus(501);
});
