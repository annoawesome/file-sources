import express, { Request } from "express";
import authenticate, { AuthPayload } from "../middleware/authenticate.js";
import uploadFile from "../dao/uploadFile.js";

type UploadFileBody = {
  fileContents: string;
  fileName: string;
};

export const uploadRouter = express.Router();

uploadRouter.use(authenticate);

uploadRouter.post("file", async (req, res) => {
  // Authentication middleware was used, so this should exist
  const authPayload = (req as Request & AuthPayload).authPayload;
  const body: UploadFileBody = req.body;

  const sqlRows = await uploadFile(
    Buffer.from(body.fileContents, "base64"),
    body.fileName,
    authPayload.username,
  );

  if (sqlRows.length > 0) {
    res.sendStatus(201);
  } else {
    res.sendStatus(500);
  }
});
