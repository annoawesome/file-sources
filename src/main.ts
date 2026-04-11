import express from "express";
import cookieParser from "cookie-parser";
import "dotenv/config";
import { apiRouter } from "./routers/apiRouter.js";
import { generateTables } from "./db/db.js";

const app = express();
const port = 8080;

// TODO: Possible race condition?
generateTables();

app.use(cookieParser());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/v1/", apiRouter);

app.listen(port, () => {
  console.log(`FileSources listening on port ${port}`);
});
