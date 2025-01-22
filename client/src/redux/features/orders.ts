import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Order {
  title: string;
  status: string;
  location: [number, number];
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

type OrderData = Order | null;

const initialState: Order | null = null as OrderData;

export const orderSlice = createSlice({
  name: "order-slice",
  initialState,
  reducers: {
    setOrders: (state: OrderData, action: PayloadAction<OrderData>) => {
      return action.payload;
    },
  },
});

export const { setOrders } = orderSlice.actions;

export default orderSlice.reducer;
