import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorMessge() {
  const error = useRouteError();
  return (
    <div>
      Error ! No route found <br />
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
