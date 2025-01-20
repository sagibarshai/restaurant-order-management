import { StoredItemAddon } from "../../../database/tables/orders/items-addons";

export interface ReturnedItemAddon {
  id: number;
  createdAt: Date;
  comment?: string;
  title: string;
  price: number;
  orderItemId: number;
}

const storedItemsAddonsToReturnItemAddons = (itemAddons: StoredItemAddon[]): ReturnedItemAddon[] => {
  return itemAddons.map((storedItemAddon) => ({
    id: storedItemAddon.id,
    createdAt: storedItemAddon.created_at,
    comment: storedItemAddon.comment,
    title: storedItemAddon.title,
    orderItemId: storedItemAddon.order_item_id,
    price: storedItemAddon.price,
  }));
};
