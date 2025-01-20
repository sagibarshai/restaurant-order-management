if (!process.env.SERVER_PORT) throw new Error(`SERVER_PORT must be define in .env file`);

export const CONFIG = {
  PORT: process.env.SERVER_PORT,
  DEBUG: true,
  ALLOWED_ORIGINS: ["http://localhost:5173"],
};
