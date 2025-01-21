import { pgClient } from "../../../database/init";
import { MOCKS_FULLY_ORDERS } from "../../../mocks/data";
import { logOnDebug } from "../../../utils/log-on-debug";
import { GetAllNotDeliveredOrdersWithItemsAndAddons } from "../models/full-order-details";
import { createFullOrderAsTransaction } from "./create-full-order";

let renderCounts = 0; // server is render in development mode after any change casing the function below run more then once

export const init300OrdersIfNotExists = async () => {
  // run this function only once
  try {
    if (renderCounts === 0) {
      renderCounts = 1;

      // check if there is 300 items on db
      const before = await GetAllNotDeliveredOrdersWithItemsAndAddons();
      if (before.length === 300) return;

      for (let order of MOCKS_FULLY_ORDERS) {
        await createFullOrderAsTransaction(order);
      }
      logOnDebug("Insert successfully 300 orders for initialization");
    }
  } catch (err: any) {
    await pgClient.query("ROLLBACK");
    throw new Error(err);
  }
};
