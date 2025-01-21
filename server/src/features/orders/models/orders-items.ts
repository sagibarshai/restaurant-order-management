import { pgClient } from "../../../database/init";
import { OrderItemType, OrderItemTypeType, StoredOrderItem } from "../../../database/tables/orders/orders-items";
import { ReturnedOrder } from "./orders";

export interface ReturnedOrderItem {
  id: number;
  createdAt: Date;
  comment?: string;
  title: string;
  price: number;
  type: OrderItemType | OrderItemTypeType;
  orderId: number;
}

export interface CreateOrderItem extends Omit<ReturnedOrderItem, "id" | "createdAt" | "orderId"> {}

export const storedOrderItemsToReturnOrderItems = (orderItems: StoredOrderItem[]): ReturnedOrderItem[] => {
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

export const CreateNewOrderItemModel = async (orderId: ReturnedOrder["id"], orderItem: CreateOrderItem): Promise<ReturnedOrderItem> => {
  try {
    const response = await pgClient.query(
      `INSERT INTO orders_items
        (title, price, type, comment, order_id)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *`,
      [orderItem.title, orderItem.price, orderItem.type, orderItem.comment, orderId]
    );

    const storedOrderItem = response.rows[0] as StoredOrderItem;

    return storedOrderItemsToReturnOrderItems([storedOrderItem])[0];
  } catch (err) {
    throw err;
  }
};
