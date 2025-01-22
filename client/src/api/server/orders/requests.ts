import { AxiosRequestConfig } from "axios";
import { OrderStatusType } from "./types";

export interface GetNotDeliveredOrderRequest extends AxiosRequestConfig {
  url: "/order";
  method: "get";
}

export interface UpdateOrderStatusRequest extends AxiosRequestConfig {
  url: "/order";
  method: "patch";
  data: {
    status: OrderStatusType;
    id: number;
  };
}
