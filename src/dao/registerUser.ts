import postgres from "postgres";

const sql = postgres("postgres://postgres:postgres@db:5432/postgres");

export type HashAndIv = {
  hash: string;
  iv: Buffer;
};

export async function registerUser(username: string, hash: string, iv: Buffer) {
  const _ = await sql`
    INSERT INTO users (username, hash, iv)
    VALUES (${username}, ${hash}, ${iv});
  `;
}

export async function getHashAndIvOfUser(
  username: string,
): Promise<HashAndIv | undefined> {
  const users = await sql`
    SELECT username, hash, iv FROM users
    WHERE
      username = ${username};`;

  if (users.length == 1) {
    const user = users[0];

    return {
      hash: user.hash,
      iv: user.iv,
    };
  }
}
