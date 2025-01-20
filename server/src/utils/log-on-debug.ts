import { CONFIG } from "../config";

export const logOnDebug = (...messages: any[]): void => {
  if (CONFIG.DEBUG) console.log(...messages);
  return;
};
