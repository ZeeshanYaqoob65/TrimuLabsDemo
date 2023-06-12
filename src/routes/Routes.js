import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorMessge from "../pages/ErrorMessage";

import Mission from "../pages/Mission/Mission";
import Home from '../pages/HomePage/Home'
import AddJ from "../pages/Jobs/components/AddJ";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorMessge />,
  },
  {
    path: "/add",
    element: <AddJ />,
    errorElement: <ErrorMessge />,
  },
  {
    path: "/:id/do_good_things",
    element: <Mission />,
    errorElement: <ErrorMessge />,
  },
]);

export default Routes;
