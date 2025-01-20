import { logOnDebug } from "../../../utils/log-on-debug";
import { pgClient } from "../../init";

export type OrderStatus = "Received" | "Preparing" | "Ready" | "EnRoute" | "Delivered";

export interface StoredOrder {
  id: number;
  updated_at: Date;
  created_at: Date;
  location: string;
  comment?: string;
  title: string;
  status: OrderStatus;
}

export const CreateOrdersTableIfNotExists = async () => {
  try {
    await pgClient.query(`
                CREATE TABLE IF NOT EXISTS orders
                (
                id SERIAL PRIMARY KEY,
                updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                location POINT NOT NULL,
                comment VARCHAR(255) CHECK(LENGTH(comment) > 1),
                title VARCHAR(255) CHECK(LENGTH(title) > 1) NOT NULL, 
                status VARCHAR(20) CHECK (status IN ('Received', 'Preparing', 'Ready', 'EnRoute', 'Delivered')) NOT NULL
                );         
            `);
    logOnDebug(`orders table is ready!`);
  } catch (err) {
    logOnDebug("Cannot create orders table: ", err);
  }
};
