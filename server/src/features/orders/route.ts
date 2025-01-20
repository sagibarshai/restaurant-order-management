import { Router } from "express";

const router = Router();

// get one order
router.get("/order/:id");

// get all orders
router.get("/order/:id");

// create order can handle array of orders or one order
router.post("/order");

// update order status column
router.patch("order/status");

// delete order
router.delete("/order/:id");

export { router as orderRoutes };
