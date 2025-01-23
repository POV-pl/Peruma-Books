import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import OwnerDataReader from "./ReadData";

// import Header from "./header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/owner-data",
    element: <OwnerDataReader />,
  },
]);

export default router;
