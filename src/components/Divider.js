import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  divider: {
    border: "1px solid #414141",
    width: "100%",
    paddingLeft:'20px',
    paddingRight:'20px',
    height:'3px'
  

  },
});

const Divider = () => {
  const classes = useStyles();

  return <div className={classes.divider}></div>;
};

export default Divider;
