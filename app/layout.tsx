import theme from "@/theme";
import { ThemeProvider } from "@mui/material/styles";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "technopay",
  description: "تــکنـوپـی؛ وام آنلایـن بـدون ضامــن",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
