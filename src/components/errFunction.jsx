import { ErrorBoundary } from "react-error-boundary";
import Fallback from "../pages/errorBoundary";


function ErrorBoundaryWrapper({ children }) {
    return <ErrorBoundary FallbackComponent={Fallback}>{children}</ErrorBoundary>;
  }

  export default ErrorBoundaryWrapper