import { Router } from "express";
import { body } from "express-validator";
import { requestValidationMiddleware } from "../../../middlewares/request-validation";
import { OrderStatus } from "../../../database/tables/orders/orders";
import { updateOrderStatusController } from "./controller";

const router = Router();

// update order status column
router.patch(
  "/status/update",
  body("id").isInt({ min: 0 }).withMessage("Invalid id"),
  body("status").isIn(Object.values(OrderStatus)).withMessage("Invalid status"),
  requestValidationMiddleware,
  updateOrderStatusController
);

export { router as updateOrderRoutes };
