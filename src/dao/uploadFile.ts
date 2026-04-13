import crypto from "crypto";
import fs from "fs";
import path from "path";
import sql from "../db/db.js";

export default async function uploadFile(
  fileContents: Buffer,
  fileName: string,
  author: string,
) {
  const source = crypto.randomBytes(64).toString("hex");
  const id = crypto.randomUUID();

  // We can't tell if the file operation succeeded
  createFile(source, fileContents);

  return await sql`
    INSERT INTO files (id, name, author, source)
      VALUES (${id}, ${fileName}, ${author}, ${source});
  `;
}

function createFile(source: string, fileContents: Buffer) {
  fs.writeFile(
    path.join(process.env.FSC_UPLOADED_ASSETS || "assets/users/", source),
    fileContents,
    () => {},
  );
}
