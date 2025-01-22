import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Order {
  id: number;
  title: string;
  status: string;
  location: { x: number; y: number };
  customerPhone: string;
  customerName: string;
  orderItems: {
    title: string;
    price: number;
    type: string;
    comment?: string;
    itemsAddons?: { title: string; price: number; comment?: string }[];
  }[];
}

type OrdersData = Order[];

const initialState: OrdersData = [];

export const orderSlice = createSlice({
  name: "order-slice",
  initialState,
  reducers: {
    setOrders: (state: OrdersData, action: PayloadAction<OrdersData>) => {
      state = action.payload;
      return state;
    },

    updateOrder: (state: OrdersData, action: PayloadAction<{ order: Order }>) => {
      const { order } = action.payload;
      const existingOrderIndex = state.findIndex((o) => o.id === order.id); // Assuming 'id' is the unique identifier

      if (existingOrderIndex !== -1) {
        state[existingOrderIndex] = { ...state[existingOrderIndex], ...order };
      }
      return state;
    },
  },
});

export const { setOrders, updateOrder } = orderSlice.actions;

export default orderSlice.reducer;
