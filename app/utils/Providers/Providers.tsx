"use client";

import { store } from "@/redux/store";
import { createTheme, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
const theme = createTheme({});
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
}
