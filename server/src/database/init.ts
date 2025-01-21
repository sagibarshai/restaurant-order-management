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

// {
//   "id": 6923,
//   "createdAt": "2025-01-21T17:19:35.932Z",
//   "comment": null,
//   "customerName": "John Doe",
//   "customerPhone": "1234567890123",
//   "location": {
//       "x": 52.52,
//       "y": 13.405
//   },
//   "status": "Preparing",
//   "title": "Order Title221",
//   "updatedAt": "2025-01-21T17:19:35.932Z",
//   "orderItems": [
//       {
//           "id": 19982,
//           "createdAt": "2025-01-21T17:19:35.935Z",
//           "comment": "Extra cheese",
//           "title": "Pizza",
//           "orderId": 6923,
//           "price": "10.99",
//           "type": "Food",
//           "itemsAddons": [
//               {
//                   "id": 39804,
//                   "createdAt": "2025-01-21T17:19:35.936Z",
//                   "comment": "No extra olives",
//                   "title": "Olives",
//                   "orderItemId": 19982,
//                   "price": "2.50"
//               },
//               {
//                   "id": 39805,
//                   "createdAt": "2025-01-21T17:19:35.937Z",
//                   "comment": "Large mushrooms",
//                   "title": "Mushrooms",
//                   "orderItemId": 19982,
//                   "price": "1.75"
//               }
//           ]
//       },
//       {
//           "id": 19983,
//           "createdAt": "2025-01-21T17:19:35.938Z",
//           "comment": null,
//           "title": "Soda",
//           "orderId": 6923,
//           "price": "1.50",
//           "type": "Drink",
//           "itemsAddons": []
//       }
//   ]
// }
