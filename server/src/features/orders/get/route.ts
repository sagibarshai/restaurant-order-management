import { Router } from "express";
import { param } from "express-validator";
import { requestValidationMiddleware } from "../../../middlewares/request-validation";
import { getAllNotDeliveredOrders, getOrderWithIdController } from "./controller";

const router = Router();

// get one order
router.get(
  "/:id",
  param("id")
    .custom((param) => !Number.isNaN(param) && Number(param) >= 0)
    .withMessage("id params is not valid"),
  requestValidationMiddleware,
  getOrderWithIdController
);

// get all orders
router.get("/", getAllNotDeliveredOrders);

export { router as getOrdersRoutes };
