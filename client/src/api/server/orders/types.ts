export type OrderStatusType = "Received" | "Preparing" | "Ready" | "EnRoute" | "Delivered";

export type Order = {
  id: number;
  title: string;
  status: OrderStatusType;
  location: {
    x: number;
    y: number;
  };
  customerPhone: string;
  customerName: string;
  orderItems: {
    title: string;
    price: number;
    type: string;
    comment?: string;
    itemsAddons?: { title: string; price: number; comment?: string }[];
  }[];
};
