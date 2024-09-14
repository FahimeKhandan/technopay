"use client";
import localFont from "next/font/local";

import { createTheme } from "@mui/material/styles";

const yekan = localFont({
  src: "./app/fonts/YekanBakh-Regular.woff",
  variable: "--font-yekan",
  // weight: "100 400",
});

const theme = createTheme({
  palette: {
    // mode: "light",
    primary: {
      main: "#1F2833",
    },
  },
  typography: {
    fontFamily: yekan.style.fontFamily,
    h4: {
      fontSize: "24px",
      "@media (min-width:900px)": {
        fontSize: "30px",
      },
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: "outlined" },
              style: {
                borderColor: "#4D637B",
                height: "fit-content",
                borderRadius: "30px",
                color: " var(--foreground)",
                fontSize: "18px",
                fontWeight:"400",
              },
            },
            {
              props: { className: "selected" },
              style: {
                borderColor: "#1F2833",
                borderWidth: "3px",
                fontWeight: "700",
              },
            },
          ],
        },
        label: {
          padding: "12px 24px",
        },
      },
    },
  },
});

export default theme;
