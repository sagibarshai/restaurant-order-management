import { NextFunction, Request, Response } from "express";
import { CreateOrder } from "../models/orders";

import { CreateOrderItem } from "../models/orders-items";
import { CreateItemAddon } from "../models/items-addons";
import { createFullOrderAsTransaction } from "../utils/create-full-order";

export interface CreateFullOrder extends CreateOrder {
  orderItems: (CreateOrderItem & { itemsAddons?: CreateItemAddon[] })[]; // Using intersection to add itemsAddons
}

export interface CreateFullOrderRequest extends Request {
  body: CreateFullOrder;
}

export const createOrderController = async (req: CreateFullOrderRequest, res: Response, next: NextFunction) => {
  try {
    const { customerName, customerPhone, location, orderItems, status, title, comment } = req.body;
    const newOrder = await createFullOrderAsTransaction({
      customerName,
      customerPhone,
      location,
      orderItems,
      status,
      title,
      comment,
    });
    res.status(201).send(newOrder);
  } catch (err) {
    next(err);
  }
};
