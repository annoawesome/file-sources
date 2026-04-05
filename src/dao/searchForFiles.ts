import postgres from "postgres";

const sql = postgres("postgres://postgres:postgres@db:5432/postgres");

export async function searchForFiles(str: string) {
  const files = await sql`
    SELECT id, name, source FROM files
    WHERE
      name LIKE ${"%" + str + "%"};
  `;

  return files;
}

export async function getFiles() {
  return await sql`
    SELECT id, name, source FROM files;
  `;
}
