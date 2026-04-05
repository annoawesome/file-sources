import express from "express";
import { getFiles, searchForFiles } from "../dao/searchForFiles.js";

export const filesRouter = express.Router();

filesRouter.get("/search", async (req, res) => {
  const searchQuery = req.query.query;
  let fileReps;

  if (typeof searchQuery === "string" && searchQuery.length > 0) {
    fileReps = await searchForFiles(searchQuery);
  } else {
    fileReps = await getFiles();
  }

  res.status(200).send(JSON.stringify(fileReps));
});
