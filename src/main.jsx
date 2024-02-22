import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query"; // Import QueryClient and QueryClientProvider
import "./index.css";
import HomePage from "./pages/HomePage";
import TestPage from "./pages/TestPage";
import ErrorPage from "./pages/ErrorPage";
import { ReactQueryDevtools } from 'react-query/devtools';
import JestPage from "./pages/JestPage";

// Create a QueryClient instance
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/test",
    element: <TestPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/:id",
    element: <JestPage/>,
    errorElement: <ErrorPage />
  }
]);

// Wrap your entire application with QueryClientProvider and provide the QueryClient instance
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className="bg-black min-h-screen text-[#C1E1FF]">
        <RouterProvider router={router} />
      </div>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  </React.StrictMode>
);
