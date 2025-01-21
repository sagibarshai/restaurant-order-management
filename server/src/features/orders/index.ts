import { Router } from "express";
import { updateOrderRoutes } from "./update/route";
import { createOrderRoutes } from "./create/route";
import { getOrdersRoutes } from "./get/route";

const router = Router();

router.use("/order", updateOrderRoutes, createOrderRoutes, getOrdersRoutes);

export { router as ordersRoutes };
