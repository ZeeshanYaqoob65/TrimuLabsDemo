import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  divider: {
    opacity: 0.1,
    border: "1px solid #000000",
  },
});

const Divider = () => {
  const classes = useStyles();

  return <div className={classes.divider}></div>;
};

export default Divider;
