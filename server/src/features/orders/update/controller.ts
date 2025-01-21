import { NextFunction, Request, Response } from "express";
import { OrderStatusType } from "../../../database/tables/orders/orders";
import { UpdateOrderStatusModel } from "../models/orders";
import { BadRequestError } from "../../../errors";

interface UpdateOrderStatusRequest extends Request {
  body: {
    id: number;
    status: OrderStatusType;
  };
}

export const updateOrderStatusController = async (req: UpdateOrderStatusRequest, res: Response, next: NextFunction) => {
  try {
    const { id, status } = req.body;
    const updatedOrder = await UpdateOrderStatusModel(id, status);

    if (!updatedOrder) return next(BadRequestError([{ message: `Cannot update status for order with id ${id}`, field: "id" }]));

    res.status(200).send(updatedOrder);
  } catch (err) {
    next(err);
  }
};
