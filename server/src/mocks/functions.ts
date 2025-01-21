// import { OrderStatus } from "../database/tables/orders/orders";
// import { OrderItemType } from "../database/tables/orders/orders-items";
// import { CreateFullOrder } from "../features/orders/controller";
// import { CreateItemAddon } from "../features/orders/models/items-addons";
// import { CreateOrder } from "../features/orders/models/orders";
// import { CreateOrderItem } from "../features/orders/models/orders-items";

// // Helper function to pick a random item from an array
// function getRandomItem<T>(arr: T[]): T {
//   return arr[Math.floor(Math.random() * arr.length)];
// }

// // Function to generate a random addon
// function generateAddon(): CreateItemAddon {
//   return {
//     title: getRandomItem(["Olives", "Mushrooms", "Cheese", "Bacon", "Tomatoes"]),
//     price: parseFloat((Math.random() * (5 - 1) + 1).toFixed(2)), // Price between 1 and 5
//     comment: Math.random() > 0.5 ? `With extra ${getRandomItem(["Olives", "Cheese"])}` : undefined,
//   };
// }

// // Function to generate mock order items
// function generateMockOrderItem(): CreateOrderItem {
//   const item: CreateOrderItem = {
//     title: getRandomItem(["Pizza", "Soda", "Pasta", "Salad"]),
//     price: parseFloat((Math.random() * (20 - 5) + 5).toFixed(2)), // Price between 5 and 20
//     type: getRandomItem<OrderItemType>(Object.values(OrderItemType)),
//     comment: Math.random() > 0.5 ? `Extra ${getRandomItem(["Cheese", "Olives"])}` : undefined,
//     //@ts-ignore
//     itemsAddons: generateAddons(),
//   };
//   return item;
// }

// // Function to generate addons for the order item
// function generateAddons(): CreateItemAddon[] {
//   const numberOfAddons = Math.floor(Math.random() * 3) + 1; // 1 to 3 addons
//   const addons: CreateItemAddon[] = [];
//   for (let i = 0; i < numberOfAddons; i++) {
//     addons.push(generateAddon());
//   }
//   return addons;
// }

// // Function to generate a mock order (returns CreateFullOrder instead of CreateOrder)
// function generateMockOrder(): CreateFullOrder {
//   return {
//     ...{
//       title: `Order for ${Math.random() > 0.5 ? "John" : "Doe"}`,
//       status: getRandomItem<CreateOrder["status"]>(Object.values(OrderStatus)),
//       location: [
//         parseFloat((Math.random() * (90 - 80) + 80).toFixed(4)), // Random latitude between 80 and 90
//         parseFloat((Math.random() * (180 - 170) + 170).toFixed(4)), // Random longitude between 170 and 180
//       ],
//       customerPhone: "1234567890",
//       customerName: "John Doe",
//     },
//     orderItems: Array.from({ length: Math.floor(Math.random() * 5) + 1 }, generateMockOrderItem), // Add orderItems
//   };
// }

// // Function to generate multiple mock orders
// export function generateOrders(count: number): CreateFullOrder[] {
//   const orders: CreateFullOrder[] = [];
//   for (let i = 0; i < count; i++) {
//     orders.push(generateMockOrder()); // Push generated order to the orders array
//   }
//   return orders;
// }
