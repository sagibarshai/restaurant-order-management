import axios from "axios";

if (!process.env.SERVER_PORT) throw new Error(`SERVER_PORT must be define in .env file`);

export const serverAxiosInstance = axios.create({
  baseURL: `http://localhost:${process.env.SERVER_PORT}/api`,
});
