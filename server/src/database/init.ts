import { Pool } from "pg";
import { CONFIG } from "../config";
import { CreateOrdersItemsTableIfNotExists } from "./tables/orders/orders-items";
import { CreateOrdersTableIfNotExists } from "./tables/orders/orders";
import { CreateItemsAddonsTableIfNotExists } from "./tables/orders/items-addons";
import { init300OrdersIfNotExists } from "../features/orders/utils/init-300-orders";

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

  // create 300 orders if not exists
  await init300OrdersIfNotExists();
});
