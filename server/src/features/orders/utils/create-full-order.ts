import { pgClient } from "../../../database/init";
import { CreateFullOrder } from "../create/controller";
import { ReturnedFullOrder } from "../models/full-order-details";
import { CreateNewItemAddonModel } from "../models/items-addons";
import { CreateNewOrderModel } from "../models/orders";
import { CreateNewOrderItemModel } from "../models/orders-items";

export const createFullOrderAsTransaction = async (order: CreateFullOrder): Promise<ReturnedFullOrder> => {
  try {
    pgClient.query("BEGIN");
    // order

    // @ts-ignore
    const returnedOrder: ReturnedFullOrder = {};

    const newOrder = await CreateNewOrderModel({
      customerName: order.customerName,
      customerPhone: order.customerPhone,
      location: order.location,
      status: order.status,
      title: order.title,
      comment: order.comment,
    });
    // build the return order
    (returnedOrder["id"] = newOrder.id), (returnedOrder["createdAt"] = newOrder["createdAt"]);
    returnedOrder["comment"] = newOrder["comment"];
    returnedOrder["customerName"] = newOrder["customerName"];
    returnedOrder["customerPhone"] = newOrder["customerPhone"];
    returnedOrder["location"] = newOrder["location"];
    returnedOrder["status"] = newOrder["status"];
    returnedOrder["title"] = newOrder["title"];
    returnedOrder["updatedAt"] = newOrder["updatedAt"];
    returnedOrder["orderItems"] = [];

    // items
    const itemWithAddons: ReturnedFullOrder["orderItems"] = [];
    for (let [index, item] of order.orderItems.entries()) {
      const newOrderItem = await CreateNewOrderItemModel(newOrder.id, {
        price: item.price,
        title: item.title,
        type: item.type,
        comment: item?.comment,
      });
      itemWithAddons.push({ ...newOrderItem, itemsAddons: [] });
      // addons
      if (item.itemsAddons) {
        for (let addon of item?.itemsAddons || []) {
          const newItemAddon = await CreateNewItemAddonModel(newOrderItem.id, { price: addon.price, title: addon.title, comment: addon?.comment });
          itemWithAddons[index].itemsAddons?.push(newItemAddon);
        }
      }
    }

    returnedOrder["orderItems"] = itemWithAddons;

    await pgClient.query("COMMIT");
    return returnedOrder;
  } catch (err: any) {
    throw new Error(err);
  }
};
