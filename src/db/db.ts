import postgres from "postgres";

const sql = postgres("postgres://postgres:postgres@db:5432/postgres");

export async function generateTables() {
  await sql`
    CREATE TABLE IF NOT EXISTS files (
      id varchar(255) PRIMARY KEY,
      name varchar(255),
      source varchar(255)
    );
  `;

  // user table
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      username varchar(255) PRIMARY KEY
      hash varchar(255)
      iv varbinary(16)
    )
  `;
}

export default sql;
