import express from "express";

const app = express();
const port = 8080;

app.get("/", express.static("public"));

app.listen(port, () => {
  console.log(`FileSources listening on port ${port}`);
});
