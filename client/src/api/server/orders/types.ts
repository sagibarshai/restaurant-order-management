export enum OrderStatus {
  Received = "Received",
  Preparing = "Preparing",
  Ready = "Ready",
  EnRoute = "EnRoute",
  Delivered = "Delivered",
}
export type Order = {
  id: number;
  title: string;
  status: OrderStatus;
  location: {
    x: number;
    y: number;
  };
  createdAt: Date;
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
