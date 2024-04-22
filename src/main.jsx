import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import App from "./App";
import Home from "./pages/home";
import RepoDetails from "./pages/repoDetails";
import Fallback from "./pages/errorBoundary";
import Error404 from "./pages/404";

function ErrorBoundaryWrapper({ children }) {
  return <ErrorBoundary FallbackComponent={Fallback}>{children}</ErrorBoundary>;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <ErrorBoundaryWrapper>
            <Home />
          </ErrorBoundaryWrapper>
        }
      />
      <Route
        path="/repodetails/:id"
        element={
          <ErrorBoundaryWrapper>
            <RepoDetails />
          </ErrorBoundaryWrapper>
        }
      />
      <Route path="*" element={<Error404 />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
