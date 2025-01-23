import { OrderStatus } from "../api/server/orders/types";
import { theme } from "../theme";

export const getStatusBackgroundColor = (status: OrderStatus): string => {
  switch (status) {
    case OrderStatus.Received:
      return theme.palette.colors.backgrounds.status.Received; // Received
    case OrderStatus.Preparing:
      return theme.palette.colors.backgrounds.status.Preparing; //Preparing
    case OrderStatus.Ready:
      return theme.palette.colors.backgrounds.status.Ready; // Ready
    case OrderStatus.EnRoute:
      return theme.palette.colors.backgrounds.status.EnRoute; // EnRoute
    case OrderStatus.Delivered:
      return theme.palette.colors.backgrounds.status.Delivered; // Delivered
  }
};
