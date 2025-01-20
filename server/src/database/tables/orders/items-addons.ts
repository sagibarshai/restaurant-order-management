import { logOnDebug } from "../../../utils/log-on-debug";
import { pgClient } from "../../init";

export interface StoredItemAddon {
  id: number;
  created_at: Date;
  comment?: string;
  title: string;
  price: number;
  order_item_id: number;
}

export const CreateItemsAddonsTableIfNotExists = async () => {
  try {
    await pgClient.query(`
                CREATE TABLE IF NOT EXISTS items_addons
                (
                id SERIAL PRIMARY KEY,
                created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                comment VARCHAR(255) CHECK(LENGTH(comment) > 1),
                title VARCHAR(255) CHECK(LENGTH(title) > 1) NOT NULL, 
                price DECIMAL(10, 2) NOT NULL,
                order_item_id INT REFERENCES orders_items(id) ON DELETE CASCADE ON UPDATE CASCADE
                );         
            `);
    logOnDebug(`items_addons table is ready!`);
  } catch (err) {
    logOnDebug("Cannot create items_addons table: ", err);
  }
};
