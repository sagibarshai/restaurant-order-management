import { logOnDebug } from "../../../utils/log-on-debug";
import { pgClient } from "../../init";

export type OrderItemType = "Food" | "Drink";

export interface StoredOrderItem {
  id: number;
  created_at: Date;
  comment?: string;
  title: string;
  price: number;
  order_id: number;
  type: OrderItemType;
}

export const CreateOrdersItemsTableIfNotExists = async () => {
  try {
    await pgClient.query(`
                CREATE TABLE IF NOT EXISTS orders_items
                (
                id SERIAL PRIMARY KEY,
                created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                title VARCHAR(100) CHECK(LENGTH(title) > 1) NOT NULL,
                price DECIMAL(10, 2) NOT NULL,
                comment VARCHAR(255) CHECK(LENGTH(comment) > 1),
                type VARCHAR(20) CHECK (type IN ('Food', 'Drink')) NOT NULL,
                order_id INT REFERENCES orders(id) ON DELETE CASCADE ON UPDATE CASCADE
                );         
            `);
    logOnDebug(`orders_items table is ready!`);
  } catch (err) {
    logOnDebug("Cannot create orders_items table: ", err);
  }
};
