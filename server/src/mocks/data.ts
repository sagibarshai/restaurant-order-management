import { CreateFullOrder } from "../features/orders/create/controller";

export const MOCKS_FULLY_ORDERS: CreateFullOrder[] = [
  {
    title: "Order for John",
    status: "Received",

    location: [81.379, 179.651],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 11.46,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Tomatoes", price: 1.2, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 3.53, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [82.3405, 171.4233],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 13.97,
        type: "Food",
        itemsAddons: [
          { title: "Mushrooms", price: 2.62, comment: "With extra Cheese" },
          { title: "Tomatoes", price: 1.96, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 1.09 },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [80.1559, 175.0235],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 11.61,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Bacon", price: 1.01 },
          { title: "Olives", price: 3.37 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [81.9577, 179.0996],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 7.18,
        type: "Food",
        itemsAddons: [
          { title: "Mushrooms", price: 1.12 },
          { title: "Cheese", price: 2.96 },
          { title: "Cheese", price: 2.66 },
        ],
      },
      { title: "Soda", price: 8.27, type: "Drink", itemsAddons: [{ title: "Mushrooms", price: 3.82, comment: "With extra Cheese" }] },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [85.0476, 178.9492],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 7.56,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Bacon", price: 1.47, comment: "With extra Olives" },
          { title: "Olives", price: 1.29 },
          { title: "Mushrooms", price: 1.11, comment: "With extra Olives" },
        ],
      },
      {
        title: "Pasta",
        price: 16.26,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Mushrooms", price: 2.77, comment: "With extra Cheese" }],
      },
      { title: "Soda", price: 6.94, type: "Food", itemsAddons: [{ title: "Mushrooms", price: 2.29, comment: "With extra Cheese" }] },
      {
        title: "Pasta",
        price: 5.8,
        type: "Drink",
        itemsAddons: [
          { title: "Olives", price: 3.71, comment: "With extra Olives" },
          { title: "Cheese", price: 3.23, comment: "With extra Olives" },
          { title: "Cheese", price: 1.33 },
        ],
      },
      {
        title: "Pizza",
        price: 15.61,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Mushrooms", price: 1.65 },
          { title: "Olives", price: 3.03, comment: "With extra Olives" },
          { title: "Tomatoes", price: 1.77 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [82.8189, 171.3345],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 18.91,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Cheese", price: 3.53, comment: "With extra Cheese" },
          { title: "Bacon", price: 4.49, comment: "With extra Cheese" },
          { title: "Olives", price: 1.07 },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [89.032, 179.905],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 7.95,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Olives", price: 2.89 },
          { title: "Bacon", price: 3.22, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Salad",
        price: 9.25,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Olives", price: 3.28, comment: "With extra Cheese" },
          { title: "Bacon", price: 1.14 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [82.1053, 177.1209],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 12.55,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Bacon", price: 2.04, comment: "With extra Cheese" },
          { title: "Tomatoes", price: 1.7, comment: "With extra Cheese" },
          { title: "Tomatoes", price: 2.93, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [82.9519, 179.734],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Pasta", price: 11.21, type: "Drink", itemsAddons: [{ title: "Olives", price: 3.39 }] },
      { title: "Salad", price: 7.46, type: "Drink", itemsAddons: [{ title: "Bacon", price: 3.91 }] },
      {
        title: "Pasta",
        price: 15.3,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Cheese", price: 3.73, comment: "With extra Olives" },
          { title: "Bacon", price: 2.01 },
          { title: "Tomatoes", price: 2.53, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [81.6887, 170.4735],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 11.74,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Tomatoes", price: 3.34, comment: "With extra Cheese" },
          { title: "Tomatoes", price: 1.27, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [89.7113, 171.1291],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 10.97,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Tomatoes", price: 3.1, comment: "With extra Olives" },
          { title: "Olives", price: 2.85, comment: "With extra Olives" },
        ],
      },
      { title: "Salad", price: 11.87, type: "Food", itemsAddons: [{ title: "Bacon", price: 1.17 }] },
      {
        title: "Soda",
        price: 12.16,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Olives", price: 2.25 },
          { title: "Olives", price: 3.69, comment: "With extra Cheese" },
          { title: "Bacon", price: 2.39 },
        ],
      },
      {
        title: "Soda",
        price: 17.4,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [{ title: "Tomatoes", price: 2.35, comment: "With extra Olives" }],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [82.1649, 179.416],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 12.28,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Mushrooms", price: 4.58 },
          { title: "Mushrooms", price: 4.55 },
        ],
      },
      { title: "Soda", price: 14.32, type: "Drink", comment: "Extra Olives", itemsAddons: [{ title: "Bacon", price: 3.29 }] },
      {
        title: "Salad",
        price: 9.99,
        type: "Drink",
        itemsAddons: [
          { title: "Mushrooms", price: 3.45 },
          { title: "Mushrooms", price: 2.04, comment: "With extra Cheese" },
          { title: "Bacon", price: 3.9 },
        ],
      },
      { title: "Pizza", price: 6.46, type: "Food", comment: "Extra Cheese", itemsAddons: [{ title: "Mushrooms", price: 2.21 }] },
      {
        title: "Salad",
        price: 13.08,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Olives", price: 2 },
          { title: "Bacon", price: 4.91 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [86.4528, 175.7068],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 14.57,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Tomatoes", price: 3.5 },
          { title: "Bacon", price: 3.8 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [86.645, 175.8588],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 16.87,
        type: "Food",
        itemsAddons: [
          { title: "Mushrooms", price: 2.48, comment: "With extra Olives" },
          { title: "Tomatoes", price: 2.63, comment: "With extra Cheese" },
          { title: "Olives", price: 4.49, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Salad",
        price: 5.7,
        type: "Food",
        itemsAddons: [
          { title: "Cheese", price: 3.05, comment: "With extra Cheese" },
          { title: "Cheese", price: 4.1, comment: "With extra Olives" },
          { title: "Tomatoes", price: 4.36 },
        ],
      },
      {
        title: "Soda",
        price: 17.43,
        type: "Food",
        itemsAddons: [
          { title: "Tomatoes", price: 4.8 },
          { title: "Mushrooms", price: 3.59 },
        ],
      },
      {
        title: "Pasta",
        price: 8.62,
        type: "Food",
        itemsAddons: [
          { title: "Cheese", price: 3.08 },
          { title: "Bacon", price: 2.63, comment: "With extra Cheese" },
          { title: "Tomatoes", price: 3.91, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [85.4345, 172.1269],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 9.26,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Mushrooms", price: 4.67 },
          { title: "Olives", price: 2.64, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Soda",
        price: 13.4,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Cheese", price: 2.45, comment: "With extra Cheese" }],
      },
      {
        title: "Salad",
        price: 16.36,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Bacon", price: 4.1, comment: "With extra Cheese" }],
      },
      {
        title: "Pizza",
        price: 7.55,
        type: "Food",
        itemsAddons: [
          { title: "Bacon", price: 1.91, comment: "With extra Cheese" },
          { title: "Tomatoes", price: 4.77, comment: "With extra Cheese" },
          { title: "Olives", price: 2.31 },
        ],
      },
      { title: "Soda", price: 7.73, type: "Food", comment: "Extra Cheese", itemsAddons: [{ title: "Tomatoes", price: 1.94 }] },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [80.2466, 175.8025],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 19.83,
        type: "Food",
        itemsAddons: [
          { title: "Tomatoes", price: 3.51, comment: "With extra Cheese" },
          { title: "Bacon", price: 4.43 },
        ],
      },
      {
        title: "Pasta",
        price: 11.16,
        type: "Drink",
        itemsAddons: [
          { title: "Bacon", price: 4.21, comment: "With extra Olives" },
          { title: "Mushrooms", price: 1.44 },
        ],
      },
      {
        title: "Pasta",
        price: 7.57,
        type: "Food",
        itemsAddons: [
          { title: "Tomatoes", price: 3.5 },
          { title: "Cheese", price: 4.81, comment: "With extra Olives" },
          { title: "Mushrooms", price: 2.54, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [85.4543, 173.334],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 16.33,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Mushrooms", price: 2.61 },
          { title: "Tomatoes", price: 4.53, comment: "With extra Olives" },
          { title: "Cheese", price: 4.18 },
        ],
      },
      {
        title: "Salad",
        price: 16.06,
        type: "Drink",
        itemsAddons: [
          { title: "Bacon", price: 1.71, comment: "With extra Olives" },
          { title: "Mushrooms", price: 3.52 },
        ],
      },
      {
        title: "Salad",
        price: 19.51,
        type: "Food",
        itemsAddons: [
          { title: "Cheese", price: 3.54 },
          { title: "Tomatoes", price: 2.87, comment: "With extra Olives" },
        ],
      },
      {
        title: "Salad",
        price: 16.2,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Olives", price: 2.26, comment: "With extra Cheese" },
          { title: "Olives", price: 2.82 },
          { title: "Bacon", price: 2.86 },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [88.8099, 175.8534],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 8.69,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Bacon", price: 2.69 },
          { title: "Cheese", price: 4.45 },
          { title: "Tomatoes", price: 4.26 },
        ],
      },
      {
        title: "Pizza",
        price: 7.56,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Olives", price: 2.3 },
          { title: "Cheese", price: 3.39 },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [89.0348, 172.1752],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 16.18,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Tomatoes", price: 2.42 },
          { title: "Cheese", price: 1.02, comment: "With extra Cheese" },
          { title: "Bacon", price: 4.1 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [80.7932, 173.961],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [{ title: "Pizza", price: 10.87, type: "Food", comment: "Extra Cheese", itemsAddons: [{ title: "Olives", price: 2.18 }] }],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [82.1646, 172.1508],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 14.42,
        type: "Food",
        itemsAddons: [
          { title: "Mushrooms", price: 2.09 },
          { title: "Mushrooms", price: 1.16 },
        ],
      },
      {
        title: "Soda",
        price: 19.29,
        type: "Food",
        itemsAddons: [
          { title: "Mushrooms", price: 2.8 },
          { title: "Bacon", price: 3.94, comment: "With extra Cheese" },
          { title: "Bacon", price: 2.09, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [89.965, 175.7777],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Pizza", price: 11.82, type: "Food", comment: "Extra Olives", itemsAddons: [{ title: "Mushrooms", price: 1.92 }] },
      {
        title: "Salad",
        price: 17.75,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Olives", price: 4.34 },
          { title: "Mushrooms", price: 1.45 },
        ],
      },
      {
        title: "Salad",
        price: 9.04,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Cheese", price: 2.89 },
          { title: "Olives", price: 2.15 },
          { title: "Tomatoes", price: 3.91, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [88.4889, 176.9702],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 13.43,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Mushrooms", price: 4.41, comment: "With extra Olives" },
          { title: "Cheese", price: 1.37 },
        ],
      },
      {
        title: "Salad",
        price: 9.87,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Cheese", price: 2.77 },
          { title: "Tomatoes", price: 2 },
        ],
      },
      { title: "Pasta", price: 13.01, type: "Drink", comment: "Extra Olives", itemsAddons: [{ title: "Cheese", price: 4.57 }] },
      {
        title: "Pizza",
        price: 11.32,
        type: "Food",
        itemsAddons: [
          { title: "Tomatoes", price: 2.78 },
          { title: "Cheese", price: 3.52 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [89.4818, 170.3462],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Pasta", price: 12.34, type: "Food", itemsAddons: [{ title: "Tomatoes", price: 1.19 }] },
      {
        title: "Salad",
        price: 7.82,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Mushrooms", price: 4.68, comment: "With extra Cheese" },
          { title: "Cheese", price: 4.28, comment: "With extra Olives" },
          { title: "Cheese", price: 3.22 },
        ],
      },
      {
        title: "Salad",
        price: 10.83,
        type: "Food",
        itemsAddons: [
          { title: "Mushrooms", price: 3.75 },
          { title: "Bacon", price: 3.51 },
          { title: "Bacon", price: 2.34, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Pasta",
        price: 6.92,
        type: "Food",
        itemsAddons: [
          { title: "Mushrooms", price: 4.11 },
          { title: "Cheese", price: 3.87, comment: "With extra Olives" },
          { title: "Cheese", price: 4.14 },
        ],
      },
      { title: "Pasta", price: 17.11, type: "Food", comment: "Extra Cheese", itemsAddons: [{ title: "Bacon", price: 3.52 }] },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [80.1642, 172.5732],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 12.53,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Olives", price: 4.76, comment: "With extra Olives" },
          { title: "Cheese", price: 1.11, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Soda",
        price: 8.78,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Olives", price: 3.73 },
          { title: "Olives", price: 3.62 },
        ],
      },
      {
        title: "Pasta",
        price: 18.2,
        type: "Drink",
        itemsAddons: [
          { title: "Olives", price: 3.38 },
          { title: "Tomatoes", price: 3.37 },
          { title: "Olives", price: 1.62 },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [84.7331, 173.8764],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 8.81,
        type: "Drink",
        itemsAddons: [
          { title: "Mushrooms", price: 3.23 },
          { title: "Mushrooms", price: 3.53 },
          { title: "Bacon", price: 4.04 },
        ],
      },
      {
        title: "Pizza",
        price: 18.4,
        type: "Food",
        itemsAddons: [
          { title: "Bacon", price: 3.5, comment: "With extra Olives" },
          { title: "Olives", price: 3.86, comment: "With extra Cheese" },
          { title: "Bacon", price: 3.86, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [87.059, 174.551],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Pasta", price: 7.45, type: "Food", itemsAddons: [{ title: "Olives", price: 4.22, comment: "With extra Olives" }] },
      {
        title: "Soda",
        price: 12.5,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Cheese", price: 1.13, comment: "With extra Olives" },
          { title: "Tomatoes", price: 4.91, comment: "With extra Olives" },
        ],
      },
      {
        title: "Salad",
        price: 15.38,
        type: "Food",
        itemsAddons: [
          { title: "Mushrooms", price: 2.15, comment: "With extra Cheese" },
          { title: "Tomatoes", price: 1.55 },
        ],
      },
      {
        title: "Salad",
        price: 5.88,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Olives", price: 2.07 },
          { title: "Mushrooms", price: 2.14, comment: "With extra Olives" },
          { title: "Bacon", price: 1.52, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [86.3013, 172.4772],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Salad", price: 10.39, type: "Food", itemsAddons: [{ title: "Tomatoes", price: 4.54, comment: "With extra Olives" }] },
      {
        title: "Pizza",
        price: 14.66,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Bacon", price: 1.08 },
          { title: "Tomatoes", price: 1.02, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Salad",
        price: 7.4,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [{ title: "Mushrooms", price: 2.07, comment: "With extra Cheese" }],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [84.732, 172.1158],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 11.15,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Tomatoes", price: 2.08 },
          { title: "Olives", price: 3.72 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [89.3205, 177.4826],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 10.2,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Olives", price: 4.01 },
          { title: "Bacon", price: 3.49 },
          { title: "Cheese", price: 3.53 },
        ],
      },
      {
        title: "Soda",
        price: 6.27,
        type: "Drink",
        itemsAddons: [
          { title: "Mushrooms", price: 2.22, comment: "With extra Cheese" },
          { title: "Olives", price: 1.66, comment: "With extra Olives" },
        ],
      },
      { title: "Pasta", price: 16.64, type: "Drink", comment: "Extra Olives", itemsAddons: [{ title: "Tomatoes", price: 4.68 }] },
      {
        title: "Salad",
        price: 14.34,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Olives", price: 2.18 },
          { title: "Tomatoes", price: 1.11, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [83.9062, 175.3741],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 15.4,
        type: "Food",
        itemsAddons: [
          { title: "Tomatoes", price: 2.51 },
          { title: "Tomatoes", price: 1.7 },
          { title: "Mushrooms", price: 3.74, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [89.5071, 179.0537],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 14.02,
        type: "Food",
        itemsAddons: [
          { title: "Cheese", price: 2.98 },
          { title: "Cheese", price: 4.99, comment: "With extra Olives" },
          { title: "Tomatoes", price: 3.39, comment: "With extra Olives" },
        ],
      },
      {
        title: "Pasta",
        price: 5.66,
        type: "Food",
        itemsAddons: [
          { title: "Bacon", price: 4.18, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 1.58, comment: "With extra Olives" },
        ],
      },
      {
        title: "Pizza",
        price: 7.88,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Olives", price: 4.74, comment: "With extra Cheese" }],
      },
      { title: "Pasta", price: 16.67, type: "Food", comment: "Extra Cheese", itemsAddons: [{ title: "Cheese", price: 2.05 }] },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [80.3986, 178.4643],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 15.75,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Bacon", price: 4.37 },
          { title: "Cheese", price: 1.13, comment: "With extra Olives" },
        ],
      },
      {
        title: "Soda",
        price: 16.69,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Bacon", price: 2.27, comment: "With extra Olives" },
          { title: "Olives", price: 4.99, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [88.0038, 175.0784],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 13.4,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Tomatoes", price: 4.37, comment: "With extra Cheese" },
          { title: "Bacon", price: 3.09, comment: "With extra Olives" },
        ],
      },
      {
        title: "Salad",
        price: 16.97,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Cheese", price: 1.95 },
          { title: "Cheese", price: 1.26 },
          { title: "Mushrooms", price: 2.27 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [80.6877, 177.9503],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 19.67,
        type: "Drink",
        itemsAddons: [
          { title: "Bacon", price: 1.66 },
          { title: "Tomatoes", price: 1.69, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Pizza",
        price: 12.15,
        type: "Food",
        itemsAddons: [
          { title: "Bacon", price: 4.52 },
          { title: "Mushrooms", price: 3.1 },
          { title: "Mushrooms", price: 3.08 },
        ],
      },
      {
        title: "Salad",
        price: 19.3,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Cheese", price: 1.76, comment: "With extra Olives" },
          { title: "Bacon", price: 2.33, comment: "With extra Cheese" },
          { title: "Olives", price: 3.94, comment: "With extra Olives" },
        ],
      },
      {
        title: "Pasta",
        price: 19.97,
        type: "Food",
        itemsAddons: [
          { title: "Mushrooms", price: 1.49, comment: "With extra Olives" },
          { title: "Cheese", price: 1.88, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [80.8732, 173.7982],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 14.27,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [{ title: "Bacon", price: 2.26, comment: "With extra Cheese" }],
      },
      {
        title: "Pizza",
        price: 5.49,
        type: "Food",
        itemsAddons: [
          { title: "Tomatoes", price: 1.02, comment: "With extra Olives" },
          { title: "Tomatoes", price: 1.65 },
        ],
      },
      {
        title: "Soda",
        price: 18.89,
        type: "Drink",
        itemsAddons: [
          { title: "Olives", price: 3.88 },
          { title: "Mushrooms", price: 4.86, comment: "With extra Olives" },
        ],
      },
      { title: "Soda", price: 16.11, type: "Food", itemsAddons: [{ title: "Cheese", price: 1.36, comment: "With extra Olives" }] },
      {
        title: "Pizza",
        price: 11.71,
        type: "Food",
        itemsAddons: [
          { title: "Olives", price: 4.31 },
          { title: "Mushrooms", price: 3.52, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [87.0444, 175.6072],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 7.86,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Tomatoes", price: 2.98, comment: "With extra Olives" },
          { title: "Tomatoes", price: 1.3, comment: "With extra Olives" },
        ],
      },
      {
        title: "Salad",
        price: 17.85,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Tomatoes", price: 1.35, comment: "With extra Cheese" }],
      },
      { title: "Soda", price: 7.22, type: "Drink", itemsAddons: [{ title: "Cheese", price: 2.26 }] },
      { title: "Pasta", price: 13.86, type: "Drink", itemsAddons: [{ title: "Cheese", price: 3.93, comment: "With extra Cheese" }] },
      {
        title: "Pizza",
        price: 10.09,
        type: "Food",
        itemsAddons: [
          { title: "Cheese", price: 1.2, comment: "With extra Olives" },
          { title: "Bacon", price: 1.33, comment: "With extra Olives" },
          { title: "Cheese", price: 2.23 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [82.4363, 177.2647],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Pasta", price: 5.38, type: "Food", comment: "Extra Cheese", itemsAddons: [{ title: "Olives", price: 3.77 }] },
      { title: "Salad", price: 7.28, type: "Drink", itemsAddons: [{ title: "Mushrooms", price: 4.92, comment: "With extra Olives" }] },
      {
        title: "Pasta",
        price: 8.77,
        type: "Food",
        itemsAddons: [
          { title: "Bacon", price: 2.67, comment: "With extra Cheese" },
          { title: "Bacon", price: 3.06, comment: "With extra Olives" },
          { title: "Mushrooms", price: 1.54, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Pizza",
        price: 16.35,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Mushrooms", price: 4.98, comment: "With extra Cheese" },
          { title: "Tomatoes", price: 4.73, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [87.3255, 171.8323],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 12.56,
        type: "Drink",
        itemsAddons: [
          { title: "Mushrooms", price: 1.11, comment: "With extra Olives" },
          { title: "Olives", price: 4.89 },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [82.348, 173.0697],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [{ title: "Pizza", price: 12.56, type: "Food", itemsAddons: [{ title: "Bacon", price: 1.51 }] }],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [81.3315, 178.993],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Salad", price: 14.31, type: "Food", comment: "Extra Cheese", itemsAddons: [{ title: "Tomatoes", price: 1.92 }] },
      {
        title: "Pasta",
        price: 8.57,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Mushrooms", price: 3.68, comment: "With extra Cheese" }],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [85.1375, 176.6481],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 18.17,
        type: "Food",
        itemsAddons: [
          { title: "Olives", price: 2.93, comment: "With extra Olives" },
          { title: "Mushrooms", price: 2.65 },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [86.5308, 173.0835],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 10.11,
        type: "Drink",
        itemsAddons: [
          { title: "Cheese", price: 1.46, comment: "With extra Cheese" },
          { title: "Tomatoes", price: 4.55, comment: "With extra Olives" },
          { title: "Cheese", price: 3.05, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Soda",
        price: 14.18,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Mushrooms", price: 3.82 },
          { title: "Cheese", price: 4.96, comment: "With extra Cheese" },
          { title: "Bacon", price: 4.33 },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [82.8995, 171.122],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 5.85,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Mushrooms", price: 2.57 },
          { title: "Mushrooms", price: 4.26, comment: "With extra Olives" },
        ],
      },
      { title: "Pizza", price: 7.84, type: "Drink", itemsAddons: [{ title: "Olives", price: 3.22, comment: "With extra Olives" }] },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [86.0802, 170.32],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 6.93,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Bacon", price: 3 },
          { title: "Bacon", price: 4.76, comment: "With extra Olives" },
          { title: "Bacon", price: 3.23 },
        ],
      },
      {
        title: "Pasta",
        price: 10.16,
        type: "Drink",
        itemsAddons: [
          { title: "Cheese", price: 4.29, comment: "With extra Olives" },
          { title: "Bacon", price: 2.07, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Pizza",
        price: 7.48,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [{ title: "Olives", price: 4.25, comment: "With extra Cheese" }],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [80.6587, 177.4719],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 17.6,
        type: "Food",
        itemsAddons: [
          { title: "Cheese", price: 2.87 },
          { title: "Cheese", price: 3.29, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [84.9855, 179.5077],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 5.55,
        type: "Drink",
        itemsAddons: [
          { title: "Tomatoes", price: 2.16 },
          { title: "Olives", price: 2.71 },
        ],
      },
      {
        title: "Pizza",
        price: 6.05,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Olives", price: 4.04, comment: "With extra Cheese" },
          { title: "Cheese", price: 1.15 },
        ],
      },
      {
        title: "Salad",
        price: 11.42,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Olives", price: 1.38, comment: "With extra Olives" },
          { title: "Mushrooms", price: 4.55, comment: "With extra Cheese" },
          { title: "Tomatoes", price: 2.18, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [85.3324, 179.9494],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 10.65,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Olives", price: 2.1, comment: "With extra Olives" },
          { title: "Bacon", price: 3.11, comment: "With extra Olives" },
          { title: "Cheese", price: 3.1 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [86.6489, 175.6723],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Pasta", price: 9.22, type: "Food", itemsAddons: [{ title: "Bacon", price: 4.73, comment: "With extra Cheese" }] },
      {
        title: "Soda",
        price: 17.95,
        type: "Food",
        itemsAddons: [
          { title: "Cheese", price: 1.05 },
          { title: "Bacon", price: 1.89, comment: "With extra Olives" },
          { title: "Bacon", price: 1.72 },
        ],
      },
      { title: "Pizza", price: 13.48, type: "Food", itemsAddons: [{ title: "Tomatoes", price: 1.37, comment: "With extra Olives" }] },
      {
        title: "Pizza",
        price: 19.83,
        type: "Food",
        itemsAddons: [
          { title: "Cheese", price: 4.25 },
          { title: "Mushrooms", price: 3.02, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [83.1812, 171.465],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 15.5,
        type: "Food",
        itemsAddons: [
          { title: "Cheese", price: 2.91 },
          { title: "Mushrooms", price: 3.3, comment: "With extra Olives" },
        ],
      },
      {
        title: "Salad",
        price: 17.14,
        type: "Food",
        itemsAddons: [
          { title: "Bacon", price: 3.36 },
          { title: "Tomatoes", price: 2.8 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [89.9287, 174.3876],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Soda", price: 14.18, type: "Drink", itemsAddons: [{ title: "Mushrooms", price: 2.35, comment: "With extra Cheese" }] },
      {
        title: "Pizza",
        price: 18.92,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Cheese", price: 4.03, comment: "With extra Cheese" },
          { title: "Bacon", price: 1.8 },
        ],
      },
      { title: "Salad", price: 19.57, type: "Food", comment: "Extra Cheese", itemsAddons: [{ title: "Tomatoes", price: 2.9 }] },
      {
        title: "Soda",
        price: 13.23,
        type: "Drink",
        itemsAddons: [
          { title: "Tomatoes", price: 1.57 },
          { title: "Bacon", price: 3.51 },
          { title: "Mushrooms", price: 1.3, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [82.892, 178.8926],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 7.99,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Bacon", price: 4.49 },
          { title: "Mushrooms", price: 4.81, comment: "With extra Olives" },
        ],
      },
      {
        title: "Soda",
        price: 9.73,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Bacon", price: 1.7, comment: "With extra Cheese" },
          { title: "Cheese", price: 2.66, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Soda",
        price: 12.77,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Bacon", price: 4.35, comment: "With extra Olives" },
          { title: "Olives", price: 2.08, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [85.0437, 172.5075],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 14.49,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [{ title: "Bacon", price: 4.11, comment: "With extra Olives" }],
      },
      {
        title: "Salad",
        price: 5.06,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Mushrooms", price: 3.64, comment: "With extra Olives" }],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [87.8478, 174.2629],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Soda", price: 14.65, type: "Food", itemsAddons: [{ title: "Cheese", price: 4.97 }] },
      {
        title: "Pizza",
        price: 13.68,
        type: "Drink",
        itemsAddons: [
          { title: "Tomatoes", price: 3.88, comment: "With extra Olives" },
          { title: "Olives", price: 4.74, comment: "With extra Cheese" },
          { title: "Olives", price: 3.74, comment: "With extra Olives" },
        ],
      },
      {
        title: "Pizza",
        price: 13.58,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Tomatoes", price: 1.53 },
          { title: "Bacon", price: 4.93 },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [84.9131, 170.0962],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 17.22,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Olives", price: 3.96, comment: "With extra Olives" }],
      },
      {
        title: "Pasta",
        price: 17.79,
        type: "Drink",
        itemsAddons: [
          { title: "Mushrooms", price: 2.75 },
          { title: "Cheese", price: 4.49, comment: "With extra Olives" },
        ],
      },
      {
        title: "Salad",
        price: 7.6,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Bacon", price: 1.24, comment: "With extra Olives" },
          { title: "Olives", price: 3.87, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [85.051, 172.2221],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Pasta", price: 13.03, type: "Food", comment: "Extra Cheese", itemsAddons: [{ title: "Tomatoes", price: 3.74 }] },
      {
        title: "Soda",
        price: 12.86,
        type: "Food",
        itemsAddons: [
          { title: "Mushrooms", price: 3.08, comment: "With extra Olives" },
          { title: "Cheese", price: 3.74, comment: "With extra Cheese" },
        ],
      },
      { title: "Salad", price: 12.31, type: "Drink", itemsAddons: [{ title: "Olives", price: 2.16 }] },
      { title: "Pasta", price: 9.11, type: "Food", itemsAddons: [{ title: "Olives", price: 3.42 }] },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [88.8676, 177.4701],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 5.34,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Bacon", price: 2.75 },
          { title: "Mushrooms", price: 4.2, comment: "With extra Olives" },
        ],
      },
      {
        title: "Soda",
        price: 11.71,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Mushrooms", price: 2.97, comment: "With extra Cheese" }],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [86.1612, 174.7397],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Salad", price: 10.1, type: "Food", comment: "Extra Cheese", itemsAddons: [{ title: "Bacon", price: 1.56 }] },
      { title: "Pasta", price: 5.07, type: "Drink", itemsAddons: [{ title: "Olives", price: 2.79, comment: "With extra Olives" }] },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [81.9554, 177.0375],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 11.66,
        type: "Food",
        itemsAddons: [
          { title: "Tomatoes", price: 3.54, comment: "With extra Olives" },
          { title: "Mushrooms", price: 1.37, comment: "With extra Olives" },
          { title: "Bacon", price: 4.93 },
        ],
      },
      { title: "Salad", price: 12.98, type: "Food", comment: "Extra Olives", itemsAddons: [{ title: "Cheese", price: 2.01 }] },
      {
        title: "Pasta",
        price: 7.86,
        type: "Food",
        itemsAddons: [
          { title: "Mushrooms", price: 3.47 },
          { title: "Tomatoes", price: 4.34, comment: "With extra Olives" },
          { title: "Olives", price: 4.46, comment: "With extra Olives" },
        ],
      },
      {
        title: "Pizza",
        price: 10.9,
        type: "Food",
        itemsAddons: [
          { title: "Tomatoes", price: 2.43 },
          { title: "Bacon", price: 4.34 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [87.7413, 179.8821],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 13.47,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Mushrooms", price: 2.8 },
          { title: "Bacon", price: 4.84, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Pasta",
        price: 11.36,
        type: "Food",
        itemsAddons: [
          { title: "Bacon", price: 1.67, comment: "With extra Olives" },
          { title: "Bacon", price: 3.14 },
          { title: "Mushrooms", price: 2.46, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Pasta",
        price: 14.74,
        type: "Drink",
        itemsAddons: [
          { title: "Olives", price: 1.34, comment: "With extra Olives" },
          { title: "Bacon", price: 1.07, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [81.7511, 173.2771],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 11.98,
        type: "Food",
        itemsAddons: [
          { title: "Olives", price: 1, comment: "With extra Olives" },
          { title: "Olives", price: 4, comment: "With extra Cheese" },
          { title: "Cheese", price: 3.82, comment: "With extra Cheese" },
        ],
      },
      { title: "Pizza", price: 6.15, type: "Drink", itemsAddons: [{ title: "Tomatoes", price: 3.17, comment: "With extra Cheese" }] },
      {
        title: "Pasta",
        price: 12.11,
        type: "Food",
        itemsAddons: [
          { title: "Olives", price: 4.92 },
          { title: "Mushrooms", price: 4.54 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [82.8139, 177.6887],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [{ title: "Pizza", price: 18.44, type: "Food", comment: "Extra Olives", itemsAddons: [{ title: "Olives", price: 4.21 }] }],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [88.6795, 178.891],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [{ title: "Pasta", price: 8.65, type: "Food", itemsAddons: [{ title: "Cheese", price: 2.38, comment: "With extra Olives" }] }],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [80.3528, 170.5727],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 18.1,
        type: "Food",
        itemsAddons: [
          { title: "Mushrooms", price: 2.4, comment: "With extra Olives" },
          { title: "Mushrooms", price: 3.06 },
        ],
      },
      {
        title: "Pasta",
        price: 18.59,
        type: "Food",
        itemsAddons: [
          { title: "Bacon", price: 3.77, comment: "With extra Olives" },
          { title: "Mushrooms", price: 4 },
        ],
      },
      { title: "Soda", price: 15.63, type: "Food", itemsAddons: [{ title: "Mushrooms", price: 2.68, comment: "With extra Olives" }] },
      {
        title: "Pizza",
        price: 6.67,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Mushrooms", price: 1.23, comment: "With extra Cheese" },
          { title: "Cheese", price: 3.03, comment: "With extra Cheese" },
          { title: "Bacon", price: 3.38 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [82.6243, 175.1292],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Salad", price: 5.68, type: "Drink", itemsAddons: [{ title: "Cheese", price: 3.62, comment: "With extra Olives" }] },
      {
        title: "Salad",
        price: 6.84,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Bacon", price: 2.56 },
          { title: "Bacon", price: 1.78, comment: "With extra Cheese" },
          { title: "Cheese", price: 2.7 },
        ],
      },
      {
        title: "Pizza",
        price: 12.84,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Cheese", price: 2.31 },
          { title: "Mushrooms", price: 4.81, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Salad",
        price: 13.7,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Mushrooms", price: 2.05, comment: "With extra Olives" },
          { title: "Mushrooms", price: 1.26, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [84.7711, 178.1096],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Salad", price: 18.49, type: "Drink", itemsAddons: [{ title: "Cheese", price: 2.53, comment: "With extra Olives" }] },
      {
        title: "Soda",
        price: 19.52,
        type: "Drink",
        itemsAddons: [
          { title: "Cheese", price: 3.82, comment: "With extra Cheese" },
          { title: "Tomatoes", price: 3.29, comment: "With extra Cheese" },
        ],
      },
      { title: "Salad", price: 15.23, type: "Food", itemsAddons: [{ title: "Tomatoes", price: 1.07, comment: "With extra Cheese" }] },
      {
        title: "Salad",
        price: 6.44,
        type: "Food",
        itemsAddons: [
          { title: "Olives", price: 1.42 },
          { title: "Olives", price: 2.78, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [89.1034, 171.6735],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 9.02,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Cheese", price: 1.38, comment: "With extra Olives" },
          { title: "Mushrooms", price: 4.69 },
        ],
      },
      {
        title: "Salad",
        price: 12.42,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Tomatoes", price: 1.51 },
          { title: "Olives", price: 2.52, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [80.2857, 176.0066],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 10.75,
        type: "Food",
        itemsAddons: [
          { title: "Tomatoes", price: 1.47, comment: "With extra Cheese" },
          { title: "Cheese", price: 4.27 },
          { title: "Olives", price: 1.26 },
        ],
      },
      { title: "Pasta", price: 11.32, type: "Drink", comment: "Extra Olives", itemsAddons: [{ title: "Mushrooms", price: 2.61 }] },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [82.5354, 174.2316],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 12.59,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Cheese", price: 2.84 },
          { title: "Tomatoes", price: 1.79, comment: "With extra Olives" },
          { title: "Tomatoes", price: 1.08 },
        ],
      },
      {
        title: "Pasta",
        price: 17.99,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Olives", price: 1.54 },
          { title: "Cheese", price: 4.79, comment: "With extra Olives" },
        ],
      },
      {
        title: "Soda",
        price: 12.29,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Cheese", price: 4.23, comment: "With extra Olives" },
          { title: "Cheese", price: 3.89 },
        ],
      },
      {
        title: "Pizza",
        price: 15.95,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Tomatoes", price: 1.38 },
          { title: "Bacon", price: 4.69, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [87.4542, 172.9411],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 6.79,
        type: "Food",
        itemsAddons: [
          { title: "Mushrooms", price: 1.88 },
          { title: "Mushrooms", price: 4.96, comment: "With extra Olives" },
          { title: "Olives", price: 4.97 },
        ],
      },
      { title: "Soda", price: 8.54, type: "Drink", comment: "Extra Cheese", itemsAddons: [{ title: "Cheese", price: 4.58 }] },
      {
        title: "Soda",
        price: 19.17,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Mushrooms", price: 4.29 },
          { title: "Bacon", price: 3.51, comment: "With extra Cheese" },
          { title: "Cheese", price: 1.16, comment: "With extra Olives" },
        ],
      },
      {
        title: "Salad",
        price: 13.7,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Mushrooms", price: 3.22, comment: "With extra Cheese" },
          { title: "Cheese", price: 3.72 },
          { title: "Tomatoes", price: 2.78, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [88.469, 176.9727],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Salad", price: 12.7, type: "Drink", comment: "Extra Olives", itemsAddons: [{ title: "Olives", price: 4.87 }] },
      {
        title: "Soda",
        price: 6.82,
        type: "Drink",
        itemsAddons: [
          { title: "Cheese", price: 3.15, comment: "With extra Cheese" },
          { title: "Olives", price: 1.25 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [89.6607, 171.4238],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 12.08,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [{ title: "Olives", price: 3.09, comment: "With extra Olives" }],
      },
      {
        title: "Salad",
        price: 19.53,
        type: "Drink",
        itemsAddons: [
          { title: "Bacon", price: 4.46, comment: "With extra Cheese" },
          { title: "Cheese", price: 2.95 },
          { title: "Cheese", price: 3.67 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [82.5801, 174.2581],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 17.84,
        type: "Drink",
        itemsAddons: [
          { title: "Cheese", price: 1.96 },
          { title: "Mushrooms", price: 2.84, comment: "With extra Olives" },
        ],
      },
      {
        title: "Soda",
        price: 15.76,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Olives", price: 3.57 },
          { title: "Mushrooms", price: 3.84, comment: "With extra Cheese" },
        ],
      },
      { title: "Salad", price: 10.87, type: "Drink", itemsAddons: [{ title: "Bacon", price: 4.75 }] },
      {
        title: "Pizza",
        price: 9.32,
        type: "Drink",
        itemsAddons: [
          { title: "Bacon", price: 3.27, comment: "With extra Olives" },
          { title: "Cheese", price: 2.56 },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [82.0377, 177.885],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 12.78,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Bacon", price: 3.79, comment: "With extra Olives" },
          { title: "Bacon", price: 1.02 },
        ],
      },
      {
        title: "Pasta",
        price: 19.57,
        type: "Drink",
        itemsAddons: [
          { title: "Olives", price: 4.25, comment: "With extra Olives" },
          { title: "Tomatoes", price: 1.76, comment: "With extra Olives" },
          { title: "Mushrooms", price: 3.11, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Pizza",
        price: 18.16,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Olives", price: 4.69 },
          { title: "Tomatoes", price: 3.19, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [80.8691, 173.2601],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 7.27,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Bacon", price: 1.36, comment: "With extra Olives" },
          { title: "Olives", price: 2.54, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Soda",
        price: 5.24,
        type: "Drink",
        itemsAddons: [
          { title: "Bacon", price: 3.79, comment: "With extra Cheese" },
          { title: "Cheese", price: 1.21, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [89.1304, 171.7411],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Pizza", price: 17.27, type: "Drink", comment: "Extra Cheese", itemsAddons: [{ title: "Cheese", price: 1.49 }] },
      {
        title: "Pasta",
        price: 15.47,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Olives", price: 1.72, comment: "With extra Olives" },
          { title: "Cheese", price: 2.73 },
          { title: "Mushrooms", price: 1.41 },
        ],
      },
      { title: "Soda", price: 7.7, type: "Drink", comment: "Extra Olives", itemsAddons: [{ title: "Bacon", price: 2.13 }] },
      {
        title: "Pasta",
        price: 9.69,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Olives", price: 2.87, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 1.79 },
          { title: "Cheese", price: 3.15 },
        ],
      },
      { title: "Soda", price: 13.86, type: "Food", comment: "Extra Cheese", itemsAddons: [{ title: "Cheese", price: 2.09 }] },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [87.524, 171.5188],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 5.62,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Cheese", price: 2.38 },
          { title: "Tomatoes", price: 2.19 },
          { title: "Cheese", price: 4.64, comment: "With extra Olives" },
        ],
      },
      {
        title: "Pizza",
        price: 16.21,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Olives", price: 3.77 },
          { title: "Bacon", price: 2.37, comment: "With extra Olives" },
        ],
      },
      { title: "Pasta", price: 18.25, type: "Drink", itemsAddons: [{ title: "Cheese", price: 1.69 }] },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [88.757, 178.169],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Salad", price: 10.79, type: "Drink", itemsAddons: [{ title: "Olives", price: 1.06 }] },
      {
        title: "Pasta",
        price: 18.21,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Tomatoes", price: 4.99 },
          { title: "Mushrooms", price: 2.6, comment: "With extra Olives" },
          { title: "Olives", price: 2.83, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Pasta",
        price: 10.52,
        type: "Drink",
        itemsAddons: [
          { title: "Olives", price: 4.69, comment: "With extra Cheese" },
          { title: "Olives", price: 2.28 },
        ],
      },
      {
        title: "Salad",
        price: 5.42,
        type: "Drink",
        itemsAddons: [
          { title: "Cheese", price: 4.03, comment: "With extra Olives" },
          { title: "Cheese", price: 2.89 },
          { title: "Bacon", price: 1.24, comment: "With extra Cheese" },
        ],
      },
      { title: "Pizza", price: 8.13, type: "Food", itemsAddons: [{ title: "Bacon", price: 4.35, comment: "With extra Olives" }] },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [84.8074, 179.2685],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Pasta", price: 6.03, type: "Drink", itemsAddons: [{ title: "Tomatoes", price: 3.86, comment: "With extra Olives" }] },
      {
        title: "Soda",
        price: 8.29,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [{ title: "Mushrooms", price: 3.84, comment: "With extra Olives" }],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [87.0233, 176.3885],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 15.16,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Tomatoes", price: 4.9, comment: "With extra Cheese" }],
      },
      {
        title: "Soda",
        price: 18.22,
        type: "Food",
        itemsAddons: [
          { title: "Olives", price: 2.06 },
          { title: "Olives", price: 4 },
          { title: "Olives", price: 1.9, comment: "With extra Cheese" },
        ],
      },
      { title: "Pasta", price: 9.45, type: "Drink", itemsAddons: [{ title: "Tomatoes", price: 2.51 }] },
      { title: "Salad", price: 11.48, type: "Food", itemsAddons: [{ title: "Olives", price: 2.88 }] },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [89.0489, 174.3937],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 16.05,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Cheese", price: 2.33 },
          { title: "Cheese", price: 4.05, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Salad",
        price: 9.76,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Bacon", price: 1.54 },
          { title: "Tomatoes", price: 4.99, comment: "With extra Cheese" },
          { title: "Bacon", price: 4.5 },
        ],
      },
      {
        title: "Pizza",
        price: 9.32,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Bacon", price: 3.87 },
          { title: "Tomatoes", price: 4.61 },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [85.1775, 174.6881],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 10.12,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Olives", price: 1.27, comment: "With extra Olives" },
          { title: "Olives", price: 4.39, comment: "With extra Cheese" },
          { title: "Olives", price: 3.7, comment: "With extra Olives" },
        ],
      },
      {
        title: "Soda",
        price: 15.9,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Bacon", price: 3.44, comment: "With extra Olives" },
          { title: "Bacon", price: 2.64, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [88.9502, 179.3272],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 17.98,
        type: "Food",
        itemsAddons: [
          { title: "Mushrooms", price: 4.94, comment: "With extra Olives" },
          { title: "Bacon", price: 2.89, comment: "With extra Cheese" },
          { title: "Cheese", price: 1.92 },
        ],
      },
      { title: "Pasta", price: 14.67, type: "Food", comment: "Extra Cheese", itemsAddons: [{ title: "Mushrooms", price: 3.01 }] },
      {
        title: "Salad",
        price: 5.36,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Tomatoes", price: 1.14, comment: "With extra Cheese" },
          { title: "Tomatoes", price: 2.85, comment: "With extra Olives" },
          { title: "Bacon", price: 4.42 },
        ],
      },
      {
        title: "Salad",
        price: 9.08,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Tomatoes", price: 1.85, comment: "With extra Cheese" }],
      },
      {
        title: "Pasta",
        price: 8.47,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Mushrooms", price: 2.06 },
          { title: "Tomatoes", price: 3.87 },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [82.7804, 176.8108],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [{ title: "Soda", price: 15.03, type: "Drink", comment: "Extra Olives", itemsAddons: [{ title: "Tomatoes", price: 2.15 }] }],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [80.926, 176.8208],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Pizza", price: 17.37, type: "Food", comment: "Extra Cheese", itemsAddons: [{ title: "Tomatoes", price: 2.67 }] },
      {
        title: "Soda",
        price: 9.43,
        type: "Food",
        itemsAddons: [
          { title: "Olives", price: 4.46, comment: "With extra Olives" },
          { title: "Bacon", price: 2.97, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 1.2, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [89.0311, 172.9631],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 11.73,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Bacon", price: 3.41, comment: "With extra Olives" },
          { title: "Mushrooms", price: 1.8, comment: "With extra Olives" },
        ],
      },
      {
        title: "Salad",
        price: 18.53,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Olives", price: 4.08, comment: "With extra Olives" },
          { title: "Tomatoes", price: 4.54, comment: "With extra Olives" },
          { title: "Tomatoes", price: 2.64, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Salad",
        price: 15.23,
        type: "Food",
        itemsAddons: [
          { title: "Cheese", price: 3.1, comment: "With extra Olives" },
          { title: "Mushrooms", price: 2.67 },
          { title: "Tomatoes", price: 1.68, comment: "With extra Cheese" },
        ],
      },
      { title: "Soda", price: 6.92, type: "Food", comment: "Extra Olives", itemsAddons: [{ title: "Olives", price: 2.34 }] },
      {
        title: "Pizza",
        price: 13.95,
        type: "Drink",
        itemsAddons: [
          { title: "Tomatoes", price: 3.63 },
          { title: "Tomatoes", price: 3.54, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 4.66 },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [81.8914, 172.4585],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 11.64,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Cheese", price: 3.74, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 1.77 },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [86.0946, 174.5024],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Pizza", price: 5.98, type: "Food", comment: "Extra Cheese", itemsAddons: [{ title: "Olives", price: 4.87 }] },
      {
        title: "Pasta",
        price: 7.44,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [{ title: "Olives", price: 3.3, comment: "With extra Cheese" }],
      },
      {
        title: "Soda",
        price: 12.93,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Tomatoes", price: 2.66 },
          { title: "Cheese", price: 2.18, comment: "With extra Olives" },
        ],
      },
      { title: "Salad", price: 8.19, type: "Food", itemsAddons: [{ title: "Tomatoes", price: 3.67, comment: "With extra Olives" }] },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [80.9775, 171.9609],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Soda", price: 17.98, type: "Food", itemsAddons: [{ title: "Cheese", price: 2.79 }] },
      {
        title: "Pizza",
        price: 12.92,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [{ title: "Bacon", price: 4.93, comment: "With extra Olives" }],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [83.6139, 172.7895],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Soda", price: 9.54, type: "Food", itemsAddons: [{ title: "Mushrooms", price: 4.76 }] },
      {
        title: "Pasta",
        price: 12.26,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Tomatoes", price: 3.82, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 1.84, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Pasta",
        price: 13.91,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Cheese", price: 4.99 },
          { title: "Olives", price: 4.68, comment: "With extra Olives" },
        ],
      },
      {
        title: "Pizza",
        price: 8.18,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Cheese", price: 2.25, comment: "With extra Olives" },
          { title: "Mushrooms", price: 3.09 },
        ],
      },
      { title: "Salad", price: 13.64, type: "Food", itemsAddons: [{ title: "Mushrooms", price: 1.86 }] },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [85.1446, 178.6243],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 17.78,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Tomatoes", price: 2.21, comment: "With extra Cheese" },
          { title: "Bacon", price: 2.2 },
          { title: "Tomatoes", price: 3.69, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Pasta",
        price: 15.67,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Olives", price: 4.18, comment: "With extra Olives" },
          { title: "Cheese", price: 4.72 },
          { title: "Cheese", price: 3.98, comment: "With extra Olives" },
        ],
      },
      { title: "Salad", price: 14.82, type: "Drink", comment: "Extra Cheese", itemsAddons: [{ title: "Tomatoes", price: 1.99 }] },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [86.8673, 175.2327],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Pizza", price: 17.36, type: "Drink", comment: "Extra Cheese", itemsAddons: [{ title: "Bacon", price: 3.79 }] },
      { title: "Soda", price: 5.05, type: "Food", itemsAddons: [{ title: "Olives", price: 1.05, comment: "With extra Olives" }] },
      {
        title: "Soda",
        price: 12.37,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Bacon", price: 2.4 },
          { title: "Cheese", price: 3.43 },
          { title: "Cheese", price: 2.7 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [85.7058, 179.7832],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 13.84,
        type: "Drink",
        itemsAddons: [
          { title: "Tomatoes", price: 4.76 },
          { title: "Bacon", price: 3.62, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 1.87 },
        ],
      },
      {
        title: "Salad",
        price: 11.5,
        type: "Food",
        itemsAddons: [
          { title: "Tomatoes", price: 1.13, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 4.15, comment: "With extra Olives" },
          { title: "Cheese", price: 2.32 },
        ],
      },
      {
        title: "Pasta",
        price: 12.43,
        type: "Food",
        itemsAddons: [
          { title: "Tomatoes", price: 4.52 },
          { title: "Olives", price: 4.25 },
          { title: "Mushrooms", price: 4.47, comment: "With extra Olives" },
        ],
      },
      {
        title: "Salad",
        price: 14.86,
        type: "Food",
        itemsAddons: [
          { title: "Cheese", price: 2.83 },
          { title: "Bacon", price: 3.54 },
        ],
      },
      {
        title: "Pasta",
        price: 19.83,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Mushrooms", price: 2.64, comment: "With extra Olives" },
          { title: "Mushrooms", price: 2.61, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [80.9692, 175.278],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 7.3,
        type: "Drink",
        itemsAddons: [
          { title: "Tomatoes", price: 1.14 },
          { title: "Mushrooms", price: 4.36, comment: "With extra Olives" },
        ],
      },
      {
        title: "Pizza",
        price: 7.23,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Olives", price: 3.51, comment: "With extra Cheese" },
          { title: "Bacon", price: 2.05, comment: "With extra Cheese" },
          { title: "Cheese", price: 4.87, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Pizza",
        price: 19.78,
        type: "Food",
        itemsAddons: [
          { title: "Olives", price: 4.6, comment: "With extra Olives" },
          { title: "Mushrooms", price: 4.01 },
          { title: "Cheese", price: 3.56, comment: "With extra Olives" },
        ],
      },
      { title: "Salad", price: 7.41, type: "Food", itemsAddons: [{ title: "Bacon", price: 3.33 }] },
      { title: "Pasta", price: 19.85, type: "Drink", itemsAddons: [{ title: "Mushrooms", price: 4.75 }] },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [89.0229, 173.1614],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [{ title: "Soda", price: 10.98, type: "Food", itemsAddons: [{ title: "Olives", price: 2.29 }] }],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [85.7073, 175.4623],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 12.2,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Cheese", price: 2.79, comment: "With extra Olives" },
          { title: "Cheese", price: 1.8, comment: "With extra Cheese" },
          { title: "Cheese", price: 1.48, comment: "With extra Olives" },
        ],
      },
      {
        title: "Soda",
        price: 6.5,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Mushrooms", price: 4.1 },
          { title: "Cheese", price: 1.09 },
        ],
      },
      {
        title: "Pizza",
        price: 6.76,
        type: "Drink",
        itemsAddons: [
          { title: "Tomatoes", price: 3.48, comment: "With extra Cheese" },
          { title: "Cheese", price: 2.3 },
          { title: "Olives", price: 4.86 },
        ],
      },
      {
        title: "Soda",
        price: 6.14,
        type: "Drink",
        itemsAddons: [
          { title: "Cheese", price: 3.37, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 1.95 },
          { title: "Olives", price: 1.29 },
        ],
      },
      {
        title: "Soda",
        price: 10.91,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Mushrooms", price: 3.59 },
          { title: "Bacon", price: 2.88, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [85.5378, 173.5532],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 7.19,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Mushrooms", price: 3.2 },
          { title: "Mushrooms", price: 2.79 },
          { title: "Cheese", price: 4.28, comment: "With extra Olives" },
        ],
      },
      { title: "Pasta", price: 19.25, type: "Drink", comment: "Extra Cheese", itemsAddons: [{ title: "Cheese", price: 4.06 }] },
      { title: "Soda", price: 7.28, type: "Drink", comment: "Extra Olives", itemsAddons: [{ title: "Tomatoes", price: 3.12 }] },
      {
        title: "Pizza",
        price: 12.55,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Bacon", price: 4.38, comment: "With extra Olives" }],
      },
      {
        title: "Pizza",
        price: 6.32,
        type: "Drink",
        itemsAddons: [
          { title: "Mushrooms", price: 3.71 },
          { title: "Bacon", price: 1.73, comment: "With extra Cheese" },
          { title: "Cheese", price: 4 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [88.6231, 175.8554],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 18.33,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Tomatoes", price: 3.66, comment: "With extra Cheese" },
          { title: "Cheese", price: 2.28 },
          { title: "Cheese", price: 2.21 },
        ],
      },
      { title: "Pizza", price: 6.87, type: "Food", comment: "Extra Olives", itemsAddons: [{ title: "Cheese", price: 4.34 }] },
      {
        title: "Soda",
        price: 19.8,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Mushrooms", price: 4.87, comment: "With extra Olives" },
          { title: "Tomatoes", price: 4.94 },
        ],
      },
      { title: "Soda", price: 5.11, type: "Drink", comment: "Extra Cheese", itemsAddons: [{ title: "Tomatoes", price: 2 }] },
      {
        title: "Soda",
        price: 11.73,
        type: "Drink",
        itemsAddons: [
          { title: "Bacon", price: 4.75 },
          { title: "Mushrooms", price: 3.31 },
          { title: "Olives", price: 3.74, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [87.371, 172.5467],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Salad", price: 13.81, type: "Drink", itemsAddons: [{ title: "Cheese", price: 2.93, comment: "With extra Olives" }] },
      {
        title: "Salad",
        price: 6.15,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Bacon", price: 2.04 },
          { title: "Tomatoes", price: 1.94, comment: "With extra Cheese" },
          { title: "Cheese", price: 3.34, comment: "With extra Olives" },
        ],
      },
      {
        title: "Pasta",
        price: 17.78,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Mushrooms", price: 1.84, comment: "With extra Cheese" },
          { title: "Bacon", price: 3.29, comment: "With extra Cheese" },
          { title: "Bacon", price: 4.93, comment: "With extra Olives" },
        ],
      },
      {
        title: "Salad",
        price: 9.02,
        type: "Food",
        itemsAddons: [
          { title: "Olives", price: 2.69 },
          { title: "Bacon", price: 2.02 },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [86.3908, 177.8141],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 17.53,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Cheese", price: 3.23 },
          { title: "Bacon", price: 2.15 },
          { title: "Cheese", price: 4.4, comment: "With extra Olives" },
        ],
      },
      { title: "Pizza", price: 16.46, type: "Drink", comment: "Extra Olives", itemsAddons: [{ title: "Mushrooms", price: 2.02 }] },
      { title: "Soda", price: 19.03, type: "Drink", comment: "Extra Olives", itemsAddons: [{ title: "Olives", price: 3.76 }] },
      {
        title: "Soda",
        price: 6.12,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Bacon", price: 4.16, comment: "With extra Olives" }],
      },
      {
        title: "Soda",
        price: 12.55,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Cheese", price: 3.21 },
          { title: "Bacon", price: 3.11 },
          { title: "Olives", price: 2.28 },
        ],
      },
    ],
  },

  {
    title: "Order for Doe",
    status: "Received",

    location: [80.4816, 175.153],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 15.45,
        type: "Food",
        itemsAddons: [
          { title: "Cheese", price: 1.58 },
          { title: "Tomatoes", price: 2.47 },
          { title: "Cheese", price: 4, comment: "With extra Olives" },
        ],
      },
      {
        title: "Salad",
        price: 8.02,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Olives", price: 3.84, comment: "With extra Cheese" },
          { title: "Tomatoes", price: 3.26 },
          { title: "Bacon", price: 1.31, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Salad",
        price: 11.56,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Tomatoes", price: 3.06 },
          { title: "Tomatoes", price: 1.29 },
          { title: "Bacon", price: 2.57, comment: "With extra Olives" },
        ],
      },
      {
        title: "Pizza",
        price: 10.94,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Cheese", price: 2.16 },
          { title: "Olives", price: 3.98 },
        ],
      },
      {
        title: "Pizza",
        price: 8.29,
        type: "Food",
        itemsAddons: [
          { title: "Bacon", price: 4.96 },
          { title: "Tomatoes", price: 1.26 },
          { title: "Olives", price: 4.02, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [88.16, 171.4674],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 9.83,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Mushrooms", price: 4.6, comment: "With extra Olives" },
          { title: "Bacon", price: 1.69, comment: "With extra Cheese" },
        ],
      },
      { title: "Pasta", price: 19.37, type: "Food", itemsAddons: [{ title: "Bacon", price: 4.03, comment: "With extra Cheese" }] },
      { title: "Soda", price: 16.15, type: "Drink", itemsAddons: [{ title: "Bacon", price: 4.25, comment: "With extra Olives" }] },
      {
        title: "Salad",
        price: 10.61,
        type: "Food",
        itemsAddons: [
          { title: "Olives", price: 2.92 },
          { title: "Bacon", price: 4.4, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Pizza",
        price: 13.41,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Mushrooms", price: 4.3 },
          { title: "Tomatoes", price: 1.01, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [80.7596, 172.7527],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 12.8,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Olives", price: 1.48, comment: "With extra Olives" },
          { title: "Olives", price: 2.2, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Salad",
        price: 17.4,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [{ title: "Cheese", price: 2.15, comment: "With extra Cheese" }],
      },
      { title: "Salad", price: 11.85, type: "Drink", itemsAddons: [{ title: "Cheese", price: 4.7, comment: "With extra Olives" }] },
      {
        title: "Pizza",
        price: 11.18,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [{ title: "Bacon", price: 4.57, comment: "With extra Cheese" }],
      },
      {
        title: "Pasta",
        price: 18.67,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [{ title: "Tomatoes", price: 3.92, comment: "With extra Olives" }],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [81.9102, 174.9411],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 16.83,
        type: "Food",
        itemsAddons: [
          { title: "Tomatoes", price: 1.1 },
          { title: "Mushrooms", price: 1.7, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Soda",
        price: 17.62,
        type: "Drink",
        itemsAddons: [
          { title: "Olives", price: 2.22, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 2.77, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Pasta",
        price: 10.54,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Mushrooms", price: 1.43, comment: "With extra Cheese" },
          { title: "Cheese", price: 3.2 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [83.3883, 173.8078],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 18.42,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Olives", price: 1.14, comment: "With extra Cheese" },
          { title: "Bacon", price: 1.82 },
          { title: "Mushrooms", price: 3.28, comment: "With extra Olives" },
        ],
      },
      { title: "Salad", price: 14.12, type: "Drink", itemsAddons: [{ title: "Bacon", price: 3.91 }] },
      { title: "Pasta", price: 14.76, type: "Food", comment: "Extra Cheese", itemsAddons: [{ title: "Olives", price: 2.67 }] },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [82.9183, 175.2127],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Pasta", price: 13.75, type: "Drink", comment: "Extra Cheese", itemsAddons: [{ title: "Tomatoes", price: 1.88 }] },
      { title: "Salad", price: 17.87, type: "Food", comment: "Extra Cheese", itemsAddons: [{ title: "Olives", price: 4.74 }] },
      { title: "Salad", price: 18.23, type: "Food", itemsAddons: [{ title: "Mushrooms", price: 2.85, comment: "With extra Cheese" }] },
      { title: "Pizza", price: 8.43, type: "Food", comment: "Extra Olives", itemsAddons: [{ title: "Mushrooms", price: 4.82 }] },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [82.7237, 172.7048],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 6.79,
        type: "Drink",
        itemsAddons: [
          { title: "Bacon", price: 3.1 },
          { title: "Mushrooms", price: 4.31, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 3.27, comment: "With extra Olives" },
        ],
      },
      {
        title: "Pizza",
        price: 14.76,
        type: "Drink",
        itemsAddons: [
          { title: "Bacon", price: 1.89 },
          { title: "Tomatoes", price: 2.57, comment: "With extra Olives" },
          { title: "Cheese", price: 3.53 },
        ],
      },
      { title: "Salad", price: 17.74, type: "Drink", itemsAddons: [{ title: "Mushrooms", price: 1.73, comment: "With extra Olives" }] },
      {
        title: "Salad",
        price: 6.73,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Olives", price: 1.76, comment: "With extra Cheese" },
          { title: "Tomatoes", price: 1.55 },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [83.0842, 176.6967],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 17.15,
        type: "Drink",
        itemsAddons: [
          { title: "Olives", price: 4.79 },
          { title: "Mushrooms", price: 2.2, comment: "With extra Olives" },
        ],
      },
      {
        title: "Soda",
        price: 15.03,
        type: "Food",
        itemsAddons: [
          { title: "Olives", price: 3.52 },
          { title: "Cheese", price: 3.25 },
        ],
      },
      { title: "Soda", price: 11.94, type: "Drink", itemsAddons: [{ title: "Bacon", price: 3.9, comment: "With extra Olives" }] },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [87.1329, 175.4177],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 10.98,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Mushrooms", price: 4.37, comment: "With extra Olives" },
          { title: "Mushrooms", price: 3.88 },
        ],
      },
      {
        title: "Pasta",
        price: 17.16,
        type: "Drink",
        itemsAddons: [
          { title: "Olives", price: 4.21 },
          { title: "Tomatoes", price: 4.95 },
          { title: "Olives", price: 1.1 },
        ],
      },
      {
        title: "Salad",
        price: 10.6,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Cheese", price: 1.4, comment: "With extra Cheese" }],
      },
      {
        title: "Soda",
        price: 10.94,
        type: "Drink",
        itemsAddons: [
          { title: "Tomatoes", price: 1.19, comment: "With extra Cheese" },
          { title: "Cheese", price: 4.9, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [88.6749, 170.457],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 9.88,
        type: "Drink",
        itemsAddons: [
          { title: "Olives", price: 2.72 },
          { title: "Tomatoes", price: 1.44 },
          { title: "Tomatoes", price: 2.39, comment: "With extra Olives" },
        ],
      },
      {
        title: "Salad",
        price: 19.38,
        type: "Food",
        itemsAddons: [
          { title: "Olives", price: 4.78 },
          { title: "Olives", price: 1.77 },
        ],
      },
      {
        title: "Soda",
        price: 6.02,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Tomatoes", price: 1.13 },
          { title: "Tomatoes", price: 1.36, comment: "With extra Cheese" },
          { title: "Tomatoes", price: 4.67 },
        ],
      },
      { title: "Soda", price: 17.09, type: "Drink", itemsAddons: [{ title: "Mushrooms", price: 4.02, comment: "With extra Cheese" }] },
      { title: "Pizza", price: 16.85, type: "Food", itemsAddons: [{ title: "Tomatoes", price: 3.48 }] },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [85.1696, 178.2397],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 18.81,
        type: "Food",
        itemsAddons: [
          { title: "Bacon", price: 1.39, comment: "With extra Olives" },
          { title: "Olives", price: 1.33, comment: "With extra Cheese" },
          { title: "Cheese", price: 4.1, comment: "With extra Cheese" },
        ],
      },
      { title: "Pasta", price: 9.91, type: "Drink", comment: "Extra Olives", itemsAddons: [{ title: "Bacon", price: 3.68 }] },
      {
        title: "Pasta",
        price: 16.82,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Bacon", price: 1.44 },
          { title: "Mushrooms", price: 3.84, comment: "With extra Olives" },
        ],
      },
      {
        title: "Pasta",
        price: 10.71,
        type: "Food",
        itemsAddons: [
          { title: "Cheese", price: 2.01 },
          { title: "Olives", price: 3.35 },
        ],
      },
      {
        title: "Pasta",
        price: 5.58,
        type: "Drink",
        itemsAddons: [
          { title: "Mushrooms", price: 3.54, comment: "With extra Cheese" },
          { title: "Tomatoes", price: 1.26 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [86.0344, 171.8916],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 13.36,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Mushrooms", price: 1.67, comment: "With extra Cheese" },
          { title: "Bacon", price: 4.83 },
          { title: "Cheese", price: 3.87, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Pasta",
        price: 17.63,
        type: "Food",
        itemsAddons: [
          { title: "Cheese", price: 3.09 },
          { title: "Cheese", price: 4.07, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Pasta",
        price: 19.43,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Bacon", price: 4.8, comment: "With extra Cheese" },
          { title: "Cheese", price: 4.17, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 2.1, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [89.4477, 172.4531],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Pizza", price: 6.15, type: "Drink", itemsAddons: [{ title: "Mushrooms", price: 1.07, comment: "With extra Cheese" }] },
      {
        title: "Soda",
        price: 13.62,
        type: "Drink",
        itemsAddons: [
          { title: "Olives", price: 1.08 },
          { title: "Tomatoes", price: 4.96 },
        ],
      },
      {
        title: "Soda",
        price: 9.41,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Olives", price: 4.6 },
          { title: "Olives", price: 4.58 },
        ],
      },
      { title: "Pizza", price: 18.15, type: "Drink", itemsAddons: [{ title: "Mushrooms", price: 3.64 }] },
      {
        title: "Pasta",
        price: 19.54,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Olives", price: 2.68 },
          { title: "Tomatoes", price: 3.44, comment: "With extra Olives" },
          { title: "Bacon", price: 3.76 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [84.6491, 170.0992],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 13.6,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Tomatoes", price: 3.14, comment: "With extra Cheese" },
          { title: "Cheese", price: 2.65, comment: "With extra Olives" },
          { title: "Mushrooms", price: 4.42, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Pizza",
        price: 10.21,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Bacon", price: 3.21, comment: "With extra Olives" },
          { title: "Bacon", price: 1.92, comment: "With extra Olives" },
          { title: "Bacon", price: 4.71 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [80.1317, 175.3272],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 9.25,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Bacon", price: 2.85, comment: "With extra Olives" },
          { title: "Olives", price: 4.43 },
        ],
      },
      {
        title: "Soda",
        price: 18.77,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Bacon", price: 3.61 },
          { title: "Olives", price: 4.8 },
          { title: "Olives", price: 3.4, comment: "With extra Olives" },
        ],
      },
      {
        title: "Soda",
        price: 16.68,
        type: "Food",
        itemsAddons: [
          { title: "Olives", price: 4.02 },
          { title: "Tomatoes", price: 2.93, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [85.4472, 172.0831],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 17.59,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Mushrooms", price: 1.47, comment: "With extra Olives" },
          { title: "Bacon", price: 2.76, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Soda",
        price: 11.04,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Mushrooms", price: 1.47 },
          { title: "Cheese", price: 2.75 },
        ],
      },
      {
        title: "Soda",
        price: 6.69,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Olives", price: 2.62, comment: "With extra Cheese" },
          { title: "Bacon", price: 1.07, comment: "With extra Olives" },
          { title: "Bacon", price: 3.81 },
        ],
      },
      { title: "Pizza", price: 17.07, type: "Food", itemsAddons: [{ title: "Cheese", price: 3.33, comment: "With extra Cheese" }] },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [80.4218, 173.1086],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 9.1,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Cheese", price: 2.74 },
          { title: "Mushrooms", price: 3.33, comment: "With extra Cheese" },
          { title: "Bacon", price: 1.16 },
        ],
      },
      {
        title: "Pizza",
        price: 14.64,
        type: "Food",
        itemsAddons: [
          { title: "Olives", price: 3.21, comment: "With extra Olives" },
          { title: "Mushrooms", price: 3.89, comment: "With extra Olives" },
          { title: "Mushrooms", price: 1.78, comment: "With extra Olives" },
        ],
      },
      {
        title: "Salad",
        price: 15.34,
        type: "Food",
        itemsAddons: [
          { title: "Bacon", price: 2.33 },
          { title: "Mushrooms", price: 3.88 },
          { title: "Olives", price: 3.65 },
        ],
      },
      {
        title: "Soda",
        price: 18.57,
        type: "Drink",
        itemsAddons: [
          { title: "Olives", price: 2.04 },
          { title: "Cheese", price: 1.13 },
          { title: "Olives", price: 3.5, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [88.0868, 175.1748],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Salad", price: 12.05, type: "Food", itemsAddons: [{ title: "Tomatoes", price: 4.37, comment: "With extra Cheese" }] },
      {
        title: "Pizza",
        price: 17.98,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Cheese", price: 4.07, comment: "With extra Olives" },
          { title: "Mushrooms", price: 3.63 },
          { title: "Bacon", price: 3.99 },
        ],
      },
      {
        title: "Pasta",
        price: 10.08,
        type: "Food",
        itemsAddons: [
          { title: "Mushrooms", price: 3.3 },
          { title: "Tomatoes", price: 3.78, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Soda",
        price: 6.1,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Olives", price: 4, comment: "With extra Olives" }],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [86.7659, 170.7336],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 19.99,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Tomatoes", price: 4.36, comment: "With extra Cheese" },
          { title: "Olives", price: 3.84, comment: "With extra Cheese" },
        ],
      },
      { title: "Pizza", price: 8.44, type: "Food", itemsAddons: [{ title: "Bacon", price: 3.15 }] },
      {
        title: "Salad",
        price: 12.62,
        type: "Food",
        itemsAddons: [
          { title: "Bacon", price: 3.51, comment: "With extra Cheese" },
          { title: "Bacon", price: 4.65 },
          { title: "Tomatoes", price: 1.29, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [81.6625, 178.2344],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 11.49,
        type: "Food",
        itemsAddons: [
          { title: "Tomatoes", price: 1.41 },
          { title: "Bacon", price: 4.96, comment: "With extra Olives" },
        ],
      },
      { title: "Salad", price: 15.98, type: "Food", itemsAddons: [{ title: "Tomatoes", price: 3.17, comment: "With extra Cheese" }] },
      { title: "Salad", price: 14.68, type: "Food", itemsAddons: [{ title: "Bacon", price: 1.56, comment: "With extra Olives" }] },
      {
        title: "Soda",
        price: 10.1,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Mushrooms", price: 4.53, comment: "With extra Cheese" }],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [81.4858, 177.6175],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 17.68,
        type: "Food",
        itemsAddons: [
          { title: "Mushrooms", price: 4.19, comment: "With extra Olives" },
          { title: "Tomatoes", price: 3.26 },
          { title: "Mushrooms", price: 4.67, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Salad",
        price: 12.38,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Bacon", price: 2.04, comment: "With extra Cheese" }],
      },
      {
        title: "Pizza",
        price: 11.04,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [{ title: "Cheese", price: 2.78, comment: "With extra Cheese" }],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [86.6441, 172.2822],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 9.3,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Tomatoes", price: 2.84, comment: "With extra Olives" },
          { title: "Tomatoes", price: 3.13 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [82.5442, 172.962],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 19.26,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Mushrooms", price: 4.88, comment: "With extra Olives" },
          { title: "Cheese", price: 3.33, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Soda",
        price: 18.97,
        type: "Drink",
        itemsAddons: [
          { title: "Cheese", price: 4.28, comment: "With extra Olives" },
          { title: "Cheese", price: 4.27 },
        ],
      },
      {
        title: "Soda",
        price: 11.6,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [{ title: "Cheese", price: 2.3, comment: "With extra Cheese" }],
      },
      {
        title: "Pizza",
        price: 12.9,
        type: "Drink",
        itemsAddons: [
          { title: "Tomatoes", price: 4.92, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 2.9, comment: "With extra Olives" },
          { title: "Olives", price: 1.32, comment: "With extra Cheese" },
        ],
      },
      { title: "Salad", price: 8.46, type: "Food", comment: "Extra Cheese", itemsAddons: [{ title: "Olives", price: 4.09 }] },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [88.7135, 173.8052],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Soda", price: 14.3, type: "Food", comment: "Extra Olives", itemsAddons: [{ title: "Cheese", price: 1.83 }] },
      {
        title: "Pasta",
        price: 11.11,
        type: "Food",
        itemsAddons: [
          { title: "Bacon", price: 2.82 },
          { title: "Cheese", price: 2.95 },
          { title: "Cheese", price: 4.99 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [84.3838, 178.3114],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 17.51,
        type: "Drink",
        itemsAddons: [
          { title: "Olives", price: 2.57, comment: "With extra Olives" },
          { title: "Bacon", price: 4.25, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [84.2533, 175.583],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 16.17,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Olives", price: 3.33, comment: "With extra Olives" },
          { title: "Tomatoes", price: 3.85 },
          { title: "Tomatoes", price: 2.84 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [87.7845, 172.4521],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 19.75,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Mushrooms", price: 4.11, comment: "With extra Olives" },
          { title: "Tomatoes", price: 3.43 },
        ],
      },
      {
        title: "Soda",
        price: 16.54,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Bacon", price: 2.58, comment: "With extra Cheese" },
          { title: "Cheese", price: 4.41 },
        ],
      },
      {
        title: "Pasta",
        price: 14.16,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [{ title: "Tomatoes", price: 3.71, comment: "With extra Olives" }],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [88.2483, 172.9338],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 19.12,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Olives", price: 2.91 },
          { title: "Olives", price: 4.26 },
        ],
      },
      {
        title: "Pizza",
        price: 9.07,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Mushrooms", price: 3.13 },
          { title: "Mushrooms", price: 4.55 },
          { title: "Mushrooms", price: 3.08, comment: "With extra Olives" },
        ],
      },
      {
        title: "Pizza",
        price: 17.07,
        type: "Food",
        itemsAddons: [
          { title: "Olives", price: 2.33 },
          { title: "Olives", price: 1.92 },
          { title: "Olives", price: 2.89 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [87.532, 175.6555],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 7.2,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Bacon", price: 3.6, comment: "With extra Olives" },
          { title: "Bacon", price: 1.55, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Pasta",
        price: 18.88,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Cheese", price: 2.29 },
          { title: "Olives", price: 4.23 },
        ],
      },
      { title: "Soda", price: 14.79, type: "Drink", comment: "Extra Cheese", itemsAddons: [{ title: "Mushrooms", price: 1.67 }] },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [88.2919, 171.1626],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [{ title: "Pasta", price: 9.92, type: "Food", itemsAddons: [{ title: "Cheese", price: 2.01, comment: "With extra Olives" }] }],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [84.812, 172.4307],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 18.44,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Cheese", price: 2.58 },
          { title: "Bacon", price: 4.12, comment: "With extra Olives" },
        ],
      },
      {
        title: "Salad",
        price: 16.19,
        type: "Food",
        itemsAddons: [
          { title: "Cheese", price: 3.49, comment: "With extra Olives" },
          { title: "Cheese", price: 3.96, comment: "With extra Cheese" },
          { title: "Bacon", price: 2.01, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Pasta",
        price: 18.74,
        type: "Food",
        itemsAddons: [
          { title: "Bacon", price: 1.75, comment: "With extra Olives" },
          { title: "Olives", price: 4.31 },
          { title: "Tomatoes", price: 1.17, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [82.8719, 174.4074],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [{ title: "Salad", price: 11.39, type: "Food", itemsAddons: [{ title: "Olives", price: 1.69 }] }],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [80.2757, 177.3263],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [{ title: "Salad", price: 11.85, type: "Food", comment: "Extra Olives", itemsAddons: [{ title: "Cheese", price: 3.46 }] }],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [86.4843, 174.97],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 17.51,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [{ title: "Cheese", price: 1.25, comment: "With extra Olives" }],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [83.5195, 174.8171],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 17.07,
        type: "Drink",
        itemsAddons: [
          { title: "Olives", price: 3.15, comment: "With extra Cheese" },
          { title: "Olives", price: 4.38 },
          { title: "Olives", price: 4.27, comment: "With extra Olives" },
        ],
      },
      {
        title: "Pizza",
        price: 18.68,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Cheese", price: 2.88, comment: "With extra Cheese" }],
      },
      {
        title: "Salad",
        price: 12.25,
        type: "Drink",
        itemsAddons: [
          { title: "Mushrooms", price: 3.36, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 2.15, comment: "With extra Olives" },
          { title: "Bacon", price: 3 },
        ],
      },
      {
        title: "Soda",
        price: 11.92,
        type: "Food",
        itemsAddons: [
          { title: "Mushrooms", price: 1.51, comment: "With extra Cheese" },
          { title: "Cheese", price: 3.24, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [86.6975, 177.504],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 5.86,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [{ title: "Mushrooms", price: 4.57, comment: "With extra Cheese" }],
      },
      {
        title: "Pizza",
        price: 18.18,
        type: "Drink",
        itemsAddons: [
          { title: "Mushrooms", price: 1.74, comment: "With extra Olives" },
          { title: "Tomatoes", price: 3.84 },
          { title: "Olives", price: 4.58, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [87.6606, 173.0572],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 19.85,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [{ title: "Bacon", price: 3.04, comment: "With extra Olives" }],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [82.8993, 178.9393],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 7.8,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Bacon", price: 2.91, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 1.77 },
          { title: "Mushrooms", price: 4.66, comment: "With extra Olives" },
        ],
      },
      { title: "Pizza", price: 7.03, type: "Drink", itemsAddons: [{ title: "Tomatoes", price: 2.09, comment: "With extra Olives" }] },
      {
        title: "Pizza",
        price: 6.53,
        type: "Drink",
        itemsAddons: [
          { title: "Cheese", price: 4.06, comment: "With extra Olives" },
          { title: "Tomatoes", price: 3.29, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Salad",
        price: 16.92,
        type: "Drink",
        itemsAddons: [
          { title: "Olives", price: 4.4, comment: "With extra Olives" },
          { title: "Olives", price: 3.92 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [84.6427, 173.2421],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 18.57,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Olives", price: 1.53, comment: "With extra Olives" },
          { title: "Mushrooms", price: 2.96, comment: "With extra Olives" },
          { title: "Cheese", price: 2.02, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [85.4037, 175.0637],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 7.4,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [{ title: "Cheese", price: 3.85, comment: "With extra Olives" }],
      },
      {
        title: "Salad",
        price: 5.86,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Olives", price: 2, comment: "With extra Cheese" }],
      },
      {
        title: "Pizza",
        price: 19.35,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [{ title: "Cheese", price: 3.32, comment: "With extra Olives" }],
      },
      {
        title: "Salad",
        price: 11.02,
        type: "Drink",
        itemsAddons: [
          { title: "Bacon", price: 2.82, comment: "With extra Cheese" },
          { title: "Cheese", price: 3.5 },
          { title: "Mushrooms", price: 4.43, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [85.0821, 175.0903],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [{ title: "Pizza", price: 12.86, type: "Food", comment: "Extra Cheese", itemsAddons: [{ title: "Bacon", price: 4.54 }] }],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [87.6617, 173.4768],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Pizza", price: 13.12, type: "Drink", itemsAddons: [{ title: "Olives", price: 2.79 }] },
      {
        title: "Pizza",
        price: 10.26,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Olives", price: 2.02 },
          { title: "Cheese", price: 3.32 },
          { title: "Olives", price: 2.83 },
        ],
      },
      {
        title: "Pasta",
        price: 12.48,
        type: "Drink",
        itemsAddons: [
          { title: "Tomatoes", price: 1.67 },
          { title: "Bacon", price: 1.18, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [85.6385, 173.6245],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Pasta", price: 14.37, type: "Food", comment: "Extra Olives", itemsAddons: [{ title: "Bacon", price: 2.18 }] },
      {
        title: "Soda",
        price: 14.87,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Mushrooms", price: 3.83, comment: "With extra Cheese" }],
      },
      {
        title: "Pasta",
        price: 18.18,
        type: "Food",
        itemsAddons: [
          { title: "Tomatoes", price: 1.18, comment: "With extra Cheese" },
          { title: "Bacon", price: 3.85 },
          { title: "Mushrooms", price: 1.19, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Salad",
        price: 18.89,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Tomatoes", price: 2.22, comment: "With extra Olives" }],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [80.2605, 176.7694],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Salad", price: 7.64, type: "Drink", comment: "Extra Cheese", itemsAddons: [{ title: "Mushrooms", price: 1.04 }] },
      {
        title: "Soda",
        price: 12.1,
        type: "Food",
        itemsAddons: [
          { title: "Tomatoes", price: 1.19, comment: "With extra Olives" },
          { title: "Tomatoes", price: 4.14 },
          { title: "Cheese", price: 4.01, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Pasta",
        price: 15.28,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Olives", price: 1.47 },
          { title: "Mushrooms", price: 3.17, comment: "With extra Cheese" },
          { title: "Olives", price: 1.16, comment: "With extra Olives" },
        ],
      },
      {
        title: "Pizza",
        price: 14.17,
        type: "Food",
        itemsAddons: [
          { title: "Tomatoes", price: 2.5, comment: "With extra Olives" },
          { title: "Cheese", price: 4.35 },
        ],
      },
      {
        title: "Pasta",
        price: 16.39,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Tomatoes", price: 1.94, comment: "With extra Olives" }],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [80.1649, 174.4391],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 6.05,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Olives", price: 2.41 },
          { title: "Cheese", price: 3.38, comment: "With extra Olives" },
        ],
      },
      {
        title: "Salad",
        price: 9.34,
        type: "Food",
        itemsAddons: [
          { title: "Olives", price: 4.51, comment: "With extra Cheese" },
          { title: "Tomatoes", price: 1.38, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 1.36 },
        ],
      },
      {
        title: "Soda",
        price: 9.72,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Tomatoes", price: 3.12, comment: "With extra Cheese" },
          { title: "Olives", price: 2.84 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [89.4101, 176.0072],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 11.97,
        type: "Drink",
        itemsAddons: [
          { title: "Cheese", price: 1.78 },
          { title: "Olives", price: 4.49, comment: "With extra Cheese" },
          { title: "Cheese", price: 3.88 },
        ],
      },
      {
        title: "Pasta",
        price: 11.98,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Tomatoes", price: 2.11 },
          { title: "Mushrooms", price: 4.47, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Soda",
        price: 5.47,
        type: "Drink",
        itemsAddons: [
          { title: "Bacon", price: 2.49 },
          { title: "Cheese", price: 2.4, comment: "With extra Olives" },
        ],
      },
      {
        title: "Pizza",
        price: 6.75,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Olives", price: 4.99, comment: "With extra Cheese" },
          { title: "Olives", price: 3.31, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [80.0784, 176.782],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Salad", price: 13.7, type: "Drink", comment: "Extra Cheese", itemsAddons: [{ title: "Mushrooms", price: 2.27 }] },
      {
        title: "Pizza",
        price: 8.52,
        type: "Food",
        itemsAddons: [
          { title: "Tomatoes", price: 2.87 },
          { title: "Olives", price: 1.22, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [86.5455, 176.5932],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 8.76,
        type: "Food",
        itemsAddons: [
          { title: "Cheese", price: 2.3 },
          { title: "Cheese", price: 3.92 },
          { title: "Olives", price: 2.64, comment: "With extra Olives" },
        ],
      },
      {
        title: "Salad",
        price: 8.4,
        type: "Drink",
        itemsAddons: [
          { title: "Cheese", price: 1.89, comment: "With extra Olives" },
          { title: "Tomatoes", price: 3.66 },
          { title: "Tomatoes", price: 3.19, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Salad",
        price: 10.6,
        type: "Drink",
        itemsAddons: [
          { title: "Bacon", price: 1.09, comment: "With extra Olives" },
          { title: "Mushrooms", price: 1.4 },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [86.4968, 171.8517],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 7.98,
        type: "Food",
        itemsAddons: [
          { title: "Mushrooms", price: 1.01 },
          { title: "Olives", price: 2.77 },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [88.5565, 171.3239],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 8.23,
        type: "Food",
        itemsAddons: [
          { title: "Olives", price: 2.83 },
          { title: "Mushrooms", price: 4.51, comment: "With extra Cheese" },
          { title: "Olives", price: 1.85, comment: "With extra Olives" },
        ],
      },
      {
        title: "Soda",
        price: 10.03,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Cheese", price: 4.53 },
          { title: "Tomatoes", price: 2.46 },
          { title: "Mushrooms", price: 2.58, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Soda",
        price: 13.36,
        type: "Food",
        itemsAddons: [
          { title: "Mushrooms", price: 4.3, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 2.9, comment: "With extra Olives" },
        ],
      },
      {
        title: "Salad",
        price: 15.79,
        type: "Drink",
        itemsAddons: [
          { title: "Olives", price: 4.13 },
          { title: "Olives", price: 2.53, comment: "With extra Olives" },
          { title: "Mushrooms", price: 2.59, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [80.4208, 173.5669],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Soda", price: 13.62, type: "Food", itemsAddons: [{ title: "Cheese", price: 1.11 }] },
      {
        title: "Pizza",
        price: 14.97,
        type: "Food",
        itemsAddons: [
          { title: "Mushrooms", price: 4.2, comment: "With extra Olives" },
          { title: "Mushrooms", price: 4.23 },
        ],
      },
      {
        title: "Pasta",
        price: 15.75,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [{ title: "Mushrooms", price: 1.74, comment: "With extra Cheese" }],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [88.0654, 175.8357],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 16.32,
        type: "Drink",
        itemsAddons: [
          { title: "Olives", price: 1.01, comment: "With extra Olives" },
          { title: "Cheese", price: 4.11, comment: "With extra Olives" },
          { title: "Olives", price: 4.01 },
        ],
      },
      {
        title: "Salad",
        price: 9.91,
        type: "Food",
        itemsAddons: [
          { title: "Cheese", price: 1.57, comment: "With extra Cheese" },
          { title: "Cheese", price: 3.53, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [86.9222, 170.6495],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 18.15,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Mushrooms", price: 3.91 },
          { title: "Tomatoes", price: 2.38, comment: "With extra Cheese" },
        ],
      },
      { title: "Pizza", price: 10.85, type: "Food", itemsAddons: [{ title: "Olives", price: 2.22, comment: "With extra Olives" }] },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [80.5365, 170.0486],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 10.42,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Olives", price: 2.76 },
          { title: "Cheese", price: 3.75, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Soda",
        price: 8.22,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Bacon", price: 2.12, comment: "With extra Olives" },
          { title: "Olives", price: 3.39 },
          { title: "Tomatoes", price: 3.39 },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [84.8706, 175.0766],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 18.39,
        type: "Food",
        itemsAddons: [
          { title: "Tomatoes", price: 3.03 },
          { title: "Mushrooms", price: 4.65, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Pizza",
        price: 14.19,
        type: "Drink",
        itemsAddons: [
          { title: "Mushrooms", price: 4.23 },
          { title: "Tomatoes", price: 4.01 },
        ],
      },
      {
        title: "Pizza",
        price: 15.7,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [{ title: "Bacon", price: 4.94, comment: "With extra Cheese" }],
      },
      {
        title: "Pizza",
        price: 17.09,
        type: "Drink",
        itemsAddons: [
          { title: "Tomatoes", price: 1.46 },
          { title: "Cheese", price: 1.53 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [85.3559, 178.9651],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 18.36,
        type: "Drink",
        itemsAddons: [
          { title: "Bacon", price: 3.56, comment: "With extra Olives" },
          { title: "Mushrooms", price: 1.08, comment: "With extra Cheese" },
        ],
      },
      { title: "Soda", price: 9.16, type: "Drink", itemsAddons: [{ title: "Mushrooms", price: 4.77, comment: "With extra Olives" }] },
      {
        title: "Pasta",
        price: 12.69,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Bacon", price: 2.81, comment: "With extra Olives" },
          { title: "Bacon", price: 1.41 },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [89.2911, 176.7048],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Salad", price: 10.85, type: "Drink", comment: "Extra Olives", itemsAddons: [{ title: "Cheese", price: 1.95 }] },
      {
        title: "Pizza",
        price: 5.06,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Cheese", price: 1.35, comment: "With extra Cheese" },
          { title: "Tomatoes", price: 3.71 },
          { title: "Mushrooms", price: 2.59 },
        ],
      },
      { title: "Pasta", price: 19.7, type: "Drink", itemsAddons: [{ title: "Bacon", price: 3.45 }] },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [88.0428, 179.9772],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 15.34,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Olives", price: 4.93 },
          { title: "Mushrooms", price: 3.49, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Pasta",
        price: 19.89,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Olives", price: 1.99, comment: "With extra Cheese" },
          { title: "Bacon", price: 1.84 },
          { title: "Bacon", price: 3.46 },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [84.6986, 170.7049],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 12.41,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Tomatoes", price: 4.53 },
          { title: "Olives", price: 1.53, comment: "With extra Cheese" },
          { title: "Olives", price: 1.92 },
        ],
      },
      {
        title: "Soda",
        price: 11.66,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Bacon", price: 2.59 },
          { title: "Cheese", price: 2.08, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Pizza",
        price: 11.79,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Tomatoes", price: 4.2 },
          { title: "Cheese", price: 1.93, comment: "With extra Olives" },
          { title: "Cheese", price: 3.82 },
        ],
      },
      {
        title: "Pasta",
        price: 13.51,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Mushrooms", price: 1.44 },
          { title: "Olives", price: 4.48 },
          { title: "Olives", price: 4.99 },
        ],
      },
      {
        title: "Pizza",
        price: 7.47,
        type: "Drink",
        itemsAddons: [
          { title: "Tomatoes", price: 2.61 },
          { title: "Mushrooms", price: 1.63, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [85.8998, 174.3927],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 8.64,
        type: "Drink",
        itemsAddons: [
          { title: "Tomatoes", price: 2.77, comment: "With extra Cheese" },
          { title: "Cheese", price: 1.7, comment: "With extra Cheese" },
          { title: "Olives", price: 3.23 },
        ],
      },
      {
        title: "Salad",
        price: 17.16,
        type: "Food",
        itemsAddons: [
          { title: "Bacon", price: 2.76, comment: "With extra Olives" },
          { title: "Tomatoes", price: 4.11 },
          { title: "Bacon", price: 1.6 },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [82.9767, 175.8375],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 17.28,
        type: "Drink",
        itemsAddons: [
          { title: "Tomatoes", price: 2.98, comment: "With extra Olives" },
          { title: "Cheese", price: 2.13 },
        ],
      },
      { title: "Salad", price: 6.54, type: "Food", itemsAddons: [{ title: "Olives", price: 1.73, comment: "With extra Cheese" }] },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [88.9203, 178.7705],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Pasta", price: 11.1, type: "Drink", itemsAddons: [{ title: "Cheese", price: 2.32 }] },
      {
        title: "Salad",
        price: 15.96,
        type: "Food",
        itemsAddons: [
          { title: "Mushrooms", price: 3.22 },
          { title: "Cheese", price: 4.31, comment: "With extra Olives" },
          { title: "Mushrooms", price: 2.25 },
        ],
      },
      {
        title: "Pizza",
        price: 18.59,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Olives", price: 1.18, comment: "With extra Cheese" },
          { title: "Olives", price: 1.64 },
        ],
      },
      { title: "Pasta", price: 15.04, type: "Food", itemsAddons: [{ title: "Tomatoes", price: 2.74, comment: "With extra Cheese" }] },
      {
        title: "Pizza",
        price: 5.4,
        type: "Food",
        itemsAddons: [
          { title: "Cheese", price: 3.72 },
          { title: "Olives", price: 3.18, comment: "With extra Olives" },
          { title: "Cheese", price: 3.24, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [83.9431, 176.1456],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 17.27,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Tomatoes", price: 3.66 },
          { title: "Bacon", price: 1.73 },
          { title: "Bacon", price: 3.88, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [82.6784, 176.2707],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Pasta", price: 17.24, type: "Food", itemsAddons: [{ title: "Cheese", price: 4.41 }] },
      {
        title: "Salad",
        price: 9.38,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Bacon", price: 1.7 },
          { title: "Mushrooms", price: 3.1, comment: "With extra Olives" },
        ],
      },
      {
        title: "Pizza",
        price: 11.95,
        type: "Food",
        itemsAddons: [
          { title: "Bacon", price: 2.1 },
          { title: "Tomatoes", price: 1.01 },
        ],
      },
      {
        title: "Salad",
        price: 8.41,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Olives", price: 2.18, comment: "With extra Cheese" },
          { title: "Cheese", price: 4.38, comment: "With extra Cheese" },
          { title: "Olives", price: 4.15 },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [83.181, 178.7391],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 7.06,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Cheese", price: 4.85, comment: "With extra Olives" }],
      },
      {
        title: "Salad",
        price: 17.49,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Olives", price: 4.3 },
          { title: "Olives", price: 3.78 },
          { title: "Cheese", price: 3.22 },
        ],
      },
      {
        title: "Pizza",
        price: 10.49,
        type: "Drink",
        itemsAddons: [
          { title: "Bacon", price: 1.76 },
          { title: "Tomatoes", price: 1.05 },
          { title: "Olives", price: 1.65, comment: "With extra Olives" },
        ],
      },
      {
        title: "Pasta",
        price: 14.81,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Tomatoes", price: 4.51, comment: "With extra Cheese" },
          { title: "Tomatoes", price: 4.14 },
          { title: "Mushrooms", price: 3.48 },
        ],
      },
      {
        title: "Pasta",
        price: 7.17,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Mushrooms", price: 3.61 },
          { title: "Mushrooms", price: 3.76, comment: "With extra Cheese" },
          { title: "Tomatoes", price: 3.99 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [87.4011, 177.8099],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 7.31,
        type: "Drink",
        itemsAddons: [
          { title: "Tomatoes", price: 4.06 },
          { title: "Bacon", price: 2.91 },
        ],
      },
      { title: "Soda", price: 7.24, type: "Drink", itemsAddons: [{ title: "Olives", price: 4.04 }] },
      {
        title: "Salad",
        price: 19.76,
        type: "Food",
        itemsAddons: [
          { title: "Olives", price: 3.02, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 3.2, comment: "With extra Cheese" },
          { title: "Bacon", price: 2.18 },
        ],
      },
      { title: "Pizza", price: 9.11, type: "Food", itemsAddons: [{ title: "Bacon", price: 2.6, comment: "With extra Cheese" }] },
      {
        title: "Soda",
        price: 13.8,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Olives", price: 1.84, comment: "With extra Olives" },
          { title: "Cheese", price: 1.18, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 4.66, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [83.8259, 178.8824],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Salad", price: 7.86, type: "Food", itemsAddons: [{ title: "Bacon", price: 4.54 }] },
      { title: "Pasta", price: 14.55, type: "Drink", itemsAddons: [{ title: "Tomatoes", price: 2.72 }] },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [80.7522, 176.7405],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Pizza", price: 19.51, type: "Drink", itemsAddons: [{ title: "Tomatoes", price: 3.84 }] },
      {
        title: "Pizza",
        price: 9.06,
        type: "Drink",
        itemsAddons: [
          { title: "Olives", price: 3.65 },
          { title: "Mushrooms", price: 3.32, comment: "With extra Olives" },
          { title: "Olives", price: 4.85, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Soda",
        price: 9.38,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Tomatoes", price: 2.12 },
          { title: "Bacon", price: 1.46 },
        ],
      },
      {
        title: "Salad",
        price: 8.31,
        type: "Drink",
        itemsAddons: [
          { title: "Tomatoes", price: 4.3, comment: "With extra Olives" },
          { title: "Olives", price: 1.53 },
          { title: "Cheese", price: 1.16, comment: "With extra Olives" },
        ],
      },
      {
        title: "Pasta",
        price: 6.52,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Cheese", price: 2.53, comment: "With extra Olives" },
          { title: "Cheese", price: 2.73, comment: "With extra Olives" },
          { title: "Cheese", price: 4.38, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [88.0842, 177.7131],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 13.15,
        type: "Food",
        itemsAddons: [
          { title: "Mushrooms", price: 4.3 },
          { title: "Olives", price: 3.06 },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [87.6364, 173.7742],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 13.76,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Olives", price: 4.76, comment: "With extra Olives" },
          { title: "Mushrooms", price: 1.86, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Pizza",
        price: 6.16,
        type: "Drink",
        itemsAddons: [
          { title: "Cheese", price: 4.16, comment: "With extra Olives" },
          { title: "Cheese", price: 4.81, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [87.742, 171.5377],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 17.13,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Tomatoes", price: 1.47, comment: "With extra Olives" },
          { title: "Tomatoes", price: 4.41 },
          { title: "Olives", price: 2.72, comment: "With extra Olives" },
        ],
      },
      {
        title: "Salad",
        price: 8.68,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Tomatoes", price: 1.58 },
          { title: "Tomatoes", price: 3.13, comment: "With extra Cheese" },
        ],
      },
      { title: "Soda", price: 19.26, type: "Food", itemsAddons: [{ title: "Tomatoes", price: 3.98 }] },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [86.4852, 170.924],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Salad", price: 18.14, type: "Food", itemsAddons: [{ title: "Mushrooms", price: 1.47 }] },
      {
        title: "Pasta",
        price: 12.34,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Cheese", price: 2.58 },
          { title: "Cheese", price: 4.13, comment: "With extra Cheese" },
          { title: "Cheese", price: 3.36 },
        ],
      },
      {
        title: "Pasta",
        price: 18.04,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Mushrooms", price: 1.09, comment: "With extra Olives" },
          { title: "Cheese", price: 1.05 },
          { title: "Bacon", price: 2.4, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [85.6197, 179.7158],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 15.88,
        type: "Drink",
        itemsAddons: [
          { title: "Tomatoes", price: 1.93 },
          { title: "Mushrooms", price: 3.25 },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [86.7311, 179.4326],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 8.79,
        type: "Drink",
        itemsAddons: [
          { title: "Mushrooms", price: 3.61 },
          { title: "Bacon", price: 2.38 },
          { title: "Tomatoes", price: 4.72 },
        ],
      },
      { title: "Salad", price: 11.85, type: "Food", itemsAddons: [{ title: "Cheese", price: 4.67, comment: "With extra Cheese" }] },
      {
        title: "Pasta",
        price: 13.33,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Olives", price: 4.42, comment: "With extra Cheese" },
          { title: "Cheese", price: 4.4 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [86.8887, 175.2413],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 10.59,
        type: "Drink",
        itemsAddons: [
          { title: "Mushrooms", price: 3.74, comment: "With extra Cheese" },
          { title: "Olives", price: 3.7, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [80.9537, 176.6646],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 11.21,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Cheese", price: 3.01 },
          { title: "Bacon", price: 3.14, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [88.3087, 172.4827],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 8.59,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Bacon", price: 2.24 },
          { title: "Tomatoes", price: 3.41 },
          { title: "Olives", price: 1.8 },
        ],
      },
      {
        title: "Pasta",
        price: 17.68,
        type: "Food",
        itemsAddons: [
          { title: "Tomatoes", price: 4.1 },
          { title: "Olives", price: 4.62 },
          { title: "Olives", price: 2.61 },
        ],
      },
      {
        title: "Salad",
        price: 15.41,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Olives", price: 2.59 },
          { title: "Bacon", price: 4.55, comment: "With extra Cheese" },
          { title: "Tomatoes", price: 4.12 },
        ],
      },
      {
        title: "Pasta",
        price: 13.77,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Cheese", price: 2.05, comment: "With extra Cheese" },
          { title: "Olives", price: 4.29, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 3.18 },
        ],
      },
      {
        title: "Pizza",
        price: 11.24,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Bacon", price: 2.9, comment: "With extra Olives" }],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [87.595, 175.4764],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 5.92,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Bacon", price: 1.9 },
          { title: "Tomatoes", price: 4.38 },
          { title: "Mushrooms", price: 4.04, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Soda",
        price: 12.12,
        type: "Drink",
        itemsAddons: [
          { title: "Olives", price: 2.81, comment: "With extra Olives" },
          { title: "Mushrooms", price: 3.28 },
          { title: "Olives", price: 3.08 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [82.5596, 172.915],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 19.44,
        type: "Drink",
        itemsAddons: [
          { title: "Tomatoes", price: 4.06, comment: "With extra Cheese" },
          { title: "Tomatoes", price: 1.61 },
          { title: "Bacon", price: 4.24 },
        ],
      },
      {
        title: "Soda",
        price: 14.18,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Mushrooms", price: 3.38, comment: "With extra Olives" },
          { title: "Cheese", price: 3.64 },
          { title: "Olives", price: 1.59 },
        ],
      },
      {
        title: "Pizza",
        price: 5.64,
        type: "Drink",
        itemsAddons: [
          { title: "Cheese", price: 2.58, comment: "With extra Olives" },
          { title: "Cheese", price: 1.5 },
          { title: "Cheese", price: 3.89, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Pizza",
        price: 8.37,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Olives", price: 2.4 },
          { title: "Olives", price: 1.04, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [80.0927, 175.8231],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 15.71,
        type: "Drink",
        itemsAddons: [
          { title: "Olives", price: 4.49, comment: "With extra Cheese" },
          { title: "Tomatoes", price: 3.84, comment: "With extra Olives" },
          { title: "Mushrooms", price: 3.68, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Pasta",
        price: 8.77,
        type: "Drink",
        itemsAddons: [
          { title: "Mushrooms", price: 1.15, comment: "With extra Olives" },
          { title: "Cheese", price: 1.63, comment: "With extra Olives" },
        ],
      },
      {
        title: "Pizza",
        price: 14.76,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Olives", price: 4.1, comment: "With extra Cheese" }],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [82.8458, 176.2089],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 6.1,
        type: "Food",
        itemsAddons: [
          { title: "Olives", price: 1.55, comment: "With extra Cheese" },
          { title: "Olives", price: 4.68 },
          { title: "Olives", price: 2.17, comment: "With extra Olives" },
        ],
      },
      {
        title: "Pizza",
        price: 17.76,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Olives", price: 4.72 },
          { title: "Bacon", price: 3.02 },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [88.7603, 171.4824],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 18.31,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Olives", price: 2.27 },
          { title: "Cheese", price: 2.2, comment: "With extra Olives" },
        ],
      },
      { title: "Soda", price: 8.13, type: "Food", itemsAddons: [{ title: "Bacon", price: 1.17, comment: "With extra Cheese" }] },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [81.3339, 174.5841],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 9.01,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Olives", price: 2.77, comment: "With extra Cheese" },
          { title: "Tomatoes", price: 1.49 },
          { title: "Olives", price: 3.48, comment: "With extra Olives" },
        ],
      },
      {
        title: "Salad",
        price: 14.63,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Mushrooms", price: 3.33, comment: "With extra Cheese" }],
      },
      {
        title: "Soda",
        price: 11.21,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Tomatoes", price: 2.35, comment: "With extra Cheese" },
          { title: "Tomatoes", price: 3.95 },
          { title: "Olives", price: 2.74, comment: "With extra Olives" },
        ],
      },
      {
        title: "Soda",
        price: 8.43,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Bacon", price: 3.67, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 2.61, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [88.1326, 177.2842],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 12.15,
        type: "Food",
        itemsAddons: [
          { title: "Tomatoes", price: 1.61, comment: "With extra Olives" },
          { title: "Tomatoes", price: 3.43 },
          { title: "Bacon", price: 1.21 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [81.2471, 177.4302],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 19.37,
        type: "Food",
        itemsAddons: [
          { title: "Olives", price: 3.9, comment: "With extra Olives" },
          { title: "Olives", price: 3.66, comment: "With extra Cheese" },
          { title: "Tomatoes", price: 4.64, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Soda",
        price: 18.4,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Tomatoes", price: 4.32, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 1.89, comment: "With extra Olives" },
          { title: "Cheese", price: 2.22, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [86.9262, 179.1363],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 15.42,
        type: "Drink",
        itemsAddons: [
          { title: "Bacon", price: 2.56 },
          { title: "Mushrooms", price: 2 },
        ],
      },
      {
        title: "Soda",
        price: 10,
        type: "Drink",
        itemsAddons: [
          { title: "Olives", price: 2.19 },
          { title: "Olives", price: 3.53, comment: "With extra Cheese" },
          { title: "Tomatoes", price: 2.47, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Soda",
        price: 14.3,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Olives", price: 3.63 },
          { title: "Mushrooms", price: 4.84, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [82.5004, 176.0187],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 13.74,
        type: "Food",
        itemsAddons: [
          { title: "Mushrooms", price: 3.57 },
          { title: "Bacon", price: 2.58, comment: "With extra Cheese" },
          { title: "Bacon", price: 1.66, comment: "With extra Olives" },
        ],
      },
      { title: "Salad", price: 19.58, type: "Food", itemsAddons: [{ title: "Tomatoes", price: 2.49 }] },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [89.1103, 175.7679],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Salad", price: 16.5, type: "Drink", comment: "Extra Cheese", itemsAddons: [{ title: "Bacon", price: 3.13 }] },
      {
        title: "Salad",
        price: 14.8,
        type: "Drink",
        itemsAddons: [
          { title: "Olives", price: 2.06, comment: "With extra Olives" },
          { title: "Bacon", price: 4.88 },
          { title: "Mushrooms", price: 4.9, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Salad",
        price: 8.05,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Tomatoes", price: 1.41, comment: "With extra Olives" }],
      },
      { title: "Salad", price: 18.66, type: "Drink", itemsAddons: [{ title: "Mushrooms", price: 4.39, comment: "With extra Olives" }] },
      {
        title: "Pasta",
        price: 7.32,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Olives", price: 1.51, comment: "With extra Cheese" },
          { title: "Tomatoes", price: 4.47 },
          { title: "Olives", price: 2.31, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [84.8076, 174.6076],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Salad", price: 5.09, type: "Food", itemsAddons: [{ title: "Tomatoes", price: 4.12 }] },
      {
        title: "Soda",
        price: 11.72,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Mushrooms", price: 1.45, comment: "With extra Olives" }],
      },
      {
        title: "Salad",
        price: 11.44,
        type: "Drink",
        itemsAddons: [
          { title: "Cheese", price: 3.59, comment: "With extra Olives" },
          { title: "Tomatoes", price: 4.61, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Soda",
        price: 12.55,
        type: "Drink",
        itemsAddons: [
          { title: "Mushrooms", price: 3.04, comment: "With extra Cheese" },
          { title: "Olives", price: 3.99 },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [81.6523, 173.5636],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 15.65,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Tomatoes", price: 4.79 },
          { title: "Cheese", price: 1.95 },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [85.0117, 172.9925],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 19.27,
        type: "Drink",
        itemsAddons: [
          { title: "Mushrooms", price: 2.6 },
          { title: "Bacon", price: 3.9, comment: "With extra Olives" },
          { title: "Bacon", price: 3.21, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Soda",
        price: 5.17,
        type: "Drink",
        itemsAddons: [
          { title: "Cheese", price: 4.63, comment: "With extra Cheese" },
          { title: "Cheese", price: 1.91, comment: "With extra Olives" },
        ],
      },
      {
        title: "Soda",
        price: 8.67,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Tomatoes", price: 3.25, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 4.82 },
          { title: "Mushrooms", price: 2.08 },
        ],
      },
      { title: "Soda", price: 14.74, type: "Drink", comment: "Extra Olives", itemsAddons: [{ title: "Bacon", price: 2.76 }] },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [87.8572, 177.1982],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 16,
        type: "Food",
        itemsAddons: [
          { title: "Tomatoes", price: 1.4 },
          { title: "Bacon", price: 3.16 },
        ],
      },
      { title: "Pasta", price: 15.42, type: "Drink", itemsAddons: [{ title: "Bacon", price: 4.31, comment: "With extra Olives" }] },
      {
        title: "Pasta",
        price: 6.91,
        type: "Drink",
        itemsAddons: [
          { title: "Olives", price: 2.68, comment: "With extra Cheese" },
          { title: "Cheese", price: 2.55 },
          { title: "Bacon", price: 1.35 },
        ],
      },
      {
        title: "Soda",
        price: 15.44,
        type: "Drink",
        itemsAddons: [
          { title: "Bacon", price: 4.37, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 3.23 },
        ],
      },
      {
        title: "Salad",
        price: 13.62,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Bacon", price: 3.75 },
          { title: "Tomatoes", price: 3.07, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [80.8596, 170.4798],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 13.67,
        type: "Drink",
        itemsAddons: [
          { title: "Olives", price: 3.33 },
          { title: "Bacon", price: 2.77, comment: "With extra Olives" },
        ],
      },
      { title: "Salad", price: 16.39, type: "Drink", itemsAddons: [{ title: "Bacon", price: 4.73, comment: "With extra Cheese" }] },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [80.3994, 172.4742],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 14.06,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Mushrooms", price: 4.23, comment: "With extra Cheese" },
          { title: "Olives", price: 2.56, comment: "With extra Olives" },
        ],
      },
      { title: "Pizza", price: 14.03, type: "Drink", comment: "Extra Olives", itemsAddons: [{ title: "Tomatoes", price: 1.15 }] },
      {
        title: "Pizza",
        price: 12.6,
        type: "Food",
        itemsAddons: [
          { title: "Tomatoes", price: 3.23 },
          { title: "Tomatoes", price: 4.25 },
        ],
      },
      {
        title: "Pasta",
        price: 15.75,
        type: "Food",
        itemsAddons: [
          { title: "Bacon", price: 4.04, comment: "With extra Olives" },
          { title: "Bacon", price: 2.58, comment: "With extra Olives" },
          { title: "Olives", price: 3.13, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [81.7134, 175.4974],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 15.83,
        type: "Drink",
        itemsAddons: [
          { title: "Cheese", price: 3.64, comment: "With extra Olives" },
          { title: "Bacon", price: 1.82, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [89.6012, 177.9375],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 10.18,
        type: "Drink",
        itemsAddons: [
          { title: "Olives", price: 4.25, comment: "With extra Olives" },
          { title: "Tomatoes", price: 4.04, comment: "With extra Olives" },
          { title: "Bacon", price: 4.52 },
        ],
      },
      { title: "Soda", price: 9, type: "Food", itemsAddons: [{ title: "Tomatoes", price: 2.7 }] },
      {
        title: "Pizza",
        price: 10.24,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Tomatoes", price: 4.84 },
          { title: "Bacon", price: 2.42, comment: "With extra Olives" },
          { title: "Mushrooms", price: 1.27 },
        ],
      },
      {
        title: "Soda",
        price: 7.86,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Olives", price: 4.9 },
          { title: "Mushrooms", price: 3.36 },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [82.6311, 174.9095],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Salad", price: 19.04, type: "Drink", itemsAddons: [{ title: "Bacon", price: 1.6, comment: "With extra Cheese" }] },
      {
        title: "Soda",
        price: 18.6,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Mushrooms", price: 1.19 },
          { title: "Tomatoes", price: 1.79 },
          { title: "Tomatoes", price: 4.14 },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [85.1303, 176.6262],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 8.08,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Olives", price: 2.52, comment: "With extra Olives" },
          { title: "Tomatoes", price: 1.13, comment: "With extra Cheese" },
          { title: "Tomatoes", price: 2.36, comment: "With extra Olives" },
        ],
      },
      { title: "Pasta", price: 18.72, type: "Drink", comment: "Extra Cheese", itemsAddons: [{ title: "Tomatoes", price: 3.09 }] },
      {
        title: "Pizza",
        price: 19.37,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Olives", price: 1.15, comment: "With extra Olives" },
          { title: "Olives", price: 1.92 },
          { title: "Tomatoes", price: 4.83, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [87.3393, 179.9827],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Salad", price: 13.42, type: "Food", itemsAddons: [{ title: "Cheese", price: 3.59 }] },
      {
        title: "Soda",
        price: 11.5,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Olives", price: 2.85 },
          { title: "Bacon", price: 4.44 },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [82.0293, 170.9133],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 17.53,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Cheese", price: 3.23 },
          { title: "Mushrooms", price: 2.59, comment: "With extra Olives" },
        ],
      },
      { title: "Pizza", price: 17.81, type: "Drink", comment: "Extra Olives", itemsAddons: [{ title: "Bacon", price: 4.85 }] },
    ],
  },

  {
    title: "Order for Doe",
    status: "Received",

    location: [86.5437, 170.413],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 6.95,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Mushrooms", price: 4.09 },
          { title: "Tomatoes", price: 4.05 },
          { title: "Cheese", price: 3.94, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Pizza",
        price: 9.29,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Bacon", price: 3.99, comment: "With extra Cheese" }],
      },
      {
        title: "Pizza",
        price: 17.59,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Mushrooms", price: 1.37, comment: "With extra Cheese" },
          { title: "Cheese", price: 3.85 },
        ],
      },
      {
        title: "Soda",
        price: 6.03,
        type: "Drink",
        itemsAddons: [
          { title: "Bacon", price: 4.05, comment: "With extra Cheese" },
          { title: "Olives", price: 4.26 },
          { title: "Mushrooms", price: 2.92 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [83.0061, 171.2808],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Pizza", price: 7.91, type: "Food", itemsAddons: [{ title: "Cheese", price: 2.31 }] },
      {
        title: "Salad",
        price: 14.63,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Mushrooms", price: 3.66, comment: "With extra Olives" },
          { title: "Olives", price: 3.75 },
        ],
      },
      {
        title: "Pasta",
        price: 12.67,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Bacon", price: 3.69, comment: "With extra Olives" }],
      },
      { title: "Pasta", price: 5.63, type: "Drink", itemsAddons: [{ title: "Tomatoes", price: 1.09 }] },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [81.9351, 175.5689],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Pasta", price: 11.38, type: "Food", comment: "Extra Olives", itemsAddons: [{ title: "Olives", price: 3.17 }] },
      {
        title: "Pasta",
        price: 17.59,
        type: "Food",
        itemsAddons: [
          { title: "Mushrooms", price: 3.94, comment: "With extra Olives" },
          { title: "Olives", price: 1.77, comment: "With extra Cheese" },
          { title: "Bacon", price: 4.73, comment: "With extra Olives" },
        ],
      },
      { title: "Soda", price: 9.75, type: "Food", itemsAddons: [{ title: "Tomatoes", price: 3.23, comment: "With extra Olives" }] },
      {
        title: "Pizza",
        price: 9.13,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Cheese", price: 2.03, comment: "With extra Olives" }],
      },
      { title: "Soda", price: 10.04, type: "Food", itemsAddons: [{ title: "Tomatoes", price: 4.42, comment: "With extra Cheese" }] },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [87.7956, 173.106],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Soda", price: 7.51, type: "Food", comment: "Extra Olives", itemsAddons: [{ title: "Olives", price: 2.17 }] },
      {
        title: "Salad",
        price: 19.39,
        type: "Drink",
        itemsAddons: [
          { title: "Cheese", price: 2.76 },
          { title: "Bacon", price: 1.65, comment: "With extra Olives" },
          { title: "Olives", price: 1.8 },
        ],
      },
      {
        title: "Salad",
        price: 18.61,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Cheese", price: 3.86, comment: "With extra Olives" }],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [89.904, 177.8846],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 19.38,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Bacon", price: 2.39, comment: "With extra Cheese" },
          { title: "Bacon", price: 2.02 },
        ],
      },
      {
        title: "Pizza",
        price: 8.88,
        type: "Drink",
        itemsAddons: [
          { title: "Mushrooms", price: 2.98, comment: "With extra Olives" },
          { title: "Tomatoes", price: 2.91, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 3.03 },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [82.6757, 173.0323],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 11.98,
        type: "Food",
        itemsAddons: [
          { title: "Olives", price: 2.37 },
          { title: "Cheese", price: 1.88 },
        ],
      },
      {
        title: "Salad",
        price: 18.25,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Mushrooms", price: 4.27, comment: "With extra Olives" }],
      },
      { title: "Pasta", price: 10.15, type: "Food", itemsAddons: [{ title: "Tomatoes", price: 5 }] },
      {
        title: "Pizza",
        price: 16.91,
        type: "Food",
        itemsAddons: [
          { title: "Cheese", price: 4.18, comment: "With extra Cheese" },
          { title: "Olives", price: 1.12 },
          { title: "Cheese", price: 2.74 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [86.1328, 179.7547],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 13.74,
        type: "Food",
        itemsAddons: [
          { title: "Cheese", price: 3.01, comment: "With extra Cheese" },
          { title: "Tomatoes", price: 2.06 },
        ],
      },
      {
        title: "Pasta",
        price: 14.3,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [{ title: "Tomatoes", price: 3.02, comment: "With extra Olives" }],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [82.825, 172.9853],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Pizza", price: 5.54, type: "Food", itemsAddons: [{ title: "Cheese", price: 2.34, comment: "With extra Cheese" }] },
      {
        title: "Soda",
        price: 8.11,
        type: "Drink",
        itemsAddons: [
          { title: "Mushrooms", price: 3.33 },
          { title: "Cheese", price: 2.85, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Salad",
        price: 10.42,
        type: "Food",
        itemsAddons: [
          { title: "Tomatoes", price: 4.67, comment: "With extra Olives" },
          { title: "Olives", price: 2.68, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [84.4886, 175.5109],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 15.21,
        type: "Food",
        itemsAddons: [
          { title: "Tomatoes", price: 4.23 },
          { title: "Cheese", price: 3.65, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [80.3481, 176.7628],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 8.9,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Bacon", price: 3.02, comment: "With extra Olives" }],
      },
      {
        title: "Pizza",
        price: 19.92,
        type: "Drink",
        itemsAddons: [
          { title: "Tomatoes", price: 1.09 },
          { title: "Olives", price: 4.16 },
          { title: "Mushrooms", price: 2.19 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [87.1553, 170.9668],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Soda", price: 5.55, type: "Drink", itemsAddons: [{ title: "Mushrooms", price: 3.23 }] },
      { title: "Pasta", price: 12.6, type: "Food", comment: "Extra Cheese", itemsAddons: [{ title: "Mushrooms", price: 1.88 }] },
      { title: "Pasta", price: 9.95, type: "Food", itemsAddons: [{ title: "Cheese", price: 4.62, comment: "With extra Cheese" }] },
      {
        title: "Soda",
        price: 13.89,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [{ title: "Cheese", price: 2.94, comment: "With extra Cheese" }],
      },
      {
        title: "Pasta",
        price: 9.9,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Mushrooms", price: 4.97 },
          { title: "Tomatoes", price: 2.71 },
          { title: "Mushrooms", price: 3.64, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [88.1128, 179.7048],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 10.67,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Tomatoes", price: 4.24, comment: "With extra Olives" }],
      },
      { title: "Pasta", price: 16.61, type: "Drink", comment: "Extra Cheese", itemsAddons: [{ title: "Bacon", price: 1.42 }] },
      {
        title: "Salad",
        price: 9.49,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Bacon", price: 1.61 },
          { title: "Bacon", price: 3.5 },
          { title: "Olives", price: 3.98 },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [83.0732, 173.4268],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 8.81,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Cheese", price: 1.68 },
          { title: "Tomatoes", price: 1.57 },
        ],
      },
      { title: "Salad", price: 11.67, type: "Drink", itemsAddons: [{ title: "Cheese", price: 1.24, comment: "With extra Olives" }] },
      { title: "Soda", price: 5.57, type: "Drink", itemsAddons: [{ title: "Tomatoes", price: 4.43, comment: "With extra Olives" }] },
      {
        title: "Soda",
        price: 11.17,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Tomatoes", price: 4.57, comment: "With extra Olives" },
          { title: "Mushrooms", price: 2.65, comment: "With extra Cheese" },
          { title: "Bacon", price: 1.17 },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [80.0342, 171.4804],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Pasta", price: 19.04, type: "Drink", itemsAddons: [{ title: "Mushrooms", price: 1.05 }] },
      {
        title: "Pasta",
        price: 10.96,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Cheese", price: 2.16, comment: "With extra Olives" }],
      },
      {
        title: "Soda",
        price: 6.51,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Cheese", price: 3.11 },
          { title: "Mushrooms", price: 2.78, comment: "With extra Cheese" },
          { title: "Cheese", price: 1.7, comment: "With extra Olives" },
        ],
      },
      { title: "Pasta", price: 11.47, type: "Drink", itemsAddons: [{ title: "Cheese", price: 3.67 }] },
      {
        title: "Soda",
        price: 12.87,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Bacon", price: 1.22 },
          { title: "Bacon", price: 4.2 },
          { title: "Mushrooms", price: 2.88 },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [83.4902, 175.5901],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 9.47,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Mushrooms", price: 3.54, comment: "With extra Cheese" },
          { title: "Cheese", price: 1.41, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Pasta",
        price: 12.93,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Mushrooms", price: 4.26, comment: "With extra Olives" }],
      },
      { title: "Soda", price: 6.31, type: "Food", comment: "Extra Cheese", itemsAddons: [{ title: "Tomatoes", price: 2.24 }] },
      {
        title: "Soda",
        price: 16.46,
        type: "Drink",
        itemsAddons: [
          { title: "Cheese", price: 1.47, comment: "With extra Cheese" },
          { title: "Bacon", price: 4.22 },
          { title: "Cheese", price: 2.64, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Salad",
        price: 10.57,
        type: "Food",
        itemsAddons: [
          { title: "Tomatoes", price: 4.39, comment: "With extra Olives" },
          { title: "Bacon", price: 2.12, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [83.0629, 171.094],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 11.9,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [{ title: "Mushrooms", price: 4.56, comment: "With extra Olives" }],
      },
      { title: "Pizza", price: 15.46, type: "Drink", itemsAddons: [{ title: "Olives", price: 2.46, comment: "With extra Olives" }] },
      { title: "Salad", price: 16.52, type: "Food", comment: "Extra Cheese", itemsAddons: [{ title: "Mushrooms", price: 3.15 }] },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [83.6092, 177.943],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 9,
        type: "Food",
        itemsAddons: [
          { title: "Cheese", price: 1.09, comment: "With extra Olives" },
          { title: "Tomatoes", price: 3.62, comment: "With extra Olives" },
        ],
      },
      {
        title: "Pizza",
        price: 19.01,
        type: "Drink",
        itemsAddons: [
          { title: "Cheese", price: 4.97, comment: "With extra Olives" },
          { title: "Tomatoes", price: 4.43 },
        ],
      },
      { title: "Pasta", price: 6.42, type: "Food", comment: "Extra Cheese", itemsAddons: [{ title: "Bacon", price: 3.22 }] },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [80.2428, 174.5888],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 8.78,
        type: "Drink",
        itemsAddons: [
          { title: "Tomatoes", price: 2.43, comment: "With extra Cheese" },
          { title: "Bacon", price: 4.34, comment: "With extra Olives" },
        ],
      },
      {
        title: "Pasta",
        price: 16.41,
        type: "Drink",
        itemsAddons: [
          { title: "Olives", price: 3.52 },
          { title: "Olives", price: 4.16, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Soda",
        price: 13.09,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Mushrooms", price: 4.39 },
          { title: "Mushrooms", price: 2.36, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [86.739, 178.1166],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Pizza", price: 16.21, type: "Food", comment: "Extra Olives", itemsAddons: [{ title: "Bacon", price: 1.19 }] },
      { title: "Pizza", price: 13.51, type: "Food", comment: "Extra Cheese", itemsAddons: [{ title: "Olives", price: 3.99 }] },
      { title: "Soda", price: 12.88, type: "Food", itemsAddons: [{ title: "Tomatoes", price: 4.29, comment: "With extra Olives" }] },
      {
        title: "Soda",
        price: 10.61,
        type: "Food",
        itemsAddons: [
          { title: "Cheese", price: 2.37 },
          { title: "Bacon", price: 4.8, comment: "With extra Olives" },
        ],
      },
      {
        title: "Salad",
        price: 18.43,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Olives", price: 4.47, comment: "With extra Cheese" }],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [88.592, 175.8651],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 10.63,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Bacon", price: 4.68 },
          { title: "Tomatoes", price: 1.58 },
          { title: "Cheese", price: 2.76 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [84.1786, 174.3216],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 5.68,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Olives", price: 1.64, comment: "With extra Olives" },
          { title: "Bacon", price: 3.06 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [89.9714, 179.7616],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 9.07,
        type: "Drink",
        itemsAddons: [
          { title: "Olives", price: 4.48 },
          { title: "Tomatoes", price: 2.41 },
        ],
      },
      {
        title: "Pizza",
        price: 5.9,
        type: "Drink",
        itemsAddons: [
          { title: "Cheese", price: 4.53 },
          { title: "Mushrooms", price: 2.13, comment: "With extra Olives" },
        ],
      },
      { title: "Soda", price: 15.87, type: "Drink", itemsAddons: [{ title: "Mushrooms", price: 2.27 }] },
      {
        title: "Pasta",
        price: 13.07,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Mushrooms", price: 3.94 },
          { title: "Olives", price: 2.52, comment: "With extra Cheese" },
          { title: "Cheese", price: 1.31, comment: "With extra Cheese" },
        ],
      },
      { title: "Salad", price: 15.62, type: "Drink", itemsAddons: [{ title: "Cheese", price: 4.78, comment: "With extra Cheese" }] },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [89.1319, 179.3473],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 11.36,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Cheese", price: 3.25 },
          { title: "Bacon", price: 1.05 },
          { title: "Mushrooms", price: 3.98, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [89.8553, 175.896],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 6.23,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Bacon", price: 3.63 },
          { title: "Olives", price: 2.98, comment: "With extra Cheese" },
          { title: "Olives", price: 3.67, comment: "With extra Olives" },
        ],
      },
      {
        title: "Soda",
        price: 19.83,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Bacon", price: 3.33, comment: "With extra Cheese" }],
      },
      { title: "Pasta", price: 5.4, type: "Food", comment: "Extra Cheese", itemsAddons: [{ title: "Tomatoes", price: 2.62 }] },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [82.3215, 177.8563],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Soda", price: 17.44, type: "Drink", itemsAddons: [{ title: "Cheese", price: 3.76, comment: "With extra Cheese" }] },
      {
        title: "Pasta",
        price: 19.04,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Tomatoes", price: 4.37, comment: "With extra Cheese" },
          { title: "Olives", price: 3.72 },
          { title: "Tomatoes", price: 2.54 },
        ],
      },
      {
        title: "Soda",
        price: 14.88,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Cheese", price: 4.47 },
          { title: "Tomatoes", price: 2.73, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Salad",
        price: 19.09,
        type: "Drink",
        itemsAddons: [
          { title: "Cheese", price: 2.84, comment: "With extra Cheese" },
          { title: "Cheese", price: 1.63 },
          { title: "Cheese", price: 4.63, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [80.9425, 176.9702],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 16.22,
        type: "Food",
        itemsAddons: [
          { title: "Mushrooms", price: 2.53, comment: "With extra Cheese" },
          { title: "Olives", price: 2.04 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [80.9789, 174.9278],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 17.25,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Bacon", price: 3.22, comment: "With extra Olives" },
          { title: "Mushrooms", price: 1.9 },
        ],
      },
      { title: "Soda", price: 13.65, type: "Drink", itemsAddons: [{ title: "Olives", price: 1.66, comment: "With extra Cheese" }] },
      {
        title: "Pizza",
        price: 13.15,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Cheese", price: 3.81 },
          { title: "Olives", price: 2.4, comment: "With extra Olives" },
          { title: "Olives", price: 1.13, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Pasta",
        price: 17.76,
        type: "Drink",
        itemsAddons: [
          { title: "Cheese", price: 2.72 },
          { title: "Bacon", price: 2.54 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [85.7909, 176.0323],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 19.96,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Cheese", price: 3.89, comment: "With extra Cheese" },
          { title: "Tomatoes", price: 3.04 },
          { title: "Cheese", price: 1.43, comment: "With extra Olives" },
        ],
      },
      {
        title: "Salad",
        price: 19.72,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Mushrooms", price: 2.78, comment: "With extra Olives" },
          { title: "Olives", price: 3.16, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Pizza",
        price: 7.98,
        type: "Food",
        itemsAddons: [
          { title: "Olives", price: 3.12 },
          { title: "Olives", price: 1.88, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Salad",
        price: 13.82,
        type: "Food",
        itemsAddons: [
          { title: "Olives", price: 4.95, comment: "With extra Cheese" },
          { title: "Olives", price: 4.1, comment: "With extra Olives" },
        ],
      },
      {
        title: "Pasta",
        price: 13.9,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Tomatoes", price: 2.44, comment: "With extra Cheese" },
          { title: "Bacon", price: 3.34, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [84.1673, 170.1849],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 16.06,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Olives", price: 4.42 },
          { title: "Olives", price: 4.03 },
        ],
      },
      {
        title: "Soda",
        price: 5.48,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Olives", price: 4.56 },
          { title: "Bacon", price: 4.12, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Soda",
        price: 5.8,
        type: "Food",
        itemsAddons: [
          { title: "Olives", price: 1.75, comment: "With extra Olives" },
          { title: "Tomatoes", price: 2.35, comment: "With extra Olives" },
          { title: "Tomatoes", price: 2.95, comment: "With extra Olives" },
        ],
      },
      {
        title: "Soda",
        price: 19.71,
        type: "Drink",
        itemsAddons: [
          { title: "Cheese", price: 1.51 },
          { title: "Bacon", price: 4.88, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [89.859, 176.2185],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 9.36,
        type: "Drink",
        itemsAddons: [
          { title: "Olives", price: 4.85, comment: "With extra Cheese" },
          { title: "Tomatoes", price: 2.99 },
          { title: "Bacon", price: 2.65, comment: "With extra Olives" },
        ],
      },
      {
        title: "Pasta",
        price: 7.35,
        type: "Food",
        itemsAddons: [
          { title: "Olives", price: 1.69, comment: "With extra Olives" },
          { title: "Tomatoes", price: 1.27, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 4.44, comment: "With extra Olives" },
        ],
      },
      {
        title: "Soda",
        price: 17.99,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Bacon", price: 3.09, comment: "With extra Cheese" },
          { title: "Tomatoes", price: 2.65 },
          { title: "Olives", price: 3.29, comment: "With extra Cheese" },
        ],
      },
      { title: "Pasta", price: 14.36, type: "Food", itemsAddons: [{ title: "Cheese", price: 4.75 }] },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [81.4115, 179.7204],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 5.7,
        type: "Food",
        itemsAddons: [
          { title: "Mushrooms", price: 2.79, comment: "With extra Olives" },
          { title: "Cheese", price: 4.08 },
          { title: "Bacon", price: 1.41 },
        ],
      },
      {
        title: "Pasta",
        price: 6.64,
        type: "Food",
        itemsAddons: [
          { title: "Mushrooms", price: 2.31 },
          { title: "Olives", price: 1.38 },
          { title: "Cheese", price: 3.61, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [86.1289, 173.6157],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 6.29,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Cheese", price: 3.7, comment: "With extra Cheese" },
          { title: "Cheese", price: 4.74 },
          { title: "Tomatoes", price: 1.89, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Soda",
        price: 13.89,
        type: "Drink",
        itemsAddons: [
          { title: "Olives", price: 3.52 },
          { title: "Mushrooms", price: 3.66 },
          { title: "Olives", price: 1.49, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Pizza",
        price: 7.22,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Tomatoes", price: 2.47, comment: "With extra Olives" }],
      },
      {
        title: "Pasta",
        price: 17.58,
        type: "Drink",
        itemsAddons: [
          { title: "Mushrooms", price: 4.4, comment: "With extra Cheese" },
          { title: "Cheese", price: 1.88, comment: "With extra Cheese" },
          { title: "Bacon", price: 4.58, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Salad",
        price: 14.5,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Mushrooms", price: 1.24, comment: "With extra Olives" },
          { title: "Bacon", price: 3.94 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [82.6437, 174.6659],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 14.8,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Cheese", price: 2.99, comment: "With extra Cheese" },
          { title: "Bacon", price: 3.53 },
          { title: "Tomatoes", price: 3.28, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Soda",
        price: 12.42,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Mushrooms", price: 1.67 },
          { title: "Mushrooms", price: 2.87, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Pasta",
        price: 16.81,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Cheese", price: 1.76, comment: "With extra Olives" }],
      },
      { title: "Pizza", price: 6.55, type: "Food", comment: "Extra Olives", itemsAddons: [{ title: "Tomatoes", price: 4.49 }] },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [83.5335, 177.6433],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 11.28,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Olives", price: 4.09, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 1.09 },
        ],
      },
      {
        title: "Pasta",
        price: 18.82,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Bacon", price: 2.93 },
          { title: "Mushrooms", price: 3.48 },
        ],
      },
      { title: "Soda", price: 8.22, type: "Drink", itemsAddons: [{ title: "Tomatoes", price: 4.52 }] },
      {
        title: "Pizza",
        price: 14.64,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Olives", price: 3.42 },
          { title: "Mushrooms", price: 2.4, comment: "With extra Olives" },
        ],
      },
      {
        title: "Pasta",
        price: 5.65,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Bacon", price: 3.77, comment: "With extra Olives" },
          { title: "Bacon", price: 2.24, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [88.6305, 171.0962],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 16.24,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Olives", price: 1.27 },
          { title: "Tomatoes", price: 4.42 },
          { title: "Mushrooms", price: 4.9 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [88.9994, 177.7636],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 16.18,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Cheese", price: 4.64, comment: "With extra Cheese" },
          { title: "Tomatoes", price: 2.07, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Pizza",
        price: 12.1,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Bacon", price: 3.39, comment: "With extra Olives" },
          { title: "Cheese", price: 3.76, comment: "With extra Cheese" },
          { title: "Tomatoes", price: 2.63 },
        ],
      },
      { title: "Soda", price: 11.23, type: "Drink", itemsAddons: [{ title: "Olives", price: 4.38, comment: "With extra Cheese" }] },
      {
        title: "Soda",
        price: 7.19,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Cheese", price: 2.52 },
          { title: "Olives", price: 3.37, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [80.0028, 170.9218],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 5.31,
        type: "Drink",
        itemsAddons: [
          { title: "Mushrooms", price: 3.03, comment: "With extra Cheese" },
          { title: "Tomatoes", price: 4.8, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Salad",
        price: 17.77,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Tomatoes", price: 3.54, comment: "With extra Olives" },
          { title: "Tomatoes", price: 3.54, comment: "With extra Olives" },
        ],
      },
      { title: "Pizza", price: 14.19, type: "Drink", itemsAddons: [{ title: "Olives", price: 2.08 }] },
      {
        title: "Pizza",
        price: 18,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Mushrooms", price: 1.25 },
          { title: "Cheese", price: 1.34, comment: "With extra Olives" },
        ],
      },
      { title: "Pizza", price: 11.58, type: "Drink", itemsAddons: [{ title: "Olives", price: 4.71 }] },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [85.124, 179.1732],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 14.68,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Cheese", price: 1.97, comment: "With extra Cheese" },
          { title: "Olives", price: 1.42 },
        ],
      },
      {
        title: "Salad",
        price: 16.54,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Tomatoes", price: 3.27, comment: "With extra Cheese" },
          { title: "Tomatoes", price: 1.87, comment: "With extra Olives" },
          { title: "Tomatoes", price: 3.09, comment: "With extra Cheese" },
        ],
      },
      { title: "Soda", price: 17.75, type: "Drink", comment: "Extra Olives", itemsAddons: [{ title: "Olives", price: 4.9 }] },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [85.1666, 177.8436],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 18.35,
        type: "Food",
        itemsAddons: [
          { title: "Olives", price: 1.29, comment: "With extra Cheese" },
          { title: "Cheese", price: 1.34 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [83.5068, 179.6396],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 9.57,
        type: "Food",
        itemsAddons: [
          { title: "Tomatoes", price: 2.6 },
          { title: "Mushrooms", price: 1.47 },
        ],
      },
      {
        title: "Pasta",
        price: 9.4,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Cheese", price: 1.48 },
          { title: "Cheese", price: 4.43 },
          { title: "Cheese", price: 3.07 },
        ],
      },
      {
        title: "Soda",
        price: 9.5,
        type: "Food",
        itemsAddons: [
          { title: "Bacon", price: 3.28 },
          { title: "Mushrooms", price: 3.75, comment: "With extra Cheese" },
          { title: "Tomatoes", price: 4.09 },
        ],
      },
      { title: "Salad", price: 10.52, type: "Food", itemsAddons: [{ title: "Tomatoes", price: 3.76, comment: "With extra Cheese" }] },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [82.0403, 179.3655],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Soda", price: 16.9, type: "Food", itemsAddons: [{ title: "Olives", price: 2.21, comment: "With extra Cheese" }] },
      {
        title: "Pasta",
        price: 5.41,
        type: "Food",
        itemsAddons: [
          { title: "Cheese", price: 1.87 },
          { title: "Mushrooms", price: 1.93 },
        ],
      },
      {
        title: "Pizza",
        price: 10.25,
        type: "Drink",
        itemsAddons: [
          { title: "Cheese", price: 3.64 },
          { title: "Bacon", price: 2.41 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [88.3218, 172.3369],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 10.73,
        type: "Food",
        itemsAddons: [
          { title: "Bacon", price: 3.62 },
          { title: "Mushrooms", price: 1.4, comment: "With extra Cheese" },
          { title: "Cheese", price: 2.68, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Pizza",
        price: 6.37,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Bacon", price: 2.03, comment: "With extra Olives" }],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [81.5892, 179.6939],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 17.45,
        type: "Drink",
        itemsAddons: [
          { title: "Cheese", price: 4.58, comment: "With extra Olives" },
          { title: "Olives", price: 3.74, comment: "With extra Olives" },
          { title: "Cheese", price: 1.65 },
        ],
      },
      { title: "Pasta", price: 14.05, type: "Drink", comment: "Extra Cheese", itemsAddons: [{ title: "Tomatoes", price: 2.81 }] },
      { title: "Pasta", price: 15.78, type: "Food", comment: "Extra Olives", itemsAddons: [{ title: "Bacon", price: 2.26 }] },
      {
        title: "Salad",
        price: 9.54,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Tomatoes", price: 2.57, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 2.82 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [89.8093, 172.5819],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 14.57,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Olives", price: 3.46 },
          { title: "Mushrooms", price: 3.18, comment: "With extra Olives" },
          { title: "Cheese", price: 4.43, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [88.656, 172.7304],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 12.58,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [{ title: "Bacon", price: 4.59, comment: "With extra Olives" }],
      },
      {
        title: "Pasta",
        price: 13.49,
        type: "Food",
        itemsAddons: [
          { title: "Cheese", price: 4.14 },
          { title: "Bacon", price: 4.28 },
          { title: "Bacon", price: 4.72 },
        ],
      },
      {
        title: "Pizza",
        price: 11.25,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Tomatoes", price: 3.94, comment: "With extra Cheese" },
          { title: "Bacon", price: 4.42 },
          { title: "Bacon", price: 3.15 },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [89.2541, 171.385],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 5.06,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Mushrooms", price: 3.55 },
          { title: "Bacon", price: 1.28, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Salad",
        price: 5.48,
        type: "Drink",
        itemsAddons: [
          { title: "Tomatoes", price: 2.94, comment: "With extra Cheese" },
          { title: "Tomatoes", price: 4.16, comment: "With extra Olives" },
        ],
      },
      {
        title: "Salad",
        price: 10.67,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Cheese", price: 2.1, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 1.46 },
        ],
      },
      {
        title: "Soda",
        price: 7.34,
        type: "Food",
        itemsAddons: [
          { title: "Olives", price: 2.11, comment: "With extra Olives" },
          { title: "Olives", price: 4.1 },
        ],
      },
      { title: "Pasta", price: 14.71, type: "Food", itemsAddons: [{ title: "Tomatoes", price: 1.4 }] },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [85.625, 178.8448],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [{ title: "Pasta", price: 14.84, type: "Food", itemsAddons: [{ title: "Tomatoes", price: 3.6, comment: "With extra Cheese" }] }],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [84.0513, 178.5327],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 15.98,
        type: "Drink",
        itemsAddons: [
          { title: "Mushrooms", price: 2.1, comment: "With extra Olives" },
          { title: "Bacon", price: 4.15, comment: "With extra Olives" },
        ],
      },
      {
        title: "Pizza",
        price: 15.05,
        type: "Food",
        itemsAddons: [
          { title: "Olives", price: 3.98 },
          { title: "Mushrooms", price: 2.78 },
          { title: "Bacon", price: 4.07 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [86.5763, 170.3187],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Pizza", price: 8.4, type: "Food", comment: "Extra Cheese", itemsAddons: [{ title: "Tomatoes", price: 3.92 }] },
      {
        title: "Pasta",
        price: 18.7,
        type: "Food",
        itemsAddons: [
          { title: "Cheese", price: 3.65 },
          { title: "Tomatoes", price: 2.11 },
        ],
      },
      {
        title: "Pasta",
        price: 12.85,
        type: "Food",
        itemsAddons: [
          { title: "Mushrooms", price: 4.61 },
          { title: "Mushrooms", price: 3.61 },
        ],
      },
      {
        title: "Salad",
        price: 11.81,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Mushrooms", price: 4.99 },
          { title: "Olives", price: 1.8, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [88.6944, 177.3093],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 10.51,
        type: "Food",
        itemsAddons: [
          { title: "Cheese", price: 1.18, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 1.28, comment: "With extra Olives" },
        ],
      },
      {
        title: "Salad",
        price: 9.85,
        type: "Food",
        itemsAddons: [
          { title: "Olives", price: 4.72 },
          { title: "Bacon", price: 4.14, comment: "With extra Olives" },
        ],
      },
      {
        title: "Soda",
        price: 19.92,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Cheese", price: 1.89, comment: "With extra Cheese" },
          { title: "Bacon", price: 2.49 },
        ],
      },
      {
        title: "Salad",
        price: 7.65,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Olives", price: 2.48, comment: "With extra Olives" },
          { title: "Cheese", price: 4.99, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [81.4394, 174.4197],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 16.3,
        type: "Drink",
        itemsAddons: [
          { title: "Olives", price: 1.47, comment: "With extra Olives" },
          { title: "Cheese", price: 1.37 },
        ],
      },
      {
        title: "Soda",
        price: 8.72,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Cheese", price: 3.54 },
          { title: "Mushrooms", price: 3.21, comment: "With extra Olives" },
        ],
      },
      {
        title: "Pizza",
        price: 10.88,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Bacon", price: 1.91 },
          { title: "Olives", price: 2.37, comment: "With extra Cheese" },
          { title: "Olives", price: 4.57 },
        ],
      },
      {
        title: "Soda",
        price: 8.38,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [{ title: "Olives", price: 3.26, comment: "With extra Olives" }],
      },
      {
        title: "Salad",
        price: 9.31,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [{ title: "Bacon", price: 4.4, comment: "With extra Cheese" }],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [88.0939, 172.5269],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 9.58,
        type: "Drink",
        itemsAddons: [
          { title: "Mushrooms", price: 2.47, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 3.81 },
        ],
      },
      {
        title: "Salad",
        price: 18.23,
        type: "Drink",
        itemsAddons: [
          { title: "Bacon", price: 2.68 },
          { title: "Cheese", price: 3.82, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [80.1081, 179.6837],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 7.61,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Tomatoes", price: 4.79, comment: "With extra Cheese" },
          { title: "Bacon", price: 3.44 },
          { title: "Bacon", price: 3.23 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [84.3205, 172.2616],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [{ title: "Soda", price: 19.03, type: "Food", itemsAddons: [{ title: "Olives", price: 1.21 }] }],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [82.7951, 174.0858],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 11.2,
        type: "Food",
        itemsAddons: [
          { title: "Mushrooms", price: 3.99 },
          { title: "Mushrooms", price: 1.68 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [80.1518, 172.5004],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 13.81,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Mushrooms", price: 3.72, comment: "With extra Cheese" },
          { title: "Bacon", price: 2.04 },
          { title: "Mushrooms", price: 4.87, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [83.076, 176.8468],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Pizza", price: 6.98, type: "Food", itemsAddons: [{ title: "Tomatoes", price: 4.32 }] },
      {
        title: "Pizza",
        price: 16.98,
        type: "Food",
        itemsAddons: [
          { title: "Mushrooms", price: 2.47, comment: "With extra Olives" },
          { title: "Bacon", price: 3.43, comment: "With extra Olives" },
          { title: "Mushrooms", price: 2.83, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Pizza",
        price: 6.54,
        type: "Drink",
        itemsAddons: [
          { title: "Olives", price: 3.5, comment: "With extra Cheese" },
          { title: "Bacon", price: 4.7, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Pizza",
        price: 6.16,
        type: "Food",
        itemsAddons: [
          { title: "Cheese", price: 3.33, comment: "With extra Cheese" },
          { title: "Tomatoes", price: 2.82, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 2.88, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [82.4778, 179.4663],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 13.97,
        type: "Drink",
        itemsAddons: [
          { title: "Mushrooms", price: 3.87 },
          { title: "Mushrooms", price: 2.25, comment: "With extra Olives" },
        ],
      },
      {
        title: "Soda",
        price: 8.36,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Mushrooms", price: 3.31 },
          { title: "Bacon", price: 4.8 },
        ],
      },
      { title: "Pizza", price: 18.53, type: "Food", itemsAddons: [{ title: "Cheese", price: 4.78 }] },
      {
        title: "Pizza",
        price: 7.34,
        type: "Food",
        itemsAddons: [
          { title: "Bacon", price: 2.3 },
          { title: "Cheese", price: 3.01, comment: "With extra Olives" },
          { title: "Bacon", price: 3.74 },
        ],
      },
      {
        title: "Salad",
        price: 5.4,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Cheese", price: 3.72 },
          { title: "Mushrooms", price: 3.61, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 1.32 },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [88.0557, 171.3616],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Pizza", price: 19.8, type: "Food", itemsAddons: [{ title: "Tomatoes", price: 3.61 }] },
      {
        title: "Soda",
        price: 10.86,
        type: "Drink",
        itemsAddons: [
          { title: "Cheese", price: 4.85, comment: "With extra Olives" },
          { title: "Tomatoes", price: 3.43, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Pasta",
        price: 8.11,
        type: "Drink",
        itemsAddons: [
          { title: "Cheese", price: 1.83, comment: "With extra Cheese" },
          { title: "Cheese", price: 1.49 },
          { title: "Mushrooms", price: 4.22, comment: "With extra Olives" },
        ],
      },
      {
        title: "Salad",
        price: 11.11,
        type: "Drink",
        itemsAddons: [
          { title: "Bacon", price: 3.63 },
          { title: "Cheese", price: 3.71, comment: "With extra Olives" },
        ],
      },
      {
        title: "Salad",
        price: 17.66,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Tomatoes", price: 1.11 },
          { title: "Mushrooms", price: 3.52, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [88.7652, 170.417],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 8.39,
        type: "Drink",
        itemsAddons: [
          { title: "Mushrooms", price: 2.96, comment: "With extra Cheese" },
          { title: "Bacon", price: 4.42 },
          { title: "Cheese", price: 3.94, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Pizza",
        price: 10.25,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Olives", price: 3.3 },
          { title: "Mushrooms", price: 1.91 },
        ],
      },
      {
        title: "Soda",
        price: 11.15,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Cheese", price: 4.77 },
          { title: "Mushrooms", price: 3.85 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [84.1678, 173.0828],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 17.66,
        type: "Food",
        itemsAddons: [
          { title: "Bacon", price: 3.35 },
          { title: "Olives", price: 2.4, comment: "With extra Olives" },
          { title: "Mushrooms", price: 3.76 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [86.6763, 173.546],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Salad", price: 11.72, type: "Drink", itemsAddons: [{ title: "Mushrooms", price: 2.38, comment: "With extra Cheese" }] },
      {
        title: "Pizza",
        price: 7.35,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Mushrooms", price: 4.45 },
          { title: "Bacon", price: 4.27 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [85.1736, 175.0128],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 19.95,
        type: "Drink",
        itemsAddons: [
          { title: "Olives", price: 4.73, comment: "With extra Olives" },
          { title: "Bacon", price: 3.03, comment: "With extra Cheese" },
        ],
      },
      { title: "Pizza", price: 14.13, type: "Drink", comment: "Extra Olives", itemsAddons: [{ title: "Olives", price: 1.68 }] },
      {
        title: "Salad",
        price: 11.95,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Olives", price: 1.85, comment: "With extra Olives" },
          { title: "Cheese", price: 4.13, comment: "With extra Cheese" },
          { title: "Bacon", price: 2.49, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Salad",
        price: 11.86,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Olives", price: 4.89, comment: "With extra Cheese" },
          { title: "Cheese", price: 1.96 },
          { title: "Cheese", price: 2.51, comment: "With extra Olives" },
        ],
      },
      {
        title: "Pasta",
        price: 14.62,
        type: "Food",
        itemsAddons: [
          { title: "Tomatoes", price: 1.12 },
          { title: "Tomatoes", price: 4.3 },
          { title: "Tomatoes", price: 4.86 },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [81.766, 176.2855],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 7.66,
        type: "Food",
        itemsAddons: [
          { title: "Bacon", price: 3.16, comment: "With extra Cheese" },
          { title: "Olives", price: 3.9, comment: "With extra Olives" },
          { title: "Bacon", price: 1.82, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [87.0302, 175.0602],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 16.28,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Olives", price: 3.03 },
          { title: "Bacon", price: 4.61, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 4.36, comment: "With extra Cheese" },
        ],
      },
      { title: "Salad", price: 19.12, type: "Drink", itemsAddons: [{ title: "Tomatoes", price: 4.48, comment: "With extra Cheese" }] },
      {
        title: "Pasta",
        price: 15.04,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Mushrooms", price: 1.1, comment: "With extra Cheese" },
          { title: "Cheese", price: 1.59 },
          { title: "Mushrooms", price: 4.61, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Pasta",
        price: 10.22,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Cheese", price: 3.99 },
          { title: "Olives", price: 3.15 },
          { title: "Mushrooms", price: 2.66 },
        ],
      },
      {
        title: "Soda",
        price: 10.86,
        type: "Food",
        itemsAddons: [
          { title: "Mushrooms", price: 1.05, comment: "With extra Cheese" },
          { title: "Olives", price: 2.24, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [83.7778, 178.9469],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 19.01,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Mushrooms", price: 4.06, comment: "With extra Olives" },
          { title: "Bacon", price: 4.95 },
        ],
      },
      {
        title: "Pasta",
        price: 14.41,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Mushrooms", price: 1.08, comment: "With extra Olives" },
          { title: "Bacon", price: 3.79, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [80.7751, 177.8439],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Pasta", price: 19.86, type: "Food", itemsAddons: [{ title: "Cheese", price: 3.99, comment: "With extra Cheese" }] },
      { title: "Pizza", price: 17.46, type: "Food", itemsAddons: [{ title: "Tomatoes", price: 1.29 }] },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [83.0327, 175.0361],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 19.03,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Mushrooms", price: 1.23, comment: "With extra Olives" }],
      },
      {
        title: "Pizza",
        price: 6.53,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Olives", price: 3.12 },
          { title: "Olives", price: 4.87, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [89.138, 170.5749],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 10.91,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Cheese", price: 4.51, comment: "With extra Olives" },
          { title: "Tomatoes", price: 1.52 },
        ],
      },
      {
        title: "Pizza",
        price: 17.69,
        type: "Food",
        itemsAddons: [
          { title: "Mushrooms", price: 2.26, comment: "With extra Olives" },
          { title: "Tomatoes", price: 1.16, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Pizza",
        price: 9.33,
        type: "Food",
        itemsAddons: [
          { title: "Bacon", price: 3.65, comment: "With extra Cheese" },
          { title: "Tomatoes", price: 1.13, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [84.9228, 178.4936],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [{ title: "Pizza", price: 10.18, type: "Food", itemsAddons: [{ title: "Bacon", price: 2.97, comment: "With extra Cheese" }] }],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [86.2052, 177.5153],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 5.21,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Olives", price: 1.79, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 4.49 },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [82.8201, 171.556],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Salad", price: 9.8, type: "Food", comment: "Extra Cheese", itemsAddons: [{ title: "Bacon", price: 2.04 }] },
      {
        title: "Pasta",
        price: 10.07,
        type: "Food",
        itemsAddons: [
          { title: "Tomatoes", price: 2.94 },
          { title: "Bacon", price: 4.74 },
          { title: "Cheese", price: 2.56, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [89.6161, 170.0118],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 18.18,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [{ title: "Cheese", price: 4.57, comment: "With extra Cheese" }],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [83.3624, 177.2733],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 13.92,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Cheese", price: 2.02, comment: "With extra Cheese" },
          { title: "Cheese", price: 2.85, comment: "With extra Olives" },
        ],
      },
      { title: "Salad", price: 12.92, type: "Food", comment: "Extra Olives", itemsAddons: [{ title: "Mushrooms", price: 2.02 }] },
      {
        title: "Pizza",
        price: 12.96,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Bacon", price: 4.63 },
          { title: "Bacon", price: 2.68 },
          { title: "Tomatoes", price: 4.5, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [85.0481, 174.2422],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 18.48,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Tomatoes", price: 3.5, comment: "With extra Cheese" },
          { title: "Tomatoes", price: 2.21, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [88.2117, 172.7374],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 8.18,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Olives", price: 1.25, comment: "With extra Olives" },
          { title: "Olives", price: 3.61, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [81.7587, 171.2141],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 12,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Mushrooms", price: 4.12, comment: "With extra Olives" },
          { title: "Cheese", price: 1.1, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 3.94 },
        ],
      },
      {
        title: "Salad",
        price: 7.64,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Cheese", price: 4.24, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 4.37, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Soda",
        price: 14.09,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Mushrooms", price: 2.5, comment: "With extra Cheese" }],
      },
      {
        title: "Pasta",
        price: 14.02,
        type: "Drink",
        itemsAddons: [
          { title: "Bacon", price: 1.5, comment: "With extra Olives" },
          { title: "Olives", price: 3.64, comment: "With extra Olives" },
        ],
      },
      {
        title: "Salad",
        price: 16.65,
        type: "Food",
        itemsAddons: [
          { title: "Cheese", price: 3.61, comment: "With extra Olives" },
          { title: "Olives", price: 2.94 },
          { title: "Tomatoes", price: 2.95 },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [89.6854, 174.3054],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Salad", price: 14.69, type: "Food", itemsAddons: [{ title: "Tomatoes", price: 2.92 }] },
      {
        title: "Pizza",
        price: 11.87,
        type: "Food",
        itemsAddons: [
          { title: "Tomatoes", price: 4.84, comment: "With extra Cheese" },
          { title: "Olives", price: 1.3, comment: "With extra Cheese" },
          { title: "Bacon", price: 4.58, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [89.7779, 172.7327],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Pizza", price: 11.47, type: "Drink", itemsAddons: [{ title: "Mushrooms", price: 1.52 }] },
      {
        title: "Pasta",
        price: 16.96,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [{ title: "Tomatoes", price: 1.9, comment: "With extra Olives" }],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [89.7258, 177.3581],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 18.49,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Mushrooms", price: 3.29, comment: "With extra Olives" },
          { title: "Bacon", price: 2.43, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [82.0044, 178.4783],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 9.67,
        type: "Drink",
        itemsAddons: [
          { title: "Cheese", price: 3.9, comment: "With extra Olives" },
          { title: "Olives", price: 1.98, comment: "With extra Olives" },
          { title: "Bacon", price: 3.27 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [85.4896, 178.8892],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 18.76,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Cheese", price: 2.69, comment: "With extra Olives" },
          { title: "Mushrooms", price: 4.52 },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [80.1835, 171.295],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 15.63,
        type: "Drink",
        itemsAddons: [
          { title: "Olives", price: 4.36 },
          { title: "Mushrooms", price: 1.28, comment: "With extra Cheese" },
        ],
      },
      { title: "Pasta", price: 17.62, type: "Drink", itemsAddons: [{ title: "Tomatoes", price: 2.81 }] },
      {
        title: "Salad",
        price: 13.25,
        type: "Food",
        itemsAddons: [
          { title: "Tomatoes", price: 4.49 },
          { title: "Cheese", price: 1.11, comment: "With extra Olives" },
        ],
      },
      {
        title: "Soda",
        price: 5.25,
        type: "Drink",
        itemsAddons: [
          { title: "Tomatoes", price: 2.79, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 1.31, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [85.4462, 179.8321],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 16.47,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Olives", price: 3.57, comment: "With extra Olives" },
          { title: "Tomatoes", price: 1.97, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [84.3158, 172.8655],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 11.4,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Bacon", price: 3.67 },
          { title: "Bacon", price: 4.41 },
          { title: "Olives", price: 3.2 },
        ],
      },
      {
        title: "Pizza",
        price: 14.58,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Tomatoes", price: 2.56, comment: "With extra Olives" },
          { title: "Mushrooms", price: 4.21 },
        ],
      },
      {
        title: "Soda",
        price: 14.6,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Mushrooms", price: 4.31, comment: "With extra Cheese" },
          { title: "Bacon", price: 2.02 },
          { title: "Cheese", price: 4.05 },
        ],
      },
      {
        title: "Salad",
        price: 18.38,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Bacon", price: 3.26 },
          { title: "Bacon", price: 2.53, comment: "With extra Olives" },
          { title: "Bacon", price: 2.6, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Pizza",
        price: 19.85,
        type: "Drink",
        itemsAddons: [
          { title: "Mushrooms", price: 1.78 },
          { title: "Cheese", price: 3.29 },
          { title: "Tomatoes", price: 1.31, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [88.2241, 176.8259],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 18.57,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [{ title: "Olives", price: 2.37, comment: "With extra Cheese" }],
      },
      {
        title: "Pizza",
        price: 14.05,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Olives", price: 2.06 },
          { title: "Olives", price: 1.34 },
        ],
      },
      {
        title: "Soda",
        price: 15.86,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Olives", price: 2.44 },
          { title: "Mushrooms", price: 1.95 },
        ],
      },
      {
        title: "Pasta",
        price: 10.66,
        type: "Food",
        itemsAddons: [
          { title: "Cheese", price: 1.71 },
          { title: "Olives", price: 2.12 },
          { title: "Tomatoes", price: 2.36, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [86.7702, 172.4165],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Soda", price: 12.72, type: "Food", itemsAddons: [{ title: "Olives", price: 2.04 }] },
      {
        title: "Pasta",
        price: 17.66,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Cheese", price: 4.68, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 3.47 },
          { title: "Cheese", price: 3.91 },
        ],
      },
      { title: "Pizza", price: 11.47, type: "Drink", itemsAddons: [{ title: "Mushrooms", price: 2.36, comment: "With extra Olives" }] },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [89.064, 176.9953],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 14.87,
        type: "Food",
        itemsAddons: [
          { title: "Mushrooms", price: 4.55 },
          { title: "Cheese", price: 4.57, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 1.15 },
        ],
      },
      {
        title: "Salad",
        price: 17.64,
        type: "Food",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Mushrooms", price: 2.94, comment: "With extra Olives" },
          { title: "Cheese", price: 2.21, comment: "With extra Olives" },
          { title: "Bacon", price: 3.15 },
        ],
      },
      {
        title: "Salad",
        price: 12.11,
        type: "Drink",
        itemsAddons: [
          { title: "Mushrooms", price: 3.24, comment: "With extra Olives" },
          { title: "Bacon", price: 1.49 },
          { title: "Bacon", price: 3.22 },
        ],
      },
      {
        title: "Pasta",
        price: 5.95,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Tomatoes", price: 4.8 },
          { title: "Bacon", price: 3.63, comment: "With extra Cheese" },
        ],
      },
      {
        title: "Pizza",
        price: 15.04,
        type: "Food",
        itemsAddons: [
          { title: "Olives", price: 3.83 },
          { title: "Bacon", price: 3.95, comment: "With extra Cheese" },
          { title: "Bacon", price: 1.8, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [83.615, 177.6178],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 16.91,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [{ title: "Mushrooms", price: 1.86, comment: "With extra Olives" }],
      },
      { title: "Pasta", price: 7.79, type: "Drink", itemsAddons: [{ title: "Olives", price: 4.09, comment: "With extra Olives" }] },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [89.5489, 171.9341],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 15.51,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Bacon", price: 4.4 },
          { title: "Tomatoes", price: 2.38, comment: "With extra Cheese" },
          { title: "Olives", price: 1.33 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [88.9641, 173.7295],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Pizza", price: 14.77, type: "Drink", itemsAddons: [{ title: "Cheese", price: 1.89, comment: "With extra Olives" }] },
      {
        title: "Pizza",
        price: 10.53,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [{ title: "Tomatoes", price: 1.5, comment: "With extra Cheese" }],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [85.7998, 176.6482],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Soda",
        price: 16.94,
        type: "Drink",
        itemsAddons: [
          { title: "Cheese", price: 3.04, comment: "With extra Olives" },
          { title: "Mushrooms", price: 1.89 },
          { title: "Olives", price: 4.5, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [83.435, 179.0495],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Salad", price: 14.33, type: "Food", comment: "Extra Cheese", itemsAddons: [{ title: "Cheese", price: 4.04 }] },
      {
        title: "Soda",
        price: 17.04,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Cheese", price: 1.62 },
          { title: "Mushrooms", price: 1.35, comment: "With extra Olives" },
        ],
      },
      { title: "Soda", price: 14.65, type: "Food", comment: "Extra Olives", itemsAddons: [{ title: "Bacon", price: 3.86 }] },
      {
        title: "Salad",
        price: 7.59,
        type: "Drink",
        itemsAddons: [
          { title: "Bacon", price: 1.42 },
          { title: "Tomatoes", price: 4.6 },
          { title: "Olives", price: 3.81, comment: "With extra Olives" },
        ],
      },
      {
        title: "Soda",
        price: 18.7,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Cheese", price: 2.33 },
          { title: "Olives", price: 1.31, comment: "With extra Olives" },
          { title: "Mushrooms", price: 4.87, comment: "With extra Olives" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [80.7308, 176.9695],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 15.14,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Bacon", price: 4.6, comment: "With extra Cheese" },
          { title: "Mushrooms", price: 1.97, comment: "With extra Olives" },
        ],
      },
      { title: "Salad", price: 15.54, type: "Food", comment: "Extra Cheese", itemsAddons: [{ title: "Bacon", price: 1.5 }] },
      {
        title: "Pizza",
        price: 7.45,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Olives", price: 3.57, comment: "With extra Olives" },
          { title: "Tomatoes", price: 2.56, comment: "With extra Cheese" },
          { title: "Olives", price: 3.92 },
        ],
      },
      {
        title: "Pizza",
        price: 13.81,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Olives", price: 3.49, comment: "With extra Olives" },
          { title: "Tomatoes", price: 1.19 },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [84.6662, 175.3385],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 6.49,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Tomatoes", price: 4.84, comment: "With extra Olives" },
          { title: "Cheese", price: 2.58 },
          { title: "Cheese", price: 2.65, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [86.1107, 170.4126],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pasta",
        price: 10.06,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Mushrooms", price: 1.07, comment: "With extra Olives" },
          { title: "Tomatoes", price: 2.9 },
          { title: "Olives", price: 1.9, comment: "With extra Cheese" },
        ],
      },
    ],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [84.6699, 179.0861],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Salad",
        price: 18,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Cheese", price: 1.39 },
          { title: "Cheese", price: 1.25 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [80.5365, 172.5645],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      { title: "Pasta", price: 9.68, type: "Food", comment: "Extra Olives", itemsAddons: [{ title: "Tomatoes", price: 1.67 }] },
      {
        title: "Pizza",
        price: 8.11,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Tomatoes", price: 4.61, comment: "With extra Olives" },
          { title: "Cheese", price: 3.01, comment: "With extra Olives" },
          { title: "Olives", price: 1.86 },
        ],
      },
      {
        title: "Soda",
        price: 9.05,
        type: "Food",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Mushrooms", price: 4.81, comment: "With extra Olives" },
          { title: "Tomatoes", price: 3.14 },
          { title: "Tomatoes", price: 1.25 },
        ],
      },
    ],
  },
  {
    title: "Order for Doe",
    status: "Received",

    location: [89.047, 170.0637],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [{ title: "Soda", price: 18.03, type: "Drink", itemsAddons: [{ title: "Bacon", price: 3.18 }] }],
  },
  {
    title: "Order for John",
    status: "Received",

    location: [88.5832, 175.3072],
    customerPhone: "1234567890",
    customerName: "John Doe",
    orderItems: [
      {
        title: "Pizza",
        price: 18.4,
        type: "Drink",
        comment: "Extra Cheese",
        itemsAddons: [
          { title: "Tomatoes", price: 2.11 },
          { title: "Mushrooms", price: 4.24 },
          { title: "Bacon", price: 4.04 },
        ],
      },
      {
        title: "Salad",
        price: 7.31,
        type: "Drink",
        comment: "Extra Olives",
        itemsAddons: [
          { title: "Bacon", price: 1.74, comment: "With extra Cheese" },
          { title: "Olives", price: 2.22 },
          { title: "Cheese", price: 4.42 },
        ],
      },
      {
        title: "Pizza",
        price: 18.97,
        type: "Drink",
        itemsAddons: [
          { title: "Bacon", price: 4.13 },
          { title: "Tomatoes", price: 4.94 },
        ],
      },
    ],
  },
];
