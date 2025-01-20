import { Pool } from "pg";
import { CONFIG } from "../config";
import { logOnDebug } from "../utils/log-on-debug";
import { CreateOrdersItemsTableIfNotExists } from "./tables/orders/orders-items";
import { CreateOrdersTableIfNotExists } from "./tables/orders/orders";
import { CreateItemsAddonsTableIfNotExists } from "./tables/orders/items-addons";

export const pgClient = new Pool({
  user: CONFIG.POSTGRES.USER,
  password: CONFIG.POSTGRES.PASSWORD,
  database: CONFIG.POSTGRES.DATABASE,
  port: CONFIG.POSTGRES.PORT,
  host: CONFIG.POSTGRES.HOST,
  ssl: CONFIG.POSTGRES.SSL,
});
pgClient.on("connect", async () => {
  await CreateOrdersTableIfNotExists();
  await CreateOrdersItemsTableIfNotExists();
  await CreateItemsAddonsTableIfNotExists();
});
