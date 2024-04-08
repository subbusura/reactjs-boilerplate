import React from "react";
import ReactDOM from "react-dom/client";
import "@/styles/index.css";
import mainRouters from "@/pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/context/theme-provider";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="app-ui-theme">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={mainRouters}></RouterProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
