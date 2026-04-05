import express from "express";
import { apiRouter } from "./routers/apiRouter.js";

const app = express();
const port = 8080;

app.use(express.static("public"));

app.use("/api/v1/", apiRouter);

app.listen(port, () => {
  console.log(`FileSources listening on port ${port}`);
});
