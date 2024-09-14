"use client";
import localFont from "next/font/local";

import { createTheme } from "@mui/material/styles";

const yekan = localFont({
  src: "./app/fonts/yekan.woff",
  variable: "--font-yekan",
  // weight: "100 900",
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
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: "outlined" },
              style: {
                borderColor: "#1F2833",
                height:"fit-content",
                borderRadius:"30px"
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
