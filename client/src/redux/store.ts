import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./features/orders";

export const store = configureStore({
  reducer: {
    orders: orderSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
