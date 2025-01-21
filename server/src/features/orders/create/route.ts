import { Router } from "express";
import { body } from "express-validator";
import { OrderStatus } from "../../../database/tables/orders/orders";
import { OrderItemType } from "../../../database/tables/orders/orders-items";
import { requestValidationMiddleware } from "../../../middlewares/request-validation";
import { createOrderController } from "./controller";

const router = Router();

// create order can handle one order only!
router.post(
  "/create",

  body("location")
    .isArray({ min: 2, max: 2 })
    .withMessage("location must be an array with exactly 2 elements")
    .custom((value) => {
      // Check if both elements are numbers
      if (typeof value[0] !== "number" || typeof value[1] !== "number") {
        throw new Error("Both elements of location must be numbers");
      }
      return true;
    })
    .withMessage("location must be an array of two numbers"),
  body("comment").optional({ nullable: true }).isString().isLength({ min: 2 }).withMessage("comment must be at least 2 characters"),
  body("title").notEmpty().isLength({ min: 2, max: 255 }).withMessage("title must be between 2 and 255 characters and cannot be empty."),

  body("status").isIn(Object.values(OrderStatus)).withMessage("Invalid status"),
  body("customerPhone").isLength({ min: 10, max: 13 }).withMessage("customerPhone must be 10 - 13 characters"),
  body("customerName").notEmpty().isLength({ min: 2 }).withMessage("customerName must be between 2 and 255 characters and cannot be empty."),

  // Validate order items
  body("orderItems")
    .isArray({ min: 1 })
    .withMessage("orderItems must be an array")
    .custom((orderItems) => {
      for (const item of orderItems) {
        if (!item.title || typeof item.title !== "string" || item.title.length < 2) {
          throw new Error("Each item must have a valid title with at least 2 characters");
        }
        if (!item.price || typeof item.price !== "number" || item.price <= 0) {
          throw new Error("Each item must have a valid price greater than 0");
        }
        if (!Object.values(OrderItemType).includes(item.type as OrderItemType)) {
          throw new Error(`Invalid type: ${item.type}. Must be one of ${Object.values(OrderItemType).join(", ")}`);
        }
        if (item?.comment && (typeof item.comment !== "string" || (item.comment.length < 2 && item.comment.length <= 255))) {
          throw new Error("Each item's comment must be null or a string with between 2 and 255 characters");
        }

        // Validate item addons
        if (item.itemsAddons && Array.isArray(item.itemsAddons)) {
          for (const addon of item.itemsAddons) {
            if (addon?.comment && (typeof addon.comment !== "string" || addon.comment.length < 2 || addon.comment.length > 255)) {
              throw new Error("Each item's addon comment must be null or a string with between 2 and 255 characters");
            }

            // Validate addon title
            if (!addon.title || typeof addon.title !== "string" || addon.title.length < 2 || addon.title.length > 255) {
              throw new Error("Each item's addon title must be a string between 2 and 255 characters");
            }

            // Validate addon price
            if (!addon.price || typeof addon.price !== "number" || addon.price <= 0) {
              throw new Error("Each item's addon must have a valid price greater than 0");
            }
          }
        }
      }
      return true;
    }),
  requestValidationMiddleware,
  createOrderController
);

export { router as createOrderRoutes };
