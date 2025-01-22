import { AxiosRequestConfig } from "axios";
import { OrderStatus } from "./types";

export interface GetNotDeliveredOrderRequest extends AxiosRequestConfig {
  url: "/order";
  method: "get";
}

export interface UpdateOrderStatusRequest extends AxiosRequestConfig {
  url: "/order/status/update";
  method: "patch";
  data: {
    status: keyof typeof OrderStatus;
    id: number;
  };
}
