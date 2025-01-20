import express from "express";
import { CONFIG } from "./config";
import { logOnDebug } from "./utils/log-on-debug";
import cors from "cors";
import { json } from "body-parser";
import { pgClient } from "./database/init";
import { notfoundMiddleware } from "./middlewares/not-found";
import { errorMiddleware } from "./middlewares/error";
import { orderRoutes } from "./features/orders/route";

const app = express();

app.use(json());

app.use(
  cors({
    origin: CONFIG.ALLOWED_ORIGINS,
  })
);

app.use("/api", orderRoutes);

app.use("/*", notfoundMiddleware);

app.use(errorMiddleware);

const startUp = async () => {
  try {
    await pgClient.connect();
    logOnDebug(`Server listen on port ${CONFIG.PORT}`);
  } catch (err) {
    logOnDebug("Database connection error ", err);
    process.exit(0);
  }
};

app.listen(CONFIG.PORT, startUp);
