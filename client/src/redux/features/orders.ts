import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Order } from "../../api/server/orders/types";

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
      const existingOrderIndex = state.findIndex((o) => o.id === order.id);

      if (existingOrderIndex !== -1) {
        state[existingOrderIndex] = { ...state[existingOrderIndex], ...order };
      }
      return state;
    },
  },
});

export const { setOrders, updateOrder } = orderSlice.actions;

export default orderSlice.reducer;
