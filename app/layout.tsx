import theme from "@/theme";
import { ThemeProvider } from "@mui/material/styles";
import type { Metadata } from "next";
import "./globals.css";
import QueryClientProvider from "./QueryClientProvider";


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
        <QueryClientProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
