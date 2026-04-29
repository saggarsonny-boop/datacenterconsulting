import { neon } from "@neondatabase/serverless";

let sqlClient;

export function getSql() {
  const connectionString = process.env.NEON_DATABASE_URL;
  if (!connectionString) {
    throw new Error("Missing NEON_DATABASE_URL environment variable");
  }

  if (!sqlClient) {
    sqlClient = neon(connectionString);
  }

  return sqlClient;
}
