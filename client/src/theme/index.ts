import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  palette: {
    colors: {
      backgrounds: {
        white: "#FFFFFF",
        pink: "#EDB7ED",
        lightGray: "#FAF5F5",
        aqua: "rgba(7, 137, 179, 0.7)",
        status: {
          Delivered: "#A9D08E",
          EnRoute: "#C0E1F6",
          Preparing: "#FFE59F",
          Ready: "#D4EDBD",
          Received: "#FFC8AA",
        },
      },
      texts: {
        primary: "rgba(0, 0, 0, 0.8)",
        error: "#ff0033",
      },
    },
  },
  spaces: {
    xl: "50px",
    l: "25px",
    m: "16px",
    s: "8px",
    xs: "4px",
  },
  fonts: {
    sizes: {
      title: "50px",
      subtitle: "24px",
      text: "16px",
    },
  },
};
