import "dotenv/config";

if (!process.env.SERVER_PORT) throw new Error(`SERVER_PORT must be define in .env file`);

if (!process.env.POSTGRES_USER) throw new Error(`POSTGRES_USER must be define in .env file`);
if (!process.env.POSTGRES_PASSWORD) throw new Error(`POSTGRES_PASSWORD must be define in .env file`);
if (!process.env.POSTGRES_DATABASE) throw new Error(`POSTGRES_DATABASE must be define in .env file`);
if (!process.env.POSTGRES_PORT) throw new Error(`POSTGRES_PORT must be define in .env file`);
if (!process.env.POSTGRES_HOST) throw new Error(`POSTGRES_HOST must be define in .env file`);

export const CONFIG = {
  PORT: process.env.SERVER_PORT,
  DEBUG: true,
  ALLOWED_ORIGINS: ["http://localhost:5173"],

  POSTGRES: {
    USER: process.env.POSTGRES_USER,
    PASSWORD: process.env.POSTGRES_PASSWORD,
    DATABASE: process.env.POSTGRES_DATABASE,
    PORT: Number(process.env.POSTGRES_PORT),
    HOST: process.env.POSTGRES_HOST,
    SSL: false,
  },
};
