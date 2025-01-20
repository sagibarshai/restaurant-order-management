import express from "express";
import { CONFIG } from "./config";
import { logOnDebug } from "./utils/log-on-debug";
import cors from "cors";
import { json } from "body-parser";

const app = express();

app.use(json());

app.use(
  cors({
    origin: CONFIG.ALLOWED_ORIGINS,
  })
);

app.get("/", (req: any, res: any, next: any) => res.send("hello there"));

app.listen(CONFIG.PORT, () => logOnDebug(`Server listen on port ${CONFIG.PORT}`));
