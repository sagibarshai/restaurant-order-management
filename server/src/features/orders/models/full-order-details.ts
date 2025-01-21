import { pgClient } from "../../../database/init";
import { ReturnedItemAddon } from "./items-addons";
import { ReturnedOrder } from "./orders";
import { ReturnedOrderItem } from "./orders-items";

export interface ReturnedFullOrder extends ReturnedOrder {
  orderItems: (Omit<ReturnedOrderItem, "orderId" | "createdAt"> & { itemsAddons?: Omit<ReturnedItemAddon, "orderItemId" | "createdAt">[] })[];
}

export const GetAllNotDeliveredOrdersWithItemsAndAddons = async (id?: number): Promise<ReturnedFullOrder[]> => {
  try {
    const response = await pgClient.query(`
 SELECT 
  o.id AS id,
  o.created_at AS "createdAt",
  o.updated_at AS "updatedAt",
  o.location,
  o.comment AS "comment",
  o.title AS "title",
  o.status AS "status",
  o.customer_name AS "customerName",
  o.customer_phone AS "customerPhone",
  COALESCE(
    json_agg(
      DISTINCT jsonb_build_object(
        'id', oi.id,
        'price', oi.price,
        'title', oi.title,
        'type', oi.type,
        'comment', oi.comment,
        'itemsAddons', sub_addons.itemsAddons
      )
    ) FILTER (WHERE oi.id IS NOT NULL), '[]'
  ) AS "orderItems"
FROM orders o
LEFT JOIN orders_items oi ON o.id = oi.order_id
LEFT JOIN (
    SELECT 
      ia.order_item_id,
      json_agg(
        DISTINCT jsonb_build_object(
          'id', ia.id,
          'price', ia.price,
          'title', ia.title,
          'comment', ia.comment
        )
      ) AS itemsAddons
    FROM items_addons ia
    GROUP BY ia.order_item_id
) sub_addons ON oi.id = sub_addons.order_item_id
${id ? `WHERE o.id = ${id}` : `WHERE o.status != 'Delivered'`}
GROUP BY o.id
        `);
    const rows = response.rows as ReturnedFullOrder[];

    return rows;
  } catch (err) {
    throw new Error("Error fetching orders with items and add-ons: " + err);
  }
};
