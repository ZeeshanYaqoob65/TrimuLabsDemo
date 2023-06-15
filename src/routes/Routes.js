import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorMessge from "../pages/ErrorMessage";

import Mission from "../pages/Mission/Mission";
import Home from "../pages/HomePage/Home";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorMessge />,
  },
  {
    path: "/:id/do_good_things",
    element: <Mission />,
    errorElement: <ErrorMessge />,
  },
]);

export default Routes;
