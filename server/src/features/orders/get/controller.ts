import { NextFunction, Request, Response } from "express";
import { GetAllNotDeliveredOrdersWithItemsAndAddons } from "../models/full-order-details";
import { BadRequestError } from "../../../errors";

interface GetOrderByIdRequest extends Request {
  params: {
    id: string;
  };
}

export const getOrderWithIdController = async (req: GetOrderByIdRequest, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const orders = await GetAllNotDeliveredOrdersWithItemsAndAddons(Number(id));
    const order = orders[0];
    if (!order) return next(BadRequestError([{ message: `Order with id ${id} not found`, field: "id" }]));
    res.status(200).send(order);
  } catch (err) {
    next(err);
  }
};

export const getAllNotDeliveredOrders = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allNotDeliveredOrders = await GetAllNotDeliveredOrdersWithItemsAndAddons();

    res.status(200).send(allNotDeliveredOrders);
  } catch (err) {
    next(err);
  }
};

// 115352
