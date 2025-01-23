import { OrderStatus } from "../database/tables/orders/orders";
import { OrderItemType } from "../database/tables/orders/orders-items";
import { CreateFullOrder } from "../features/orders/create/controller";
import { CreateItemAddon } from "../features/orders/models/items-addons";
import { CreateOrder } from "../features/orders/models/orders";
import { CreateOrderItem } from "../features/orders/models/orders-items";

// Helper function to pick a random item from an array
function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Random names and phone numbers
const names = ["John Doe", "Jane Smith", "Alice Brown", "Bob Johnson", "Emily Davis"];
const phones = ["555-1234-99", "555-5678-75", "555-9012-76", "555-3456-621", "555-7890-884"];

// Function to generate a random addon
function generateAddon(): CreateItemAddon {
  return {
    title: getRandomItem(["Olives", "Mushrooms", "Cheese", "Bacon", "Tomatoes"]),
    price: parseFloat((Math.random() * (5 - 1) + 1).toFixed(2)), // Price between 1 and 5
    comment: Math.random() > 0.5 ? `With extra ${getRandomItem(["Olives", "Cheese"])}` : undefined,
  };
}

// Function to generate mock order items
function generateMockOrderItem(): CreateOrderItem {
  const item = {
    title: getRandomItem(["Pizza", "Soda", "Pasta", "Salad"]),
    price: parseFloat((Math.random() * (20 - 5) + 5).toFixed(2)), // Price between 5 and 20
    type: getRandomItem<OrderItemType>(Object.values(OrderItemType)),
    comment: Math.random() > 0.5 ? `Extra ${getRandomItem(["Cheese", "Olives"])}` : undefined,
    itemsAddons: generateAddons(),
  };
  return item;
}

// Function to generate addons for the order item
function generateAddons(): CreateItemAddon[] {
  const numberOfAddons = Math.floor(Math.random() * 3) + 1; // 1 to 3 addons
  const addons: CreateItemAddon[] = [];
  for (let i = 0; i < numberOfAddons; i++) {
    addons.push(generateAddon());
  }
  return addons;
}

// Function to generate a mock order (returns CreateFullOrder instead of CreateOrder)
function generateMockOrder(): CreateFullOrder {
  const randomName = getRandomItem(names);
  const randomPhone = getRandomItem(phones);

  return {
    ...{
      title: `Order for ${randomName}`,
      status: getRandomItem<CreateOrder["status"]>(Object.values(OrderStatus)),
      location: [
        parseFloat((Math.random() * (90 - 80) + 80).toFixed(4)), // Random latitude between 80 and 90
        parseFloat((Math.random() * (180 - 170) + 170).toFixed(4)), // Random longitude between 170 and 180
      ],
      customerPhone: randomPhone,
      customerName: randomName,
      comment: Math.random() > 0.5 ? `Customer requested ${getRandomItem(["fast delivery", "extra care"])}.` : undefined,
    },
    orderItems: Array.from({ length: Math.floor(Math.random() * 5) + 1 }, generateMockOrderItem), // Add orderItems
  };
}

// Function to generate multiple mock orders
export function generateOrders(count: number): CreateFullOrder[] {
  return Array.from({ length: count }, generateMockOrder);
}
