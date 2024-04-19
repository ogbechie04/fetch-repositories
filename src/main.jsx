import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
// import App from "./App";
import Home from "./pages/home";
import RepoDetails from "./pages/repoDetails";
// import ErrorPage from './pages/ErrorPage'
// import AppOutlet from './pages/AppOutlet'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/repodetails/:id" element={<RepoDetails />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
