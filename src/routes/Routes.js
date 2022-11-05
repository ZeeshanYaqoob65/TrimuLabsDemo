import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorMessge from "../pages/ErrorMessage";
import Index from "../pages/Jobs/Index";
import AddJ from "../pages/Jobs/components/AddJ";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <ErrorMessge />,
  },
  {
    path: "/add",
    element: <AddJ />,
    errorElement: <ErrorMessge />,
  }
]);

export default Routes;
