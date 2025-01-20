import { CONFIG } from "../config";

export const logOnDebug = (message?: any): void => {
  if (CONFIG.DEBUG) console.log(message);
  return;
};
