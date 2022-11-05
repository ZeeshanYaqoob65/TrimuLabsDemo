import React from "react";
import Button from "@mui/material/Button";
export default function CustomButton({ buttonText, ...rest }) {
  return <Button {...rest}>{buttonText}</Button>;
}