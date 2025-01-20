import { OrderItemType, StoredOrderItem } from "../../../database/tables/orders/orders-items";

export interface ReturnedOrderItem {
  id: number;
  createdAt: Date;
  comment?: string;
  title: string;
  price: number;
  type: OrderItemType;
  orderId: number;
}

const storedOrderItemsToReturnOrderItems = (orderItems: StoredOrderItem[]): ReturnedOrderItem[] => {
  return orderItems.map((storedOrderItem) => ({
    id: storedOrderItem.id,
    createdAt: storedOrderItem.created_at,
    comment: storedOrderItem.comment,
    title: storedOrderItem.title,
    orderId: storedOrderItem.order_id,
    price: storedOrderItem.price,
    type: storedOrderItem.type,
  }));
};
