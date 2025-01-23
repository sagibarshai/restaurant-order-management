import { pgClient } from "../../../database/init";
import { OrderStatus, OrderStatusType, StoredOrder } from "../../../database/tables/orders/orders";

export interface ReturnedOrder {
  id: number;
  updatedAt: Date;
  createdAt: Date;
  location: number[];
  comment?: string;
  title: string;
  status: OrderStatus | OrderStatusType;
  customerName: string;
  customerPhone: string;
}

export interface CreateOrder extends Omit<ReturnedOrder, "id" | "updatedAt" | "createdAt"> {}

export const storedOrdersToReturnOrders = (storedOrders: StoredOrder[]): ReturnedOrder[] => {
  return storedOrders.map((storedOrder) => ({
    id: storedOrder.id,
    createdAt: storedOrder.created_at,
    updatedAt: storedOrder.updated_at,
    location: storedOrder.location,
    comment: storedOrder.comment,
    status: storedOrder.status,
    title: storedOrder.title,
    customerName: storedOrder.customer_name,
    customerPhone: storedOrder.customer_phone,
  }));
};

export const CreateNewOrderModel = async (order: CreateOrder): Promise<ReturnedOrder> => {
  try {
    const [latitude, longitude] = order.location;
    const location = `(${latitude}, ${longitude})`;

    const response = await pgClient.query(
      `INSERT INTO orders 
        (title, status, location, customer_name, customer_phone, comment) 
        VALUES
         ($1, $2, $3, $4, $5, $6)
         RETURNING *
         `,
      [order.title, order.status, location, order.customerName, order.customerPhone, order.comment]
    );

    const storedOrder = response.rows[0] as StoredOrder;

    return storedOrdersToReturnOrders([storedOrder])[0];
  } catch (err) {
    throw err;
  }
};

export const UpdateOrderStatusModel = async (id: ReturnedOrder["id"], status: ReturnedOrder["status"]): Promise<ReturnedOrder | undefined> => {
  try {
    const response = await pgClient.query(
      `UPDATE orders  
       SET status=$1,
       updated_at=$2
       WHERE id=$3
       RETURNING *`,
      [status, new Date(), id]
    );

    if (!response.rows.length) return;
    const updatedOrder = response.rows[0] as StoredOrder;

    return storedOrdersToReturnOrders([updatedOrder])[0];
  } catch (err) {
    throw err;
  }
};
