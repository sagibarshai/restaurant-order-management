import { OrderStatus, StoredOrder } from "../../../database/tables/orders/orders";

export interface ReturnedOrder {
  id: number;
  updatedAt: Date;
  createdAt: Date;
  location: string;
  comment?: string;
  title: string;
  status: OrderStatus;
}

const storedOrdersToReturnOrders = (storedOrders: StoredOrder[]): ReturnedOrder[] => {
  return storedOrders.map((storedOrder) => ({
    id: storedOrder.id,
    createdAt: storedOrder.created_at,
    updatedAt: storedOrder.updated_at,
    location: storedOrder.location,
    comment: storedOrder.comment,
    status: storedOrder.status,
    title: storedOrder.title,
  }));
};
