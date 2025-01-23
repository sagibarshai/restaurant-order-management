import { CreateFullOrder } from "../features/orders/create/controller";

export const MOCKS_FULLY_ORDERS: CreateFullOrder[] = [
  {
    location: [86.0503, 172.6397],
    comment: "Customer prefers extra care during packaging.",
    title: "Order for Alice Brown",
    status: "Received",
    customerName: "Alice Brown",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Drink",
        price: 14.45,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.31,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 15.9,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.13,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 3.59,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 8.38,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.45,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 7.1,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.15,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 15.91,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.81,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [87.2276, 171.5529],
    comment: "Customer has a nut allergy; avoid cross-contamination.",
    title: "Order for Bob Johnson",
    status: "EnRoute",
    customerName: "Bob Johnson",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Drink",
        price: 11.47,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.96,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 11.26,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.64,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 3.02,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 2.04,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 8.82,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.95,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 4.28,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 10.21,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.89,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [82.7504, 170.3266],
    title: "Order for John Doe",
    status: "Received",
    customerName: "John Doe",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Food",
        price: 11.02,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.54,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 4.87,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 12.89,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.2,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 8.76,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.26,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 1.47,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [85.2648, 178.6537],
    title: "Order for John Doe",
    status: "Received",
    customerName: "John Doe",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Drink",
        price: 11.47,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.54,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 3.7,
            title: "Cheese",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 13.2,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.76,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 2.83,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 18.89,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.4,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 2.56,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 4.83,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [81.4107, 174.6161],
    comment: "Include an extra set of cutlery in the package.",
    title: "Order for Jane Smith",
    status: "Ready",
    customerName: "Jane Smith",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Food",
        price: 7.61,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.52,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 3.34,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 6.51,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.54,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 1.32,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 11.89,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.75,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 16.1,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.56,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 1.38,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 2.13,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [84.5221, 177.4809],
    title: "Order for Jane Smith",
    status: "Ready",
    customerName: "Jane Smith",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Food",
        price: 18.47,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.89,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 1.63,
            title: "Cheese",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 7.88,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.87,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 1.98,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 17.61,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.14,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 3.33,
            title: "Cheese",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 11.36,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.44,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 16.62,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.4,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 4.99,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
          {
            price: 1.48,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [89.6623, 178.3512],
    title: "Order for Emily Davis",
    status: "Received",
    customerName: "Emily Davis",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Food",
        price: 19.35,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.14,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 3.28,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 18.44,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.54,
            title: "Cheese",
            comment: "With extra Olives",
          },
          {
            price: 1.89,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 11.14,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.25,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 4.08,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 4.21,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 9.34,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.38,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 3.51,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [85.5502, 176.1722],
    comment: "Leave the order at the front door if no answer.",
    title: "Order for John Doe",
    status: "Ready",
    customerName: "John Doe",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Drink",
        price: 14.37,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.51,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 3.63,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [81.7515, 179.0206],
    title: "Order for Emily Davis",
    status: "Ready",
    customerName: "Emily Davis",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Drink",
        price: 18.62,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.02,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 7.68,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.43,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 6.73,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.7,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
          {
            price: 4.81,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 9.03,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.69,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 4.88,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [81.3546, 170.5414],
    comment: "Contact customer upon arrival for additional instructions.",
    title: "Order for Alice Brown",
    status: "Preparing",
    customerName: "Alice Brown",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Food",
        price: 6.92,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.98,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 4.2,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 1.14,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [82.3047, 170.4208],
    title: "Order for John Doe",
    status: "Ready",
    customerName: "John Doe",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Food",
        price: 9,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.45,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 9.04,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.96,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [83.0741, 171.3376],
    title: "Order for Bob Johnson",
    status: "EnRoute",
    customerName: "Bob Johnson",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Food",
        price: 6.36,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.88,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 3.14,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 7.84,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.06,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [86.6131, 174.157],
    comment: "Include an extra set of cutlery in the package.",
    title: "Order for Alice Brown",
    status: "EnRoute",
    customerName: "Alice Brown",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Drink",
        price: 7.54,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.79,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 3.18,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 1.06,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 17.05,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.32,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 3.47,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [85.7303, 176.608],
    title: "Order for Alice Brown",
    status: "Ready",
    customerName: "Alice Brown",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Food",
        price: 8.17,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.08,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 13.97,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.93,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 3.16,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 14.9,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.34,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 16.75,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.86,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [81.5604, 176.9779],
    comment: "Customer prefers extra care during packaging.",
    title: "Order for Emily Davis",
    status: "Ready",
    customerName: "Emily Davis",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Food",
        price: 15.49,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.05,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 2.03,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 9,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.52,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 2.74,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 12.37,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.72,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 1.5,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 16.04,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.84,
            title: "Cheese",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 6.51,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.68,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 1.43,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [87.5986, 172.8194],
    comment: "Contact customer upon arrival for additional instructions.",
    title: "Order for John Doe",
    status: "Preparing",
    customerName: "John Doe",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Food",
        price: 9.16,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.49,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 3.14,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [88.0861, 172.8352],
    comment: "Customer prefers extra care during packaging.",
    title: "Order for Emily Davis",
    status: "Preparing",
    customerName: "Emily Davis",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Food",
        price: 11.84,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.91,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 2.96,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 1.52,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 19.63,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.79,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 7.11,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.28,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 1.34,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 4.36,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [82.6492, 176.2497],
    title: "Order for Emily Davis",
    status: "Received",
    customerName: "Emily Davis",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Food",
        price: 15,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.94,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 4.89,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 1.48,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 13.09,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.98,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 3.03,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 19.4,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.79,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 4.58,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 8.84,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.16,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 15.98,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.41,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 4.64,
            title: "Cheese",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [83.2432, 174.5971],
    comment: "Leave the order at the front door if no answer.",
    title: "Order for Alice Brown",
    status: "EnRoute",
    customerName: "Alice Brown",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Drink",
        price: 8.31,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.08,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 2.81,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 9.74,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.81,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 1.47,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 7.89,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.36,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 2.22,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 3.27,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [81.6108, 178.9433],
    comment: "Deliver between 6 PM and 7 PM only.",
    title: "Order for John Doe",
    status: "Received",
    customerName: "John Doe",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Drink",
        price: 7.93,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.61,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [87.0641, 176.4915],
    title: "Order for Alice Brown",
    status: "Preparing",
    customerName: "Alice Brown",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Food",
        price: 13.76,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.69,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [80.9352, 171.9271],
    title: "Order for Emily Davis",
    status: "Preparing",
    customerName: "Emily Davis",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Drink",
        price: 5.81,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.51,
            title: "Cheese",
            comment: "With extra Olives",
          },
          {
            price: 1.48,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 3.53,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 18.01,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.48,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 1.07,
            title: "Cheese",
            comment: "With extra Olives",
          },
          {
            price: 4.54,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 14.49,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.14,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 4.85,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 3.66,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 5.74,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.16,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 2.32,
            title: "Cheese",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 6.77,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.89,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [81.9512, 177.0572],
    comment: "Deliver between 6 PM and 7 PM only.",
    title: "Order for John Doe",
    status: "EnRoute",
    customerName: "John Doe",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Food",
        price: 17.26,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.79,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 3.91,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 16.07,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.43,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 5.51,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.8,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 1.59,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 3.48,
            title: "Cheese",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 15.13,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.9,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 2.67,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [85.5231, 174.5005],
    title: "Order for Bob Johnson",
    status: "Received",
    customerName: "Bob Johnson",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Food",
        price: 9.86,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.63,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 2.15,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 2.64,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 5.24,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.87,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 19.47,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.96,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 3.89,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [80.0288, 176.4147],
    comment: "Deliver between 6 PM and 7 PM only.",
    title: "Order for Alice Brown",
    status: "EnRoute",
    customerName: "Alice Brown",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Food",
        price: 6.73,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.6,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
          {
            price: 1.99,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 10.85,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.46,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 13.8,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.44,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 1.16,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 13.63,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.48,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [85.0339, 174.9648],
    title: "Order for Bob Johnson",
    status: "Received",
    customerName: "Bob Johnson",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Food",
        price: 13.42,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.62,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 7.71,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.89,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 4.41,
            title: "Cheese",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 15.41,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.46,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 2.15,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 11.06,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.69,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 1.47,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 4.78,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 15.21,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.29,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 1.76,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 2.09,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [89.9409, 173.9486],
    title: "Order for Alice Brown",
    status: "Ready",
    customerName: "Alice Brown",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Drink",
        price: 12.15,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.71,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 2.56,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 3.53,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 18.97,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.24,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 6.95,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.36,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 1.44,
            title: "Cheese",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [84.3007, 175.1004],
    title: "Order for Jane Smith",
    status: "Received",
    customerName: "Jane Smith",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Drink",
        price: 13.83,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.39,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 11.57,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.26,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 1.05,
            title: "Cheese",
            comment: "With extra Olives",
          },
          {
            price: 3.84,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 11.28,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.32,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 11.59,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.45,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 16.03,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.63,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 3.01,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 2.88,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [82.5264, 172.2306],
    title: "Order for Bob Johnson",
    status: "Received",
    customerName: "Bob Johnson",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Food",
        price: 9.69,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.75,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 1.21,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 2.27,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 14.04,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.21,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 7.13,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.96,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 2.44,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 2.29,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 10.1,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.29,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 12.44,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.36,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [83.852, 172.035],
    comment: "Customer prefers extra care during packaging.",
    title: "Order for Jane Smith",
    status: "Ready",
    customerName: "Jane Smith",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Drink",
        price: 16.19,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.1,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 1.45,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 4.27,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 12.84,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.45,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 17.42,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.37,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 13.12,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.35,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 2.92,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 4.64,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 7.87,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.39,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [82.552, 175.6448],
    title: "Order for Alice Brown",
    status: "Ready",
    customerName: "Alice Brown",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Food",
        price: 8.86,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.05,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 3.19,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 1.51,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 7.83,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.23,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [86.531, 171.7411],
    title: "Order for Alice Brown",
    status: "Preparing",
    customerName: "Alice Brown",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Food",
        price: 17.83,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.92,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [85.3341, 171.6069],
    comment: "Contact customer upon arrival for additional instructions.",
    title: "Order for Bob Johnson",
    status: "Preparing",
    customerName: "Bob Johnson",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Food",
        price: 16.15,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.42,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 4.9,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 16.51,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.55,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 7.51,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.61,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 3.83,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 12.27,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.8,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 1.26,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [80.2027, 171.529],
    comment: "Include an extra set of cutlery in the package.",
    title: "Order for Bob Johnson",
    status: "Preparing",
    customerName: "Bob Johnson",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Drink",
        price: 17.94,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.09,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 14.72,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.24,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 3.35,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 1.36,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [82.6592, 178.3905],
    title: "Order for John Doe",
    status: "Received",
    customerName: "John Doe",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Drink",
        price: 7.47,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.49,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 19.04,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.61,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 12.52,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.03,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 4.49,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 10.95,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.11,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 19.64,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.79,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 2.79,
            title: "Cheese",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [81.754, 174.751],
    comment: "Double-check the order items before delivery.",
    title: "Order for Emily Davis",
    status: "Received",
    customerName: "Emily Davis",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Food",
        price: 11.15,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.21,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 8.27,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.83,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 7.76,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.18,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [89.8413, 176.353],
    comment: "Customer requested fast delivery.",
    title: "Order for John Doe",
    status: "Preparing",
    customerName: "John Doe",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Drink",
        price: 10.57,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.29,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [84.2117, 172.6499],
    title: "Order for Jane Smith",
    status: "Ready",
    customerName: "Jane Smith",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Food",
        price: 8.59,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.46,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 1.07,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 4.82,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 9.76,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.57,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 17.89,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.04,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 2.52,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 3.21,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 5.96,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.07,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 1.81,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 4.26,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 5.64,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.46,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 3.27,
            title: "Cheese",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [82.7627, 172.7516],
    title: "Order for John Doe",
    status: "Ready",
    customerName: "John Doe",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Drink",
        price: 17.22,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.08,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 16.99,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.61,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 3.3,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 5.59,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.23,
            title: "Cheese",
            comment: "With extra Olives",
          },
          {
            price: 1.34,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 3.56,
            title: "Cheese",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 11.68,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.59,
            title: "Cheese",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 17.29,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.2,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [87.8702, 178.6994],
    title: "Order for Jane Smith",
    status: "Ready",
    customerName: "Jane Smith",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Drink",
        price: 7.68,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.28,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 15.6,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.22,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 12.95,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.06,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 1.51,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 8.09,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.07,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 1.86,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [82.3265, 173.0596],
    comment: "Deliver between 6 PM and 7 PM only.",
    title: "Order for Bob Johnson",
    status: "Preparing",
    customerName: "Bob Johnson",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Food",
        price: 6.71,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.84,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [80.4284, 174.9631],
    title: "Order for Emily Davis",
    status: "Received",
    customerName: "Emily Davis",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Drink",
        price: 16.61,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.24,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 1.34,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 1.93,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 16.12,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.89,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [84.0664, 179.1869],
    comment: "Leave the order at the front door if no answer.",
    title: "Order for Jane Smith",
    status: "Preparing",
    customerName: "Jane Smith",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Drink",
        price: 13.55,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.01,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 15.69,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.25,
            title: "Cheese",
            comment: "With extra Olives",
          },
          {
            price: 3.76,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [89.6388, 170.0592],
    comment: "Customer prefers extra care during packaging.",
    title: "Order for Emily Davis",
    status: "Ready",
    customerName: "Emily Davis",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Drink",
        price: 11.17,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.68,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 1.55,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 4.74,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 15.14,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.92,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 1.82,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 13.9,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 2.65,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 2.06,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 13.44,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.42,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 2.8,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [85.6541, 174.3488],
    title: "Order for Jane Smith",
    status: "EnRoute",
    customerName: "Jane Smith",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Drink",
        price: 16.73,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.53,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 2.97,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 3.29,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 19.06,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.3,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 3.13,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 1.29,
            title: "Cheese",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [87.9808, 174.3079],
    title: "Order for Emily Davis",
    status: "Preparing",
    customerName: "Emily Davis",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Food",
        price: 12.58,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.94,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 3.74,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [84.912, 176.8017],
    title: "Order for Emily Davis",
    status: "Ready",
    customerName: "Emily Davis",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Food",
        price: 12.25,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.82,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 18.12,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.48,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 3.95,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 6.6,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.55,
            title: "Cheese",
            comment: "With extra Olives",
          },
          {
            price: 1.17,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 11.74,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.37,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [80.1214, 177.9292],
    comment: "Leave the order at the front door if no answer.",
    title: "Order for Jane Smith",
    status: "EnRoute",
    customerName: "Jane Smith",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Food",
        price: 12.72,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.6,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 13.5,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.99,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [82.221, 170.5423],
    comment: "Add a handwritten thank-you note to the package.",
    title: "Order for Emily Davis",
    status: "Ready",
    customerName: "Emily Davis",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Drink",
        price: 13.8,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.62,
            title: "Cheese",
            comment: "With extra Olives",
          },
          {
            price: 1.34,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 19.49,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.07,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
          {
            price: 2.93,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 8.26,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.66,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 1.26,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 11.76,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.86,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 2.62,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 7.64,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.46,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 2.73,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 4.74,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [83.9339, 175.2484],
    comment: "Customer requested fast delivery.",
    title: "Order for Emily Davis",
    status: "Preparing",
    customerName: "Emily Davis",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Food",
        price: 18.16,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.07,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 2.98,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 4.55,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 14.71,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.92,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 1.5,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [84.6976, 173.4535],
    comment: "Leave the order at the front door if no answer.",
    title: "Order for Alice Brown",
    status: "Received",
    customerName: "Alice Brown",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Food",
        price: 16.35,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.9,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 4.2,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 2.19,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [85.04, 175.9438],
    comment: "Contact customer upon arrival for additional instructions.",
    title: "Order for John Doe",
    status: "Ready",
    customerName: "John Doe",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Food",
        price: 5.25,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.61,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 3.84,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 2.54,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 18.8,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.88,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 4.3,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 1.39,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [86.7891, 170.1851],
    comment: "Include an extra set of cutlery in the package.",
    title: "Order for John Doe",
    status: "Ready",
    customerName: "John Doe",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Drink",
        price: 18.98,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.09,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 2.27,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 3.02,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 10.88,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.47,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [87.0501, 177.0773],
    title: "Order for Jane Smith",
    status: "EnRoute",
    customerName: "Jane Smith",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Food",
        price: 8.75,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.42,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 1.59,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [81.8777, 175.4981],
    comment: "Ensure the food is delivered hot and fresh.",
    title: "Order for John Doe",
    status: "Received",
    customerName: "John Doe",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Food",
        price: 13.45,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.14,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 4.13,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
          {
            price: 2.51,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 9.27,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.46,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 7.28,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.4,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 3.5,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 1.6,
            title: "Cheese",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 18.51,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.66,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 1.82,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 9.32,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.56,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [83.4378, 173.0437],
    comment: "Leave the order at the front door if no answer.",
    title: "Order for Emily Davis",
    status: "Received",
    customerName: "Emily Davis",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Food",
        price: 13.63,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.55,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 2.95,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [87.3448, 177.9136],
    comment: "Contact customer upon arrival for additional instructions.",
    title: "Order for Jane Smith",
    status: "Preparing",
    customerName: "Jane Smith",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Food",
        price: 14.58,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.33,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 15.64,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.79,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 4.24,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 12.61,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.38,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 10.59,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.29,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 3.21,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [82.6755, 176.0559],
    title: "Order for John Doe",
    status: "Received",
    customerName: "John Doe",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Food",
        price: 15.22,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.85,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 4.43,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 1.02,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 11.19,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.87,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 10.73,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.95,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 1.31,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 5.6,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.55,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 7.62,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.44,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 1.83,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [80.8204, 174.5556],
    title: "Order for Bob Johnson",
    status: "EnRoute",
    customerName: "Bob Johnson",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Drink",
        price: 18.23,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.18,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 2.4,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 3.44,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 5.85,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.05,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 3.44,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 8.28,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.21,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 4.59,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 10.48,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.42,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 4.05,
            title: "Cheese",
            comment: "With extra Olives",
          },
          {
            price: 3.33,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 8.67,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.03,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 2.55,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [88.3858, 170.3452],
    title: "Order for Jane Smith",
    status: "Preparing",
    customerName: "Jane Smith",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Drink",
        price: 6.66,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.54,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 4.11,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 18.17,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.82,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 9.68,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.66,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 3.52,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 2.47,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [84.5046, 177.1512],
    title: "Order for John Doe",
    status: "EnRoute",
    customerName: "John Doe",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Food",
        price: 17.01,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.7,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [89.7536, 173.202],
    title: "Order for Emily Davis",
    status: "Received",
    customerName: "Emily Davis",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Drink",
        price: 5.11,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.82,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 4.15,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 13.79,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.83,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 2.23,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 16.59,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.58,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 1.5,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [83.0495, 170.0022],
    comment: "Include an extra set of cutlery in the package.",
    title: "Order for Jane Smith",
    status: "Received",
    customerName: "Jane Smith",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Food",
        price: 6.88,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.42,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 18.87,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.53,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 16.89,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.83,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 4.52,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 1.84,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [87.087, 177.0584],
    title: "Order for Jane Smith",
    status: "Ready",
    customerName: "Jane Smith",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Drink",
        price: 11.54,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.72,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 4.14,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 12.41,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.2,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 11.18,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.6,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [82.2666, 172.0731],
    title: "Order for Bob Johnson",
    status: "Preparing",
    customerName: "Bob Johnson",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Drink",
        price: 10.16,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.18,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 8.77,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.04,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 4.95,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 14.77,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.85,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 1.78,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 15.81,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.02,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 3.27,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 3.65,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [83.8659, 170.3164],
    title: "Order for Jane Smith",
    status: "EnRoute",
    customerName: "Jane Smith",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Drink",
        price: 9.99,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.5,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 4.94,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 1.51,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 13.7,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.86,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 3.93,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 18.81,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.73,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 4.11,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 4.72,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 10.04,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.54,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 1.4,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 1.08,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [83.6224, 175.5374],
    title: "Order for Jane Smith",
    status: "Ready",
    customerName: "Jane Smith",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Drink",
        price: 15.14,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.93,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 16.45,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.96,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 2.47,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 16.06,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.59,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 1.29,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 1.7,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [89.183, 172.8606],
    comment: "Contact customer upon arrival for additional instructions.",
    title: "Order for Bob Johnson",
    status: "Received",
    customerName: "Bob Johnson",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Food",
        price: 6.27,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.99,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 1.77,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 3.16,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 12.81,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.41,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [83.5499, 176.8221],
    comment: "Leave the order at the front door if no answer.",
    title: "Order for Bob Johnson",
    status: "EnRoute",
    customerName: "Bob Johnson",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Drink",
        price: 9.46,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.73,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 2.97,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 19.17,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.57,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 3.45,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 1.81,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 15.87,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.24,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 1.7,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 15.79,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.36,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 4.41,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 4.75,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 16.91,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.22,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 1.16,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [87.5481, 172.628],
    title: "Order for John Doe",
    status: "Received",
    customerName: "John Doe",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Drink",
        price: 7.56,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.63,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 3.38,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 8.41,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.58,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [86.474, 178.5129],
    title: "Order for Alice Brown",
    status: "EnRoute",
    customerName: "Alice Brown",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Food",
        price: 17.27,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.65,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 1.33,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 15.59,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.16,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 2.69,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 2.75,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 7.54,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.39,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 3.68,
            title: "Cheese",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 5.45,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.21,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 1.89,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [88.3328, 171.1557],
    title: "Order for John Doe",
    status: "Ready",
    customerName: "John Doe",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Food",
        price: 9.66,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.15,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 4.42,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 19.95,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.12,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 18.69,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.36,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 4.95,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 10.18,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.24,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 1.45,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 1.7,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 12.49,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.34,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 4.96,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [89.2557, 177.1459],
    comment: "Leave the order at the front door if no answer.",
    title: "Order for Emily Davis",
    status: "Preparing",
    customerName: "Emily Davis",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Food",
        price: 17.13,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.3,
            title: "Cheese",
            comment: "With extra Olives",
          },
          {
            price: 1.77,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 4.35,
            title: "Cheese",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 16.15,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.93,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [89.0873, 178.544],
    title: "Order for Jane Smith",
    status: "Ready",
    customerName: "Jane Smith",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Food",
        price: 14.06,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.69,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 3.55,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 3.14,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 9.25,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.65,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [85.2688, 178.5909],
    title: "Order for Emily Davis",
    status: "Received",
    customerName: "Emily Davis",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Food",
        price: 9.55,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.01,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 12.1,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.41,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
          {
            price: 4.46,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 14.06,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.5,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 2.41,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [88.2935, 170.9594],
    comment: "Customer prefers extra care during packaging.",
    title: "Order for Jane Smith",
    status: "Preparing",
    customerName: "Jane Smith",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Drink",
        price: 11.3,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.89,
            title: "Cheese",
            comment: "With extra Olives",
          },
          {
            price: 4.78,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [81.2576, 174.8437],
    title: "Order for Emily Davis",
    status: "Ready",
    customerName: "Emily Davis",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Food",
        price: 10.58,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.38,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 1.51,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 4.17,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 6.97,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.96,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 1.04,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 5.24,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.14,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 10.16,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.61,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 1.76,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 18.63,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.58,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 3.12,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 3.87,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [87.0606, 179.3109],
    comment: "Ensure the food is delivered hot and fresh.",
    title: "Order for Jane Smith",
    status: "Ready",
    customerName: "Jane Smith",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Drink",
        price: 9.34,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.5,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 2.75,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 4.98,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 14.26,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.41,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 18.22,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.51,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 4.73,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 4.15,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [81.5458, 171.4789],
    title: "Order for John Doe",
    status: "Preparing",
    customerName: "John Doe",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Drink",
        price: 5.25,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.82,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 1.97,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 2.77,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 7.33,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.65,
            title: "Cheese",
            comment: "With extra Olives",
          },
          {
            price: 1.12,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 11.99,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.63,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 3.46,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 2.65,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 13.75,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.82,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 1.14,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 1.91,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [87.2963, 177.0683],
    title: "Order for John Doe",
    status: "Ready",
    customerName: "John Doe",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Drink",
        price: 5.38,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.41,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 2.4,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 12.95,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.89,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 1.9,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 18.72,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.63,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 16.49,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.36,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 4.69,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 6.73,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.98,
            title: "Cheese",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [86.2214, 176.3072],
    comment: "Include an extra set of cutlery in the package.",
    title: "Order for Bob Johnson",
    status: "Received",
    customerName: "Bob Johnson",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Drink",
        price: 12.71,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.7,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 2.98,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
          {
            price: 3.02,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 19.33,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.54,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 1.39,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 10.89,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.56,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 3.61,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [81.5238, 178.9933],
    title: "Order for John Doe",
    status: "Received",
    customerName: "John Doe",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Drink",
        price: 13.55,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.4,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 2.88,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 1.96,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 16.78,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.1,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 2.53,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 1.17,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [82.8868, 171.0943],
    title: "Order for Emily Davis",
    status: "Preparing",
    customerName: "Emily Davis",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Food",
        price: 14.17,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.29,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 7.98,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.69,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
          {
            price: 1.93,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 3.9,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 9.7,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.37,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 8.64,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.55,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 2.4,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 10.67,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.64,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 3.84,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [84.9867, 170.7313],
    comment: "Double-check the order items before delivery.",
    title: "Order for John Doe",
    status: "EnRoute",
    customerName: "John Doe",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Drink",
        price: 5.63,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.89,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 4.16,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 8.83,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.61,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 2.55,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 4.94,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 17.96,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.03,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 2.67,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 3.46,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [86.8683, 175.165],
    comment: "Add a handwritten thank-you note to the package.",
    title: "Order for Alice Brown",
    status: "EnRoute",
    customerName: "Alice Brown",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Drink",
        price: 11.86,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.21,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 11.7,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.8,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 2.91,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 1.88,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 9.12,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.73,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 1.06,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 14.67,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.7,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 4.9,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 2.18,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 19.02,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.68,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 2.72,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 3.59,
            title: "Cheese",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [82.7563, 174.9563],
    comment: "Double-check the order items before delivery.",
    title: "Order for Alice Brown",
    status: "Received",
    customerName: "Alice Brown",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Drink",
        price: 18.33,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.54,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 1.65,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 3.32,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 13.63,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.43,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 2.28,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 12.05,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.57,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 7.35,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.16,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 1.18,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [85.4698, 170.341],
    comment: "Deliver between 6 PM and 7 PM only.",
    title: "Order for Alice Brown",
    status: "EnRoute",
    customerName: "Alice Brown",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Drink",
        price: 10.07,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.27,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [86.529, 171.2046],
    title: "Order for Emily Davis",
    status: "Received",
    customerName: "Emily Davis",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Drink",
        price: 16.54,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.46,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 2.34,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 4.25,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 9.54,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.19,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 16.65,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.37,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 3.81,
            title: "Cheese",
            comment: "With extra Olives",
          },
          {
            price: 1.94,
            title: "Cheese",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [89.9463, 172.6931],
    title: "Order for John Doe",
    status: "Ready",
    customerName: "John Doe",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Food",
        price: 19.02,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.45,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 4.81,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 2.2,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 10.14,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.06,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 13.51,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.78,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 2.59,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [84.3098, 175.3537],
    comment: "Add a handwritten thank-you note to the package.",
    title: "Order for Alice Brown",
    status: "Received",
    customerName: "Alice Brown",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Food",
        price: 16.55,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.91,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 2.64,
            title: "Cheese",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 14.24,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.03,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 18.97,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.89,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 3.15,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 2.07,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [89.7822, 177.2732],
    title: "Order for Bob Johnson",
    status: "EnRoute",
    customerName: "Bob Johnson",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Drink",
        price: 10.44,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.43,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 4.93,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 4.48,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 6.5,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.69,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 2.78,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 15.33,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.05,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 3.73,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 1.17,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 6.6,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.21,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 4.55,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [83.6194, 171.9985],
    comment: "Customer has a nut allergy; avoid cross-contamination.",
    title: "Order for Emily Davis",
    status: "Preparing",
    customerName: "Emily Davis",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Food",
        price: 6.92,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.29,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 9.43,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.58,
            title: "Cheese",
            comment: "With extra Olives",
          },
          {
            price: 4.04,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 8.51,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.42,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 3.71,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 14.47,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.04,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 1,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 2.94,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [89.9072, 173.9594],
    title: "Order for John Doe",
    status: "Ready",
    customerName: "John Doe",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Food",
        price: 9.19,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.29,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 14.93,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.6,
            title: "Cheese",
            comment: "With extra Olives",
          },
          {
            price: 4.25,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [87.8888, 174.7169],
    title: "Order for Alice Brown",
    status: "Preparing",
    customerName: "Alice Brown",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Food",
        price: 15.12,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.11,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [87.2265, 177.8523],
    comment: "Customer requested fast delivery.",
    title: "Order for Alice Brown",
    status: "Received",
    customerName: "Alice Brown",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Drink",
        price: 7.98,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.48,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 1.95,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 2.9,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 18.54,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.92,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 4.49,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 1.64,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 6.37,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.41,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 17.97,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.21,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 1.25,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 2.5,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [82.2401, 179.7484],
    title: "Order for John Doe",
    status: "Preparing",
    customerName: "John Doe",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Drink",
        price: 15.26,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.28,
            title: "Cheese",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 14.57,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.84,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 3.8,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 2.86,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 12.42,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.4,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 4.33,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [80.4217, 176.4581],
    comment: "Include an extra set of cutlery in the package.",
    title: "Order for Alice Brown",
    status: "Ready",
    customerName: "Alice Brown",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Drink",
        price: 10.31,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.2,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 1.62,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 4,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 10.38,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.53,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 4.15,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 1.03,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 11.31,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.78,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 3.45,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 15.94,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.18,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 11.08,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.62,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 2.91,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 3.52,
            title: "Cheese",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [88.5253, 172.2449],
    title: "Order for Alice Brown",
    status: "Received",
    customerName: "Alice Brown",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Drink",
        price: 19.38,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.88,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 4.02,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 8.05,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.28,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 12.83,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.1,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [81.8021, 170.454],
    comment: "Add a handwritten thank-you note to the package.",
    title: "Order for Emily Davis",
    status: "Ready",
    customerName: "Emily Davis",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Food",
        price: 8.85,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.33,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 17.95,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.21,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 3.36,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 14.26,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.24,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 3.74,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 1.43,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [89.6274, 170.296],
    title: "Order for John Doe",
    status: "Received",
    customerName: "John Doe",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Food",
        price: 8.54,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.1,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 4.68,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 3.92,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 8.89,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.29,
            title: "Cheese",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [83.7804, 170.886],
    title: "Order for John Doe",
    status: "EnRoute",
    customerName: "John Doe",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Drink",
        price: 11.72,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.53,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 1.51,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 3.34,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 12.64,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.83,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 4.89,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 6.14,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.42,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 4.97,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [84.1483, 174.0218],
    comment: "Customer prefers extra care during packaging.",
    title: "Order for Emily Davis",
    status: "EnRoute",
    customerName: "Emily Davis",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Drink",
        price: 10.76,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.13,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 2.69,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [80.6801, 175.559],
    title: "Order for Bob Johnson",
    status: "Ready",
    customerName: "Bob Johnson",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Food",
        price: 12.98,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.87,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 1.08,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 4.84,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 5.13,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.52,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 1.92,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 1.93,
            title: "Cheese",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 17.6,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.44,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 4.89,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 14.23,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.38,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 11.96,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.16,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 3.35,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 1.17,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [82.5202, 170.6486],
    title: "Order for Alice Brown",
    status: "Received",
    customerName: "Alice Brown",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Food",
        price: 16.4,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.22,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 4.38,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 2.92,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [88.2799, 171.1905],
    comment: "Customer has a nut allergy; avoid cross-contamination.",
    title: "Order for John Doe",
    status: "EnRoute",
    customerName: "John Doe",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Drink",
        price: 8.71,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.37,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 2.63,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [89.4684, 179.2936],
    comment: "Ensure the food is delivered hot and fresh.",
    title: "Order for John Doe",
    status: "Ready",
    customerName: "John Doe",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Drink",
        price: 11.42,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.71,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 19.9,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.28,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 2.68,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
          {
            price: 4.61,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 15.5,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.43,
            title: "Cheese",
            comment: "With extra Olives",
          },
          {
            price: 1.15,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 17.62,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.89,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 1.98,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [86.0585, 173.6326],
    comment: "Leave the order at the front door if no answer.",
    title: "Order for Alice Brown",
    status: "Preparing",
    customerName: "Alice Brown",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Drink",
        price: 11.14,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.77,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 1.09,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 4.72,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 17.52,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.08,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 2.15,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 3.51,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 13.12,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.52,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 12.12,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.33,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [80.5064, 170.232],
    title: "Order for John Doe",
    status: "Preparing",
    customerName: "John Doe",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Drink",
        price: 19.06,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.72,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 2.99,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 2.44,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 13.45,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.2,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 17.14,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.95,
            title: "Cheese",
            comment: "With extra Olives",
          },
          {
            price: 1.75,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 3.62,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 10.22,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.71,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 3.02,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 4.68,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [83.8737, 175.7713],
    comment: "Ensure the food is delivered hot and fresh.",
    title: "Order for Jane Smith",
    status: "Preparing",
    customerName: "Jane Smith",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Drink",
        price: 14.74,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.91,
            title: "Cheese",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 5.84,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.09,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 2.32,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 1.36,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [80.4758, 172.8735],
    comment: "Double-check the order items before delivery.",
    title: "Order for John Doe",
    status: "Ready",
    customerName: "John Doe",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Drink",
        price: 6.74,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.92,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [80.7597, 177.4712],
    comment: "Include an extra set of cutlery in the package.",
    title: "Order for Bob Johnson",
    status: "Ready",
    customerName: "Bob Johnson",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Food",
        price: 12.67,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.6,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 14.48,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.38,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 4.3,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 6.38,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.08,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 14.1,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.35,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 1.33,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 2.14,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [88.5411, 174.896],
    title: "Order for Alice Brown",
    status: "Received",
    customerName: "Alice Brown",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Food",
        price: 6.27,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.93,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 2.48,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 4.05,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 9.16,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.16,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 1.59,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 4.29,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 16.16,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.81,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 4.66,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 12.16,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.17,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 4.95,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 2.29,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 5,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.35,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 3.32,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
          {
            price: 2.7,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [85.0803, 174.8577],
    title: "Order for Emily Davis",
    status: "Preparing",
    customerName: "Emily Davis",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Drink",
        price: 19.43,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.27,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 4.01,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [87.0664, 176.0581],
    title: "Order for Emily Davis",
    status: "Preparing",
    customerName: "Emily Davis",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Food",
        price: 8.92,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.11,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 13.25,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.31,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 1.69,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 16.97,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.58,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 2.8,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 13.9,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.89,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [80.7522, 179.1443],
    title: "Order for Emily Davis",
    status: "Preparing",
    customerName: "Emily Davis",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Drink",
        price: 5.11,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.19,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 3.11,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 7.23,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.84,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 3.34,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 4.69,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 13.03,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.83,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [87.477, 179.1128],
    comment: "Customer prefers extra care during packaging.",
    title: "Order for Bob Johnson",
    status: "EnRoute",
    customerName: "Bob Johnson",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Food",
        price: 13.96,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.16,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 13.35,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.97,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 4.43,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 3.64,
            title: "Cheese",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 8.87,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.83,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 4.53,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 7.79,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.37,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 4.11,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 4.89,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [80.1474, 179.0153],
    comment: "Deliver between 6 PM and 7 PM only.",
    title: "Order for Alice Brown",
    status: "EnRoute",
    customerName: "Alice Brown",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Food",
        price: 19.01,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.12,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 4.05,
            title: "Cheese",
            comment: "With extra Olives",
          },
          {
            price: 1.57,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 16.31,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.91,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 1.32,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 9.93,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.59,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 2.41,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [86.7946, 177.1529],
    comment: "Add a handwritten thank-you note to the package.",
    title: "Order for Emily Davis",
    status: "EnRoute",
    customerName: "Emily Davis",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Food",
        price: 19.15,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.12,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 17.28,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.08,
            title: "Cheese",
            comment: "With extra Olives",
          },
          {
            price: 4.72,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 13.08,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.35,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 3.72,
            title: "Cheese",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 9.63,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.23,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 2.23,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 4.26,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [81.6327, 173.0183],
    title: "Order for Jane Smith",
    status: "Ready",
    customerName: "Jane Smith",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Drink",
        price: 14.5,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.62,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 4.32,
            title: "Cheese",
            comment: "With extra Olives",
          },
          {
            price: 3.17,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 10.91,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 2.51,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 1.59,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 14.23,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.88,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 4.85,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 12.84,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.08,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [81.0138, 174.435],
    title: "Order for John Doe",
    status: "EnRoute",
    customerName: "John Doe",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Food",
        price: 5.13,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.52,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 2.68,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 17.31,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.22,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 2.06,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 3.69,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [89.0232, 171.5295],
    comment: "Customer requested fast delivery.",
    title: "Order for John Doe",
    status: "Received",
    customerName: "John Doe",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Food",
        price: 11.77,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.61,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 19.04,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.97,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 3.83,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 2.54,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 19.28,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.52,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 4.63,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 2.83,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 14.64,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.82,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [85.7807, 176.563],
    title: "Order for John Doe",
    status: "Ready",
    customerName: "John Doe",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Food",
        price: 5.3,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.56,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [86.4866, 179.0389],
    comment: "Customer prefers extra care during packaging.",
    title: "Order for John Doe",
    status: "Received",
    customerName: "John Doe",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Food",
        price: 19.33,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.48,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 3.57,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 13.79,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.24,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 7.78,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.31,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 1.79,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 2.99,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 14.78,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.12,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [85.3685, 171.7073],
    comment: "Customer requested fast delivery.",
    title: "Order for Jane Smith",
    status: "Received",
    customerName: "Jane Smith",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Food",
        price: 5.77,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.36,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 4.77,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 3.05,
            title: "Cheese",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [87.3329, 177.2925],
    comment: "Customer requested fast delivery.",
    title: "Order for Jane Smith",
    status: "Ready",
    customerName: "Jane Smith",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Drink",
        price: 12.68,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.12,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 2.3,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 12.36,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.17,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
          {
            price: 3.59,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 17.69,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.62,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 3.51,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 16.17,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.27,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 3.45,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 2.84,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [85.981, 174.5061],
    title: "Order for Emily Davis",
    status: "Preparing",
    customerName: "Emily Davis",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Food",
        price: 16.22,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.76,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 3.67,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [89.3473, 179.4324],
    comment: "Ensure the food is delivered hot and fresh.",
    title: "Order for Jane Smith",
    status: "EnRoute",
    customerName: "Jane Smith",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Drink",
        price: 10.22,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.85,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 2.33,
            title: "Cheese",
            comment: "With extra Olives",
          },
          {
            price: 3.66,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [89.269, 171.3525],
    title: "Order for Emily Davis",
    status: "Ready",
    customerName: "Emily Davis",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Drink",
        price: 11.74,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.26,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 3.34,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 13.6,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.16,
            title: "Cheese",
            comment: "With extra Olives",
          },
          {
            price: 3.3,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 4.57,
            title: "Cheese",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 19.13,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.35,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 1.82,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 12.08,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.44,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 4.99,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 3.25,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [87.1702, 179.732],
    title: "Order for Alice Brown",
    status: "Ready",
    customerName: "Alice Brown",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Food",
        price: 16.01,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.88,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
          {
            price: 1.92,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 3.65,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [85.6136, 171.1195],
    comment: "Contact customer upon arrival for additional instructions.",
    title: "Order for John Doe",
    status: "Preparing",
    customerName: "John Doe",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Drink",
        price: 14.62,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.26,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 4.39,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 2.97,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 6.27,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.61,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 8.28,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.31,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 1.17,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 17.93,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.69,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 4.15,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 19.48,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.46,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 3.51,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
          {
            price: 2.63,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [89.8219, 172.5071],
    title: "Order for Jane Smith",
    status: "Preparing",
    customerName: "Jane Smith",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Food",
        price: 16.91,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.42,
            title: "Cheese",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 9.92,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.14,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 4.2,
            title: "Cheese",
            comment: "With extra Olives",
          },
          {
            price: 4.11,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 18.81,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.57,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [87.632, 174.6313],
    title: "Order for John Doe",
    status: "Received",
    customerName: "John Doe",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Drink",
        price: 19.1,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.68,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 1.09,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 3.47,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 6.54,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.79,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [86.1926, 177.2819],
    comment: "Customer prefers extra care during packaging.",
    title: "Order for Alice Brown",
    status: "Preparing",
    customerName: "Alice Brown",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Food",
        price: 19.78,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.18,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 3.73,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 19.61,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.5,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 3.35,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 1.81,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 12.92,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.14,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 3.57,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 11.63,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.96,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 14.22,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.93,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [84.745, 174.0993],
    title: "Order for Alice Brown",
    status: "Ready",
    customerName: "Alice Brown",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Food",
        price: 5.63,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.14,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 14.02,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.8,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 17.11,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.87,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 4.26,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 1.23,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 14.3,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.42,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 3.92,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 2.64,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 10.27,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.32,
            title: "Cheese",
            comment: "With extra Olives",
          },
          {
            price: 1.96,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 3.23,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [81.4482, 176.9896],
    comment: "Customer prefers extra care during packaging.",
    title: "Order for John Doe",
    status: "Preparing",
    customerName: "John Doe",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Drink",
        price: 14.08,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.11,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 4.16,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [80.692, 171.5016],
    title: "Order for John Doe",
    status: "Ready",
    customerName: "John Doe",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Food",
        price: 7.45,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.67,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 2.98,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 2.32,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 12.75,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.18,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 4.33,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 19.19,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.81,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
          {
            price: 3.39,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [86.0012, 179.105],
    title: "Order for Jane Smith",
    status: "EnRoute",
    customerName: "Jane Smith",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Food",
        price: 8.05,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.25,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
          {
            price: 2.21,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 2.6,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 18.12,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.89,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 11.49,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.42,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 2.09,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 2.55,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 18.82,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.97,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 1.21,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 2.46,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [88.2482, 173.281],
    title: "Order for Alice Brown",
    status: "Ready",
    customerName: "Alice Brown",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Drink",
        price: 13.97,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.91,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 11,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.18,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 2.23,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 3.44,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 13.37,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.6,
            title: "Cheese",
            comment: "With extra Olives",
          },
          {
            price: 4.87,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 2.19,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 15.47,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.89,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 4.72,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 4.6,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [80.6007, 170.6228],
    title: "Order for Jane Smith",
    status: "Received",
    customerName: "Jane Smith",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Drink",
        price: 10.27,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.27,
            title: "Cheese",
            comment: "With extra Olives",
          },
          {
            price: 1.53,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 4.95,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [81.3242, 174.6313],
    title: "Order for Jane Smith",
    status: "Received",
    customerName: "Jane Smith",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Drink",
        price: 18.36,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.46,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 9.21,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.04,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 2.55,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 4.42,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 7.67,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.85,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 13.52,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.51,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [83.5938, 173.7128],
    comment: "Leave the order at the front door if no answer.",
    title: "Order for Alice Brown",
    status: "Ready",
    customerName: "Alice Brown",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Drink",
        price: 14.3,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.44,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 3.12,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 3.65,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 15.11,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.71,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 10.13,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.55,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 3.26,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 2.63,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 19.55,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.74,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 12.24,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.77,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
          {
            price: 4.66,
            title: "Cheese",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [82.1836, 175.781],
    title: "Order for John Doe",
    status: "Preparing",
    customerName: "John Doe",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Drink",
        price: 8.04,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.94,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 1.49,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 4.48,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 11.65,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.83,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 3.54,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 18.53,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.7,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 1.86,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 3.62,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 9.18,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.81,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 3.38,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 12.38,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.11,
            title: "Cheese",
            comment: "With extra Olives",
          },
          {
            price: 4.82,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 3.48,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [89.0312, 172.0318],
    title: "Order for Jane Smith",
    status: "EnRoute",
    customerName: "Jane Smith",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Food",
        price: 12.32,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.13,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 2.14,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [80.9653, 176.2811],
    comment: "Double-check the order items before delivery.",
    title: "Order for Emily Davis",
    status: "EnRoute",
    customerName: "Emily Davis",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Food",
        price: 11.52,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.35,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 1.86,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 2.2,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [80.4208, 179.1582],
    title: "Order for Jane Smith",
    status: "EnRoute",
    customerName: "Jane Smith",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Drink",
        price: 14.23,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.31,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 10.1,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.74,
            title: "Cheese",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [80.5983, 179.3915],
    title: "Order for Bob Johnson",
    status: "Received",
    customerName: "Bob Johnson",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Drink",
        price: 19.91,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.7,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 4.29,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
          {
            price: 1.78,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 7.11,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.41,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 8.19,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.35,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 3.67,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 2.21,
            title: "Cheese",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [84.0353, 171.9311],
    comment: "Ensure the food is delivered hot and fresh.",
    title: "Order for Jane Smith",
    status: "EnRoute",
    customerName: "Jane Smith",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Food",
        price: 8.53,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.75,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 3.32,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 13.55,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.44,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 2.48,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 3.98,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 19.32,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.78,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 1.13,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [81.5466, 177.4158],
    comment: "Contact customer upon arrival for additional instructions.",
    title: "Order for Emily Davis",
    status: "Preparing",
    customerName: "Emily Davis",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Food",
        price: 19.86,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.62,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 4.91,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 9.52,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.96,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 4.54,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 9.25,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.92,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 3.46,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 9.7,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.74,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [80.4518, 176.4629],
    comment: "Leave the order at the front door if no answer.",
    title: "Order for John Doe",
    status: "Ready",
    customerName: "John Doe",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Drink",
        price: 19.41,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.28,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 19.7,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.99,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 2.57,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 1.1,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 5.4,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.07,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 1.19,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [80.0635, 174.2786],
    comment: "Leave the order at the front door if no answer.",
    title: "Order for Jane Smith",
    status: "EnRoute",
    customerName: "Jane Smith",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Drink",
        price: 19.26,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.92,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [84.0893, 176.0816],
    title: "Order for Jane Smith",
    status: "Preparing",
    customerName: "Jane Smith",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Food",
        price: 12.38,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.06,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 1.4,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 12.15,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.89,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 2.95,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 19.24,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.51,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 12.62,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.26,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 1.49,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 3.71,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 7.69,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.13,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 3.87,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [80.1282, 174.0316],
    comment: "Deliver between 6 PM and 7 PM only.",
    title: "Order for Alice Brown",
    status: "Ready",
    customerName: "Alice Brown",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Drink",
        price: 17.5,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.3,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [85.8661, 174.3855],
    title: "Order for Alice Brown",
    status: "EnRoute",
    customerName: "Alice Brown",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Drink",
        price: 5.26,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.01,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 17.82,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.36,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 1.18,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 3.93,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [83.9555, 179.9765],
    comment: "Leave the order at the front door if no answer.",
    title: "Order for John Doe",
    status: "Received",
    customerName: "John Doe",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Drink",
        price: 15.59,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.85,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 1.78,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 14.63,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.46,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 4.05,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 2.69,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 18,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.86,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [85.2675, 171.92],
    title: "Order for Emily Davis",
    status: "Ready",
    customerName: "Emily Davis",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Food",
        price: 14.75,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.63,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 15.81,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.52,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 2.19,
            title: "Cheese",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 13.15,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.27,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [82.5015, 171.1527],
    comment: "Leave the order at the front door if no answer.",
    title: "Order for Emily Davis",
    status: "Received",
    customerName: "Emily Davis",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Drink",
        price: 12.46,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.28,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 1.31,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 10.57,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.27,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 2.79,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 19.14,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.14,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 1.33,
            title: "Cheese",
            comment: "With extra Olives",
          },
          {
            price: 4.49,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [83.6185, 173.5015],
    title: "Order for Jane Smith",
    status: "Preparing",
    customerName: "Jane Smith",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Drink",
        price: 14.97,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.35,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 1.41,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 2.39,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 12.39,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.27,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 3.98,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 12.74,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.12,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 4.62,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
          {
            price: 3.49,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 11.31,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.41,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 1.22,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [86.301, 178.7326],
    title: "Order for John Doe",
    status: "Preparing",
    customerName: "John Doe",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Drink",
        price: 12.92,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.11,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 3.52,
            title: "Cheese",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 14.2,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.66,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 8.76,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.99,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 1.01,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 4.64,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [87.4192, 176.6008],
    title: "Order for Jane Smith",
    status: "Ready",
    customerName: "Jane Smith",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Drink",
        price: 6.75,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.89,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 2.4,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 2.04,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 6.64,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.47,
            title: "Cheese",
            comment: "With extra Olives",
          },
          {
            price: 4.93,
            title: "Cheese",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 16.89,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.72,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 1.64,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 1.18,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [81.9607, 178.1118],
    comment: "Add a handwritten thank-you note to the package.",
    title: "Order for Bob Johnson",
    status: "Ready",
    customerName: "Bob Johnson",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Food",
        price: 7.2,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.19,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 2.82,
            title: "Cheese",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 5.17,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.77,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 8.63,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.72,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 2.73,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 3.64,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 15.41,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.24,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 3.25,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [85.1727, 176.7314],
    comment: "Customer requested fast delivery.",
    title: "Order for Alice Brown",
    status: "Ready",
    customerName: "Alice Brown",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Drink",
        price: 8.43,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.74,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 3.76,
            title: "Cheese",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 6.06,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.33,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 1.82,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 17.79,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.07,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 2.47,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 2.43,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 18.18,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.28,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 1.05,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 4.53,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 14.91,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.61,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 1.13,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [83.6796, 172.1033],
    comment: "Customer prefers extra care during packaging.",
    title: "Order for Bob Johnson",
    status: "Preparing",
    customerName: "Bob Johnson",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Food",
        price: 5.42,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.39,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 2.35,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 6.04,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.92,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 1.81,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 2.47,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [83.7249, 179.9248],
    title: "Order for Jane Smith",
    status: "Ready",
    customerName: "Jane Smith",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Food",
        price: 15.86,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.19,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 1.16,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 3.45,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 15.69,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.92,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 4.95,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 6.89,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.41,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 4.95,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 2.22,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 10.18,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.67,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [87.3302, 170.8441],
    comment: "Double-check the order items before delivery.",
    title: "Order for Alice Brown",
    status: "EnRoute",
    customerName: "Alice Brown",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Food",
        price: 17.07,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.35,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 2.22,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 15.73,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.47,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 2.78,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [87.6428, 172.5561],
    title: "Order for Emily Davis",
    status: "Ready",
    customerName: "Emily Davis",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Drink",
        price: 15.21,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.11,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 19.68,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.32,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 2.03,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 14.67,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.11,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 7.44,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.36,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
          {
            price: 1.04,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 3.71,
            title: "Cheese",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [84.2886, 172.4251],
    comment: "Contact customer upon arrival for additional instructions.",
    title: "Order for Bob Johnson",
    status: "EnRoute",
    customerName: "Bob Johnson",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Food",
        price: 14.88,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.49,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 17.04,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.43,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 4.9,
            title: "Cheese",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 10.71,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.11,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 5.43,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.22,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 1.36,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 8.58,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.54,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 1.86,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 3.13,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [87.1704, 172.2057],
    title: "Order for John Doe",
    status: "Received",
    customerName: "John Doe",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Drink",
        price: 16.83,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.58,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 4.2,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 3.35,
            title: "Cheese",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 15.59,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.69,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 3.23,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 5.96,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.6,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 3.27,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 4.16,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 19.22,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.75,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 1.83,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 7.26,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.13,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 2.36,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [82.5533, 176.9416],
    comment: "Customer prefers extra care during packaging.",
    title: "Order for Jane Smith",
    status: "Preparing",
    customerName: "Jane Smith",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Food",
        price: 17.01,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.54,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 4.02,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 16.34,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.23,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 2.05,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 16.03,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.77,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 8.5,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.55,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 4.82,
            title: "Cheese",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 11.27,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.82,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 1.14,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 1.54,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [85.9239, 173.4536],
    title: "Order for Emily Davis",
    status: "Preparing",
    customerName: "Emily Davis",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Drink",
        price: 10.94,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.9,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 1.62,
            title: "Cheese",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 19.67,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.2,
            title: "Cheese",
            comment: "With extra Olives",
          },
          {
            price: 4.84,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 5.16,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.87,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 3.07,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 12.74,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.74,
            title: "Cheese",
            comment: "With extra Olives",
          },
          {
            price: 3.29,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 4.67,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 16.21,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.6,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [85.8086, 173.795],
    title: "Order for John Doe",
    status: "Received",
    customerName: "John Doe",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Food",
        price: 7.54,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.04,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 2.42,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 13.16,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.64,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 1.54,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 6.27,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.77,
            title: "Cheese",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 14.13,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.66,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [81.6256, 177.477],
    title: "Order for Emily Davis",
    status: "EnRoute",
    customerName: "Emily Davis",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Drink",
        price: 12.68,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.68,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 2.75,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 1.56,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 10.42,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.45,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 4.09,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 16.35,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 2,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 1.6,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 4.7,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 11.24,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.63,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 16.43,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.66,
            title: "Cheese",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [85.7808, 173.5538],
    comment: "Double-check the order items before delivery.",
    title: "Order for Bob Johnson",
    status: "Received",
    customerName: "Bob Johnson",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Food",
        price: 17.43,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.78,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 3.79,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 1.76,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 17.26,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.26,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 4.54,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 19.7,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.25,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 1.03,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 2.14,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [87.9338, 172.2913],
    comment: "Customer has a nut allergy; avoid cross-contamination.",
    title: "Order for Bob Johnson",
    status: "EnRoute",
    customerName: "Bob Johnson",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Food",
        price: 16.72,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.67,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 3.47,
            title: "Cheese",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 7.77,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.02,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 7.03,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.71,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 3.79,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 13.29,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.3,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [85.7701, 170.6711],
    comment: "Deliver between 6 PM and 7 PM only.",
    title: "Order for Alice Brown",
    status: "Preparing",
    customerName: "Alice Brown",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Drink",
        price: 13.98,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.85,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 13.01,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.78,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 17.84,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.97,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 1.26,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 8.99,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.75,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 4.86,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 3.16,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [89.0288, 170.6212],
    comment: "Leave the order at the front door if no answer.",
    title: "Order for Bob Johnson",
    status: "EnRoute",
    customerName: "Bob Johnson",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Drink",
        price: 15.72,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.56,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [82.1373, 173.9599],
    title: "Order for Jane Smith",
    status: "Preparing",
    customerName: "Jane Smith",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Food",
        price: 19.98,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.21,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [85.4034, 170.1818],
    comment: "Leave the order at the front door if no answer.",
    title: "Order for Jane Smith",
    status: "Received",
    customerName: "Jane Smith",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Food",
        price: 19.76,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.89,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 1.61,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 1.13,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 8.68,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.59,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 3.76,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 3.01,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 19.43,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 1,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 9.52,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.55,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
          {
            price: 2.37,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 1.83,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 17.47,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.8,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
          {
            price: 3.27,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 3.71,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [89.5403, 176.2941],
    comment: "Deliver between 6 PM and 7 PM only.",
    title: "Order for Jane Smith",
    status: "Ready",
    customerName: "Jane Smith",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Food",
        price: 17.8,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.57,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 1.31,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 15.36,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.68,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 3.54,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 3.66,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 15.76,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.32,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 1.13,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 15.82,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.41,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 4.76,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 2.45,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 8.93,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.7,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 4.61,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
          {
            price: 3.86,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [88.2394, 172.5003],
    comment: "Deliver between 6 PM and 7 PM only.",
    title: "Order for Bob Johnson",
    status: "Received",
    customerName: "Bob Johnson",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Drink",
        price: 5.67,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.66,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [80.7912, 174.0459],
    comment: "Customer prefers extra care during packaging.",
    title: "Order for Alice Brown",
    status: "Received",
    customerName: "Alice Brown",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Drink",
        price: 16.83,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.55,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 15.43,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.17,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 1.96,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 13.57,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.38,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 4.59,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [81.7504, 173.7941],
    title: "Order for Jane Smith",
    status: "EnRoute",
    customerName: "Jane Smith",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Food",
        price: 15.91,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.73,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 2,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 8.53,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.74,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 18.46,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.88,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 4.4,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 18.17,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.35,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [84.5354, 170.7676],
    comment: "Contact customer upon arrival for additional instructions.",
    title: "Order for Jane Smith",
    status: "EnRoute",
    customerName: "Jane Smith",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Food",
        price: 15.95,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.04,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 3.35,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 15.78,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.19,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 4,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 4.63,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 14.27,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.68,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 1.88,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 19.65,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.92,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 11.26,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.81,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 2.98,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [83.7517, 179.9069],
    title: "Order for Jane Smith",
    status: "Preparing",
    customerName: "Jane Smith",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Drink",
        price: 13.97,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.93,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 2.73,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 13.23,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.09,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 11.55,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.12,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 1.01,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [82.847, 176.7743],
    comment: "Customer prefers extra care during packaging.",
    title: "Order for Alice Brown",
    status: "EnRoute",
    customerName: "Alice Brown",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Food",
        price: 13.83,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.91,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 1.88,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 13.22,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.44,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 2.35,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 3.81,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 13.97,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.43,
            title: "Cheese",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [85.8097, 175.6685],
    title: "Order for Emily Davis",
    status: "Preparing",
    customerName: "Emily Davis",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Food",
        price: 11.69,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.43,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 18.05,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.84,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 10.32,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.48,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 1.32,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 2.25,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 11.46,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.44,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 1.36,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [89.3356, 177.4929],
    comment: "Deliver between 6 PM and 7 PM only.",
    title: "Order for John Doe",
    status: "Received",
    customerName: "John Doe",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Food",
        price: 15.52,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.25,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [87.3266, 175.5292],
    comment: "Ensure the food is delivered hot and fresh.",
    title: "Order for John Doe",
    status: "Ready",
    customerName: "John Doe",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Drink",
        price: 8.14,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.27,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [89.1246, 179.1443],
    comment: "Deliver between 6 PM and 7 PM only.",
    title: "Order for Alice Brown",
    status: "EnRoute",
    customerName: "Alice Brown",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Food",
        price: 7.36,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.96,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 2.78,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 4.97,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 18.12,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.05,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 2.6,
            title: "Cheese",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 9.95,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.86,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 9.19,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.37,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 1.89,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 1.13,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 7.96,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.97,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [80.4895, 176.2659],
    comment: "Double-check the order items before delivery.",
    title: "Order for Alice Brown",
    status: "Preparing",
    customerName: "Alice Brown",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Food",
        price: 16.64,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.78,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 4.99,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 19.93,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.69,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 1.09,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 3.56,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 19.33,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.82,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 13.24,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.12,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 1.35,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 1.01,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 16.03,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.25,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 3.16,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 2.26,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [88.4104, 170.6251],
    comment: "Customer has a nut allergy; avoid cross-contamination.",
    title: "Order for Jane Smith",
    status: "EnRoute",
    customerName: "Jane Smith",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Food",
        price: 13.85,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.84,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 3.89,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 17.27,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.97,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 3.32,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 3.66,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [81.7537, 173.3772],
    title: "Order for Alice Brown",
    status: "EnRoute",
    customerName: "Alice Brown",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Food",
        price: 11.73,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.41,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 2.76,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [85.6099, 172.0907],
    title: "Order for Alice Brown",
    status: "EnRoute",
    customerName: "Alice Brown",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Food",
        price: 16.21,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.75,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 8.91,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.65,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 3.45,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 4.59,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [84.9472, 174.5144],
    title: "Order for Jane Smith",
    status: "Ready",
    customerName: "Jane Smith",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Food",
        price: 15.11,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.71,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 3.03,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 1.04,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 10.53,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.14,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 4.3,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 3.94,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 19.78,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.43,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 10.01,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.03,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 2.07,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 1.26,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [87.5586, 177.8035],
    title: "Order for Bob Johnson",
    status: "Ready",
    customerName: "Bob Johnson",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Food",
        price: 18.98,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.61,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 2.06,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 8.9,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.49,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 2.4,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 1.57,
            title: "Cheese",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 19.27,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.25,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
          {
            price: 3.61,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [89.8075, 170.65],
    title: "Order for Alice Brown",
    status: "EnRoute",
    customerName: "Alice Brown",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Drink",
        price: 15.6,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.38,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 5.3,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.83,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 1.39,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 12.14,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.59,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 8.54,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.47,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 2.69,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 8.64,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.54,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 1.76,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 2.56,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [86.037, 170.4657],
    title: "Order for Bob Johnson",
    status: "Received",
    customerName: "Bob Johnson",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Drink",
        price: 13.96,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.91,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [81.0995, 178.2463],
    comment: "Customer requested fast delivery.",
    title: "Order for Jane Smith",
    status: "Received",
    customerName: "Jane Smith",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Food",
        price: 7.31,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.68,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 4.08,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 6.06,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.36,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 2.97,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 5.59,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.22,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 3.36,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [82.5436, 178.3926],
    comment: "Double-check the order items before delivery.",
    title: "Order for Emily Davis",
    status: "Preparing",
    customerName: "Emily Davis",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Food",
        price: 8.63,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.54,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 3.97,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 4.13,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 7.24,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.15,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 2.6,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 14.5,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.51,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [84.1599, 174.0006],
    title: "Order for Jane Smith",
    status: "EnRoute",
    customerName: "Jane Smith",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Drink",
        price: 13.03,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.11,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 1.48,
            title: "Cheese",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 16.74,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.78,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 2.82,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 2.6,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 18.06,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.1,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 2.36,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 14.41,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.11,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 9.05,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.48,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [86.6672, 179.908],
    comment: "Include an extra set of cutlery in the package.",
    title: "Order for Alice Brown",
    status: "Preparing",
    customerName: "Alice Brown",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Food",
        price: 14.86,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.51,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 3.73,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 1.64,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 8.31,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.04,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 2,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 13.76,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.5,
            title: "Cheese",
            comment: "With extra Olives",
          },
          {
            price: 3.37,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 11.02,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.69,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 2.87,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [89.2981, 173.8809],
    comment: "Contact customer upon arrival for additional instructions.",
    title: "Order for John Doe",
    status: "Preparing",
    customerName: "John Doe",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Drink",
        price: 5.54,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.15,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 1.19,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 19.09,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.95,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 2.24,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 1.32,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 7.01,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.82,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
          {
            price: 4.03,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [86.4668, 172.345],
    comment: "Customer prefers extra care during packaging.",
    title: "Order for John Doe",
    status: "Preparing",
    customerName: "John Doe",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Drink",
        price: 17.24,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.81,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 1.14,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 7.5,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.34,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 4.97,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 2.77,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 9.23,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.39,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 12.84,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.68,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 3.62,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 3.82,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 16.03,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.58,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 1.73,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [85.7033, 171.6033],
    title: "Order for John Doe",
    status: "Preparing",
    customerName: "John Doe",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Drink",
        price: 16.68,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.13,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [80.6745, 170.3582],
    comment: "Ensure the food is delivered hot and fresh.",
    title: "Order for Bob Johnson",
    status: "Ready",
    customerName: "Bob Johnson",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Drink",
        price: 16.65,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.35,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 2.34,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 2.05,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [88.3067, 170.883],
    title: "Order for Emily Davis",
    status: "Preparing",
    customerName: "Emily Davis",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Food",
        price: 7.96,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.43,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 13.77,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.28,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 18.98,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.55,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 1,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 2.66,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 11.56,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.7,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 2.25,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 4.27,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 13.76,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.51,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 3.41,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [84.8677, 173.0704],
    title: "Order for John Doe",
    status: "Ready",
    customerName: "John Doe",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Drink",
        price: 19.36,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.62,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 2.68,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 2.07,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 16.4,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.54,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 4.49,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [80.4312, 171.9641],
    title: "Order for John Doe",
    status: "EnRoute",
    customerName: "John Doe",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Food",
        price: 6.5,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.97,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 4.07,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 11.43,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.45,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 3.04,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 9.67,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.7,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 1.41,
            title: "Cheese",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 17.99,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.35,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 3.25,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 10.54,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.21,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
          {
            price: 3.65,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 3.07,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [88.96, 173.7538],
    comment: "Customer has a nut allergy; avoid cross-contamination.",
    title: "Order for Alice Brown",
    status: "EnRoute",
    customerName: "Alice Brown",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Food",
        price: 9.95,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.97,
            title: "Cheese",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 8.32,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.69,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
          {
            price: 1.44,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 3.2,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [87.059, 175.4279],
    title: "Order for Jane Smith",
    status: "Ready",
    customerName: "Jane Smith",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Food",
        price: 10.9,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.87,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 1.04,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [83.4874, 177.1282],
    title: "Order for Bob Johnson",
    status: "Ready",
    customerName: "Bob Johnson",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Food",
        price: 19.22,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.1,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 3.43,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 3.4,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 7.97,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.09,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [84.5498, 173.9163],
    comment: "Leave the order at the front door if no answer.",
    title: "Order for Alice Brown",
    status: "Received",
    customerName: "Alice Brown",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Drink",
        price: 7.87,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.66,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 1.13,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 10.71,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.11,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 4.66,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 7.15,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.23,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 10.8,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.96,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 15.16,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.19,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 2.45,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [89.4811, 173.6893],
    title: "Order for Bob Johnson",
    status: "Ready",
    customerName: "Bob Johnson",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Drink",
        price: 12.93,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.23,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 3.96,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 7.62,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.67,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 10.77,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.63,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 2.26,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [88.0085, 172.4539],
    title: "Order for Emily Davis",
    status: "Received",
    customerName: "Emily Davis",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Food",
        price: 10.85,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.11,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 2.23,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 3.42,
            title: "Cheese",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 13.75,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.36,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 4.65,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 1.17,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 6.75,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.86,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 3.83,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 14.83,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.58,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 2.26,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
          {
            price: 2.38,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [81.0405, 174.8067],
    title: "Order for Jane Smith",
    status: "Preparing",
    customerName: "Jane Smith",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Drink",
        price: 6.36,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.49,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 17.97,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.19,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 19.46,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.21,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 17.54,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.01,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
          {
            price: 3.35,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [83.7854, 177.2652],
    title: "Order for Alice Brown",
    status: "Preparing",
    customerName: "Alice Brown",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Drink",
        price: 17.13,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.23,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [86.7903, 172.92],
    title: "Order for Bob Johnson",
    status: "EnRoute",
    customerName: "Bob Johnson",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Drink",
        price: 10.66,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.55,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 18.28,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.41,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 4.49,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 4.79,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 10.92,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.4,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 1.28,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 12.29,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.62,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 2.97,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 3.52,
            title: "Cheese",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [88.3191, 178.0475],
    comment: "Include an extra set of cutlery in the package.",
    title: "Order for Bob Johnson",
    status: "Ready",
    customerName: "Bob Johnson",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Food",
        price: 6.98,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.6,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 3.54,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 1.05,
            title: "Cheese",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 6.17,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.56,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 17.36,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.29,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 4.37,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 11.99,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.04,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 7.21,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.26,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 4.55,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [89.9091, 173.6641],
    comment: "Double-check the order items before delivery.",
    title: "Order for Jane Smith",
    status: "EnRoute",
    customerName: "Jane Smith",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Food",
        price: 9.02,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.19,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 3.64,
            title: "Cheese",
            comment: "With extra Olives",
          },
          {
            price: 4.16,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 13.52,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.46,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 2.9,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 3.02,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 9.53,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.32,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 4.01,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [81.7305, 175.9554],
    comment: "Leave the order at the front door if no answer.",
    title: "Order for Alice Brown",
    status: "EnRoute",
    customerName: "Alice Brown",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Food",
        price: 18.74,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.31,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 8.13,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.63,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 4.98,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 12.67,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.2,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 1.35,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 2.17,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [89.4488, 175.1712],
    title: "Order for Emily Davis",
    status: "Ready",
    customerName: "Emily Davis",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Food",
        price: 15.23,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.48,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 4.12,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 3.76,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [89.6817, 174.6014],
    title: "Order for Bob Johnson",
    status: "Received",
    customerName: "Bob Johnson",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Food",
        price: 14.14,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.4,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 13.49,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.67,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 4.49,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 19.31,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.85,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 8.14,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.73,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 4.39,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [86.6911, 170.9352],
    title: "Order for Alice Brown",
    status: "EnRoute",
    customerName: "Alice Brown",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Food",
        price: 6.19,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.99,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 4.5,
            title: "Cheese",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 10.98,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.14,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 2.8,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 3.9,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [80.3405, 176.8621],
    title: "Order for Alice Brown",
    status: "Ready",
    customerName: "Alice Brown",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Drink",
        price: 13.13,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.49,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 1.65,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 1.23,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 11.6,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.19,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 13.87,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.56,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 2.52,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 15.88,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.29,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 15.91,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.64,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 1.08,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [89.3456, 172.6285],
    comment: "Deliver between 6 PM and 7 PM only.",
    title: "Order for Alice Brown",
    status: "Ready",
    customerName: "Alice Brown",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Drink",
        price: 15.81,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.72,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 3.9,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [85.5658, 175.2513],
    title: "Order for Alice Brown",
    status: "Preparing",
    customerName: "Alice Brown",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Drink",
        price: 12.3,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.29,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 4.24,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 7.86,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.94,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 1.82,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 4.42,
            title: "Cheese",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [83.0107, 170.3501],
    title: "Order for Emily Davis",
    status: "EnRoute",
    customerName: "Emily Davis",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Food",
        price: 11.65,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.6,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 2.93,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 2.32,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 9.13,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.39,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 3.48,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [81.2186, 170.3049],
    comment: "Ensure the food is delivered hot and fresh.",
    title: "Order for Bob Johnson",
    status: "Received",
    customerName: "Bob Johnson",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Food",
        price: 18.15,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.72,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [87.6383, 175.3212],
    comment: "Customer prefers extra care during packaging.",
    title: "Order for Bob Johnson",
    status: "Preparing",
    customerName: "Bob Johnson",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Food",
        price: 17.84,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.75,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 2.21,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 8.21,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.41,
            title: "Cheese",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [83.1681, 170.7688],
    comment: "Customer requested fast delivery.",
    title: "Order for Emily Davis",
    status: "EnRoute",
    customerName: "Emily Davis",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Drink",
        price: 7.66,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.47,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 3.7,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 1.17,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 16.77,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.47,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 7.89,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.81,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 2.16,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 12.53,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.23,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 9.77,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.02,
            title: "Cheese",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [83.6331, 179.9167],
    comment: "Double-check the order items before delivery.",
    title: "Order for Bob Johnson",
    status: "Ready",
    customerName: "Bob Johnson",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Food",
        price: 7.97,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.42,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 1.64,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 1.32,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 5.39,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.97,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 3.01,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 1.49,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 17.82,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.23,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 1.34,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [83.0951, 178.0386],
    comment: "Add a handwritten thank-you note to the package.",
    title: "Order for Emily Davis",
    status: "EnRoute",
    customerName: "Emily Davis",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Food",
        price: 9.64,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.81,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 15.61,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.88,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 4.78,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 18.09,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.73,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
          {
            price: 1.32,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 8.08,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.11,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 15.47,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.34,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 2.15,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [89.2094, 177.532],
    title: "Order for Emily Davis",
    status: "Preparing",
    customerName: "Emily Davis",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Drink",
        price: 6.2,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.15,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 1.48,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 15.72,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.14,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 12.45,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.78,
            title: "Cheese",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 19.75,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.6,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 3.52,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 10.57,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.66,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 3.48,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 2.15,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [80.3041, 179.404],
    comment: "Add a handwritten thank-you note to the package.",
    title: "Order for John Doe",
    status: "Preparing",
    customerName: "John Doe",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Food",
        price: 13.35,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.04,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 2.12,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 3.86,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 12.43,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.42,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 11.89,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.59,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 3.54,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [89.4729, 178.5229],
    comment: "Contact customer upon arrival for additional instructions.",
    title: "Order for Jane Smith",
    status: "EnRoute",
    customerName: "Jane Smith",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Food",
        price: 18.98,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.26,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 1.89,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 19.96,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.58,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 4.78,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [89.9476, 170.073],
    comment: "Contact customer upon arrival for additional instructions.",
    title: "Order for Bob Johnson",
    status: "Ready",
    customerName: "Bob Johnson",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Food",
        price: 15.62,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.69,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 9.88,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.14,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 1.19,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 1.57,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 12.86,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.83,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
          {
            price: 4.15,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [85.4299, 170.3656],
    comment: "Add a handwritten thank-you note to the package.",
    title: "Order for John Doe",
    status: "EnRoute",
    customerName: "John Doe",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Drink",
        price: 17.02,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.13,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 3.82,
            title: "Cheese",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 10.81,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.5,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 6.59,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.77,
            title: "Cheese",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [84.4745, 170.1342],
    comment: "Customer has a nut allergy; avoid cross-contamination.",
    title: "Order for John Doe",
    status: "Ready",
    customerName: "John Doe",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Food",
        price: 17.33,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.72,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 18.01,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.89,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [82.3109, 175.3904],
    title: "Order for Bob Johnson",
    status: "Preparing",
    customerName: "Bob Johnson",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Food",
        price: 16.68,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.85,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
          {
            price: 1.1,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 2.89,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 16.56,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.55,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 17.19,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.64,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 14.75,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.43,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 13.55,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.13,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 3.13,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 4.82,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [84.1387, 172.5911],
    comment: "Customer requested fast delivery.",
    title: "Order for Emily Davis",
    status: "Received",
    customerName: "Emily Davis",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Drink",
        price: 17.8,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.09,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 9.94,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.88,
            title: "Cheese",
            comment: "With extra Olives",
          },
          {
            price: 4.54,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 3.73,
            title: "Cheese",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [87.5498, 171.933],
    comment: "Deliver between 6 PM and 7 PM only.",
    title: "Order for Jane Smith",
    status: "Received",
    customerName: "Jane Smith",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Food",
        price: 19.99,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.72,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 3.72,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 15.37,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.83,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 3.24,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 2.58,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 5.16,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.99,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 3.19,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 7.8,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.66,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 3.73,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 3.58,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 7.35,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.12,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 1.48,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [87.5466, 171.0724],
    title: "Order for Alice Brown",
    status: "Ready",
    customerName: "Alice Brown",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Drink",
        price: 13.62,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.45,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 1.67,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 6.81,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.63,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 1.81,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 3.58,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 9.53,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.28,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [87.2707, 179.5454],
    title: "Order for Bob Johnson",
    status: "Received",
    customerName: "Bob Johnson",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Food",
        price: 16.12,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.46,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 2.71,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 13.85,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 2.83,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 16.62,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.15,
            title: "Cheese",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [83.8105, 176.1303],
    comment: "Double-check the order items before delivery.",
    title: "Order for John Doe",
    status: "Received",
    customerName: "John Doe",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Drink",
        price: 13.62,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 2.74,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 7.51,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.56,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [82.8322, 173.4266],
    comment: "Customer has a nut allergy; avoid cross-contamination.",
    title: "Order for Alice Brown",
    status: "EnRoute",
    customerName: "Alice Brown",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Food",
        price: 10.33,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.85,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 14.98,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.3,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 1.85,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 9.57,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.55,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 1.23,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 2.87,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [89.4908, 171.3106],
    comment: "Contact customer upon arrival for additional instructions.",
    title: "Order for Jane Smith",
    status: "Preparing",
    customerName: "Jane Smith",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Food",
        price: 12.64,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.05,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 1.62,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 3.39,
            title: "Cheese",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 19.61,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.71,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [81.1223, 175.8221],
    title: "Order for Jane Smith",
    status: "Received",
    customerName: "Jane Smith",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Drink",
        price: 17.18,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.6,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 3.28,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 3.09,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 11.03,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.8,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 16.35,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.6,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 3.11,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 2.41,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [80.394, 178.4228],
    comment: "Double-check the order items before delivery.",
    title: "Order for John Doe",
    status: "Received",
    customerName: "John Doe",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Food",
        price: 13.96,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.17,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [84.49, 178.5152],
    title: "Order for John Doe",
    status: "Preparing",
    customerName: "John Doe",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Drink",
        price: 15.82,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.56,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 2.1,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [83.2945, 176.2207],
    title: "Order for John Doe",
    status: "Ready",
    customerName: "John Doe",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Drink",
        price: 15.9,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.6,
            title: "Cheese",
            comment: "With extra Olives",
          },
          {
            price: 1.29,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 3.18,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 14.45,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.5,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 4.72,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 9.21,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.76,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 1.93,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 12.83,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.39,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 3.57,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 4.1,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 7.61,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.98,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 1.3,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 4.79,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [88.6116, 176.547],
    title: "Order for John Doe",
    status: "Received",
    customerName: "John Doe",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Drink",
        price: 10.38,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.72,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 4.63,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 2.98,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 11.07,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.54,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [81.6344, 178.9655],
    comment: "Leave the order at the front door if no answer.",
    title: "Order for Bob Johnson",
    status: "EnRoute",
    customerName: "Bob Johnson",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Drink",
        price: 12.11,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.54,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 1.24,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
          {
            price: 2.92,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [86.3781, 179.3429],
    comment: "Leave the order at the front door if no answer.",
    title: "Order for John Doe",
    status: "EnRoute",
    customerName: "John Doe",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Drink",
        price: 12.89,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.61,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [85.8259, 179.4232],
    title: "Order for Jane Smith",
    status: "EnRoute",
    customerName: "Jane Smith",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Drink",
        price: 14.02,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.82,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 1.8,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 1.83,
            title: "Cheese",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 17.93,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.47,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 2.54,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [81.9468, 172.1454],
    comment: "Contact customer upon arrival for additional instructions.",
    title: "Order for Jane Smith",
    status: "EnRoute",
    customerName: "Jane Smith",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Drink",
        price: 16.22,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.47,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 1.21,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 19.98,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.21,
            title: "Cheese",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 13,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.43,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 15.1,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.81,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 4.51,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [80.7065, 170.9158],
    title: "Order for Alice Brown",
    status: "Received",
    customerName: "Alice Brown",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Food",
        price: 19.11,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.75,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 12.28,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.8,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 15.63,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.61,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 1.09,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 3.51,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [89.1857, 171.3765],
    title: "Order for Alice Brown",
    status: "EnRoute",
    customerName: "Alice Brown",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Drink",
        price: 13.09,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.41,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [87.5049, 178.3595],
    comment: "Ensure the food is delivered hot and fresh.",
    title: "Order for Jane Smith",
    status: "Preparing",
    customerName: "Jane Smith",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Drink",
        price: 5.12,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.16,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 2.32,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 18.62,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.31,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 1.31,
            title: "Cheese",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 10.66,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.72,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 2.27,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 4.56,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 7.72,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.48,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [82.2607, 176.249],
    comment: "Customer has a nut allergy; avoid cross-contamination.",
    title: "Order for Jane Smith",
    status: "EnRoute",
    customerName: "Jane Smith",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Food",
        price: 7.36,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.55,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 2.44,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [83.0467, 178.754],
    comment: "Contact customer upon arrival for additional instructions.",
    title: "Order for Emily Davis",
    status: "Received",
    customerName: "Emily Davis",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Drink",
        price: 18.7,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.63,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
          {
            price: 4.08,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 5.08,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.17,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 1.91,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 18.77,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.3,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [82.9001, 171.1341],
    title: "Order for Alice Brown",
    status: "Received",
    customerName: "Alice Brown",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Drink",
        price: 15.21,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.92,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 4.88,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 14.17,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.85,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 3.64,
            title: "Cheese",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [81.0668, 176.3223],
    title: "Order for Bob Johnson",
    status: "Ready",
    customerName: "Bob Johnson",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Drink",
        price: 15.34,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.45,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
          {
            price: 3.96,
            title: "Cheese",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 17.84,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.66,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [88.7177, 177.7618],
    title: "Order for Bob Johnson",
    status: "Ready",
    customerName: "Bob Johnson",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Food",
        price: 9.25,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.81,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 6.6,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.19,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 4.69,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 1.59,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 14.96,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.57,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [83.0212, 176.0582],
    title: "Order for Jane Smith",
    status: "EnRoute",
    customerName: "Jane Smith",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Food",
        price: 9.36,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.59,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 9.98,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.15,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 2,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 4.45,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 14.58,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.69,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 1.17,
            title: "Cheese",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 6.65,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.8,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 1.74,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 3.44,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [86.3525, 179.9506],
    title: "Order for John Doe",
    status: "Ready",
    customerName: "John Doe",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Food",
        price: 12.81,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.35,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 3.32,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 15.21,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.85,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 1.52,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 8.17,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.22,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 3.07,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 4.82,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 17.62,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.37,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 2.32,
            title: "Cheese",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 8.83,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.95,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [84.5935, 177.2579],
    comment: "Add a handwritten thank-you note to the package.",
    title: "Order for Jane Smith",
    status: "Preparing",
    customerName: "Jane Smith",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Food",
        price: 17.77,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.63,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 2.67,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
          {
            price: 4.35,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 19.91,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.03,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 3.2,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 12.17,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.19,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 2.26,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 17.36,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.55,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 4.88,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 1.8,
            title: "Cheese",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 11.68,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.68,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 1.28,
            title: "Cheese",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [88.9503, 176.1482],
    title: "Order for John Doe",
    status: "EnRoute",
    customerName: "John Doe",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Food",
        price: 18.29,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.72,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 2,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 1.37,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 8.32,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.28,
            title: "Cheese",
            comment: "With extra Olives",
          },
          {
            price: 1.6,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 10.61,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.94,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 13.76,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.1,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [89.574, 178.6196],
    title: "Order for Bob Johnson",
    status: "Preparing",
    customerName: "Bob Johnson",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Food",
        price: 11.92,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.37,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 3.71,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 9.43,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.72,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 4.34,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 14.63,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.1,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [80.8007, 174.4993],
    comment: "Ensure the food is delivered hot and fresh.",
    title: "Order for John Doe",
    status: "Preparing",
    customerName: "John Doe",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Food",
        price: 5.36,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.99,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 1.79,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 1.02,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [85.7956, 175.924],
    comment: "Add a handwritten thank-you note to the package.",
    title: "Order for Bob Johnson",
    status: "EnRoute",
    customerName: "Bob Johnson",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Drink",
        price: 15.89,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.75,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 4.44,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [84.7337, 170.8762],
    comment: "Deliver between 6 PM and 7 PM only.",
    title: "Order for John Doe",
    status: "Received",
    customerName: "John Doe",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Drink",
        price: 10.54,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.72,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 2.84,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 10.37,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.2,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 10.47,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.21,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 4.81,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 4.06,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [88.3276, 174.9324],
    title: "Order for John Doe",
    status: "Preparing",
    customerName: "John Doe",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Food",
        price: 14.08,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.95,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 4.21,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 11.72,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.39,
            title: "Cheese",
            comment: "With extra Olives",
          },
          {
            price: 2.72,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 7.09,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.82,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 6.25,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.31,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [82.3932, 170.1574],
    comment: "Customer requested fast delivery.",
    title: "Order for John Doe",
    status: "Preparing",
    customerName: "John Doe",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Drink",
        price: 9.79,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.17,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 2.99,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 2.25,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 6.15,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.74,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 3.27,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 4.63,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 20,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.32,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 3.01,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 15.59,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.09,
            title: "Cheese",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [88.8732, 178.1126],
    title: "Order for Jane Smith",
    status: "Preparing",
    customerName: "Jane Smith",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Drink",
        price: 14.04,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.65,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 13.02,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.3,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [88.6031, 177.1723],
    title: "Order for Emily Davis",
    status: "EnRoute",
    customerName: "Emily Davis",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Food",
        price: 18.12,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.36,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 4.11,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 4.21,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 18.95,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.42,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 4.35,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 16.29,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.45,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [84.6405, 178.7064],
    comment: "Customer requested fast delivery.",
    title: "Order for Bob Johnson",
    status: "Ready",
    customerName: "Bob Johnson",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Drink",
        price: 10.78,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.78,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 2.76,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 6.61,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.25,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 4.03,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 2.1,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 15.07,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.27,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [87.348, 174.0392],
    title: "Order for Jane Smith",
    status: "Ready",
    customerName: "Jane Smith",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Food",
        price: 13.31,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.59,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 17,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.16,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 2.63,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 1.33,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [88.2375, 171.6741],
    comment: "Contact customer upon arrival for additional instructions.",
    title: "Order for Bob Johnson",
    status: "Preparing",
    customerName: "Bob Johnson",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Drink",
        price: 11.72,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.11,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 11.69,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.73,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 3.46,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [85.0151, 172.2744],
    title: "Order for Jane Smith",
    status: "Preparing",
    customerName: "Jane Smith",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Drink",
        price: 19.09,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.38,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 5.49,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.62,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 12.09,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.43,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 2.16,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 3.44,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 9.95,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.03,
            title: "Cheese",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 11.52,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.21,
            title: "Cheese",
            comment: "With extra Olives",
          },
          {
            price: 1.49,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [85.9412, 171.0924],
    title: "Order for John Doe",
    status: "EnRoute",
    customerName: "John Doe",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Drink",
        price: 11.94,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.09,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 6.69,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.94,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 2.21,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 1.58,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 18.68,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.41,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 11.88,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.8,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 1.16,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 1.33,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [87.1246, 176.5728],
    title: "Order for Bob Johnson",
    status: "Received",
    customerName: "Bob Johnson",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Drink",
        price: 13.1,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.64,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 14.36,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.14,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 11.74,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.56,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 5.9,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.78,
            title: "Cheese",
            comment: "With extra Olives",
          },
          {
            price: 4.13,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 3.19,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [82.3654, 176.8523],
    title: "Order for Bob Johnson",
    status: "Preparing",
    customerName: "Bob Johnson",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Food",
        price: 14.16,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.45,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 3.29,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [84.5237, 177.6524],
    comment: "Ensure the food is delivered hot and fresh.",
    title: "Order for John Doe",
    status: "EnRoute",
    customerName: "John Doe",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Drink",
        price: 13.15,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.23,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 1.69,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 2.01,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 18.53,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.26,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 4.92,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 10.2,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.28,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [83.6628, 174.9973],
    title: "Order for Emily Davis",
    status: "EnRoute",
    customerName: "Emily Davis",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Food",
        price: 15.21,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.96,
            title: "Bacon",
            comment: undefined,
          },
          {
            price: 3.99,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 2.53,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 16.18,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.52,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 13.98,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.16,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [84.5985, 179.4846],
    title: "Order for John Doe",
    status: "Ready",
    customerName: "John Doe",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Drink",
        price: 19.19,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.19,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 8.05,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 3.33,
            title: "Cheese",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 19.66,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.53,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
          {
            price: 3.17,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 9.44,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.58,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 2.71,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 16.55,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.93,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 3.83,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [86.2294, 170.3746],
    comment: "Contact customer upon arrival for additional instructions.",
    title: "Order for Jane Smith",
    status: "Received",
    customerName: "Jane Smith",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Drink",
        price: 13.16,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.78,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 6.74,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.39,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 10.28,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.94,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 8.37,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.18,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 2.22,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 3.78,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 14.67,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.56,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [85.1167, 176.9178],
    title: "Order for Jane Smith",
    status: "Received",
    customerName: "Jane Smith",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Food",
        price: 9.11,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.84,
            title: "Cheese",
            comment: "With extra Olives",
          },
          {
            price: 4.49,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 19.45,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.46,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 4.23,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 19.88,
        title: "Pasta",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.46,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [82.1074, 175.6886],
    title: "Order for Bob Johnson",
    status: "Received",
    customerName: "Bob Johnson",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Food",
        price: 17.71,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.82,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 4.34,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 4.93,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 10.07,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.11,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 16.13,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.04,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 15.69,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.38,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 4.5,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [81.9651, 176.1998],
    comment: "Add a handwritten thank-you note to the package.",
    title: "Order for Emily Davis",
    status: "Ready",
    customerName: "Emily Davis",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Drink",
        price: 14.71,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 4.92,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 2.6,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 2.35,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 16.04,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 1.01,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 4.42,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 3.84,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Drink",
        price: 11.28,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.84,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 3.7,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [80.9901, 179.8192],
    comment: "Include an extra set of cutlery in the package.",
    title: "Order for Bob Johnson",
    status: "Received",
    customerName: "Bob Johnson",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Drink",
        price: 16.91,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 5,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 5.52,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.22,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 2.65,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 8.34,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.36,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 1.54,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 13.3,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.72,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 4.48,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
          {
            price: 1.31,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
    ],
  },
  {
    location: [80.567, 173.7402],
    title: "Order for Jane Smith",
    status: "Ready",
    customerName: "Jane Smith",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Food",
        price: 15.11,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.56,
            title: "Bacon",
            comment: "With extra Cheese",
          },
          {
            price: 3.42,
            title: "Olives",
            comment: "With extra Cheese",
          },
          {
            price: 4.13,
            title: "Tomatoes",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 13.33,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.93,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 4.27,
            title: "Olives",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 13.87,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.06,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 4.27,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 11.87,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.2,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 1.75,
            title: "Olives",
            comment: undefined,
          },
          {
            price: 1.83,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [81.501, 176.8144],
    comment: "Include an extra set of cutlery in the package.",
    title: "Order for Alice Brown",
    status: "Ready",
    customerName: "Alice Brown",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Food",
        price: 9.63,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.01,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 13.68,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.76,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 18.58,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.64,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 1.48,
            title: "Cheese",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 6.04,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.68,
            title: "Olives",
            comment: "With extra Olives",
          },
          {
            price: 4.03,
            title: "Bacon",
            comment: "With extra Olives",
          },
          {
            price: 2.81,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [86.9135, 171.2164],
    title: "Order for Bob Johnson",
    status: "Received",
    customerName: "Bob Johnson",
    customerPhone: "555-1234-99",
    orderItems: [
      {
        type: "Drink",
        price: 18.97,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.55,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 4.57,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [80.8689, 170.0973],
    title: "Order for John Doe",
    status: "Preparing",
    customerName: "John Doe",
    customerPhone: "555-7890-884",
    orderItems: [
      {
        type: "Food",
        price: 7.69,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 1.99,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 2.77,
            title: "Mushrooms",
            comment: undefined,
          },
          {
            price: 3.78,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [88.1136, 174.2579],
    comment: "Deliver between 6 PM and 7 PM only.",
    title: "Order for Jane Smith",
    status: "Received",
    customerName: "Jane Smith",
    customerPhone: "555-5678-75",
    orderItems: [
      {
        type: "Food",
        price: 8.48,
        title: "Salad",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.12,
            title: "Mushrooms",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Food",
        price: 8.32,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.34,
            title: "Bacon",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [89.3116, 171.2942],
    comment: "Customer requested fast delivery.",
    title: "Order for John Doe",
    status: "Received",
    customerName: "John Doe",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Drink",
        price: 13.44,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.64,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 4.42,
            title: "Cheese",
            comment: "With extra Cheese",
          },
          {
            price: 3.04,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [88.3708, 177.9034],
    title: "Order for Bob Johnson",
    status: "Received",
    customerName: "Bob Johnson",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Food",
        price: 6.74,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 3.12,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 1.14,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
    ],
  },
  {
    location: [89.4104, 176.0483],
    title: "Order for Bob Johnson",
    status: "Ready",
    customerName: "Bob Johnson",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Food",
        price: 10.29,
        title: "Soda",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 3.73,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 12.63,
        title: "Soda",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.08,
            title: "Bacon",
            comment: "With extra Cheese",
          },
        ],
      },
      {
        type: "Drink",
        price: 15.99,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.23,
            title: "Tomatoes",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 17.8,
        title: "Pizza",
        comment: "Extra Olives",
        itemsAddons: [
          {
            price: 2.75,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 6.03,
        title: "Salad",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.09,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 2.44,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
          {
            price: 4.3,
            title: "Bacon",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [81.564, 171.7251],
    comment: "Deliver between 6 PM and 7 PM only.",
    title: "Order for Bob Johnson",
    status: "EnRoute",
    customerName: "Bob Johnson",
    customerPhone: "555-3456-621",
    orderItems: [
      {
        type: "Food",
        price: 16.62,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 4.32,
            title: "Cheese",
            comment: "With extra Olives",
          },
          {
            price: 2.24,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 5.69,
        title: "Pizza",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.71,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 3.47,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 4.19,
            title: "Olives",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [84.4495, 172.3603],
    title: "Order for Alice Brown",
    status: "Preparing",
    customerName: "Alice Brown",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Food",
        price: 12.33,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 4.99,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 2.07,
            title: "Olives",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 9.95,
        title: "Pasta",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 1.85,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 3.91,
            title: "Mushrooms",
            comment: "With extra Olives",
          },
          {
            price: 3.78,
            title: "Tomatoes",
            comment: "With extra Olives",
          },
        ],
      },
    ],
  },
  {
    location: [82.7332, 174.044],
    comment: "Include an extra set of cutlery in the package.",
    title: "Order for Emily Davis",
    status: "Received",
    customerName: "Emily Davis",
    customerPhone: "555-9012-76",
    orderItems: [
      {
        type: "Food",
        price: 15.94,
        title: "Pasta",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.48,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
      {
        type: "Drink",
        price: 15.58,
        title: "Pizza",
        comment: undefined,
        itemsAddons: [
          {
            price: 2.39,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 1.91,
            title: "Cheese",
            comment: "With extra Olives",
          },
        ],
      },
      {
        type: "Food",
        price: 7.64,
        title: "Soda",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 2.09,
            title: "Cheese",
            comment: undefined,
          },
          {
            price: 2.37,
            title: "Cheese",
            comment: undefined,
          },
        ],
      },
      {
        type: "Food",
        price: 13.99,
        title: "Salad",
        comment: "Extra Cheese",
        itemsAddons: [
          {
            price: 3.96,
            title: "Tomatoes",
            comment: undefined,
          },
          {
            price: 1.09,
            title: "Mushrooms",
            comment: undefined,
          },
        ],
      },
    ],
  },
];
