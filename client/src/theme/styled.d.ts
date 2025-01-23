import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      colors: {
        backgrounds: {
          white: string;
          pink: string;
          lightGray: string;
          aqua: string;
          status: {
            Received: string;
            Preparing: string;
            Ready: string;
            EnRoute: string;
            Delivered: string;
          };
        };
        texts: {
          primary: string;
          error: string;
        };
      };
    };
    spaces: {
      xl: string;
      l: string;
      m: string;
      s: string;
      xs: string;
    };
    fonts: {
      sizes: {
        title: string;
        subtitle: string;
        text: string;
      };
    };
  }
}
