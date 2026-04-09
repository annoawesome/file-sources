import postgres from "postgres";

const sql = postgres("postgres://postgres:postgres@db:5432/postgres");

export type HashAndIv = {
  hash: string;
};

export async function registerUser(username: string, hash: string) {
  return await sql`
    INSERT INTO users (username, hash)
    VALUES (${username}, ${hash});
  `;
}

export async function getHashOfUser(
  username: string,
): Promise<string | undefined> {
  const users = await sql`
    SELECT username, hash FROM users
    WHERE
      username = ${username};`;

  if (users.length == 1) {
    const user = users[0];

    return user.hash;
  }
}
