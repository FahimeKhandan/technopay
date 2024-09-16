"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#1F2833",
    },
    secondary: {
      main: "#5AEDA6",
    },
  },
  typography: {
    fontFamily: "yekan-faNum-regular",
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
                fontWeight: "400",
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
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          padding: "14px 40px",
          fontSize: "18px",
          fontWeight: 700,
          lineHeight: "28px",
          boxShadow: "none",
        },
      },
    },
  },
});

export default theme;
