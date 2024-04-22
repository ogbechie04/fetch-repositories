import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import RepoDetails from "./pages/repoDetails";
import Error404 from "./pages/404";
import ErrorBoundaryWrapper from "./components/errFunction";

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

const App = () => {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
