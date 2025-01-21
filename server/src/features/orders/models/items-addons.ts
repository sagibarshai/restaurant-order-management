import { pgClient } from "../../../database/init";
import { StoredItemAddon } from "../../../database/tables/orders/items-addons";
import { ReturnedOrderItem } from "./orders-items";

export interface ReturnedItemAddon {
  id: number;
  createdAt: Date;
  comment?: string;
  title: string;
  price: number;
  orderItemId: number;
}

export interface CreateItemAddon extends Omit<ReturnedItemAddon, "id" | "createdAt" | "orderItemId"> {}

export const storedItemsAddonsToReturnItemAddons = (itemAddons: StoredItemAddon[]): ReturnedItemAddon[] => {
  return itemAddons.map((storedItemAddon) => ({
    id: storedItemAddon.id,
    createdAt: storedItemAddon.created_at,
    comment: storedItemAddon.comment,
    title: storedItemAddon.title,
    orderItemId: storedItemAddon.order_item_id,
    price: storedItemAddon.price,
  }));
};

export const CreateNewItemAddonModel = async (orderItemId: ReturnedOrderItem["id"], itemAddon: CreateItemAddon): Promise<ReturnedItemAddon> => {
  try {
    const response = await pgClient.query(
      `INSERT INTO items_addons
        (title, price, comment, order_item_id)
        VALUES ($1, $2, $3, $4)
        RETURNING *`,
      [itemAddon.title, itemAddon.price, itemAddon.comment, orderItemId]
    );

    const storedItemAddon = response.rows[0] as StoredItemAddon;

    return storedItemsAddonsToReturnItemAddons([storedItemAddon])[0]; // Convert and return the stored addon
  } catch (err) {
    throw err;
  }
};
