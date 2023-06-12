import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  button: {
    
    height: "32px",
    padding: "7px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: (props) => props.backgroundColor  ? props.backgroundColor : "transparent",
    cursor: "pointer",
    border: "none",
    outline: "none",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "14px",
    lineHeight: "17px",
    textTransform: "uppercase",
    gap:"5px"

  },
  icon: {
    width:"16px",
    height:"16px"
  },
});

const Button = ({ onClick, backgroundColor, icon, title }) => {
  const classes = useStyles({ backgroundColor });
  useEffect(()=>{
    console.log(backgroundColor)
  },[backgroundColor])

  return (
    <button className={classes.button} onClick={onClick}>
      {icon && <img src={icon} alt="Button Icon" className={classes.icon} />}
      {title}
    </button>
  );
};

export default Button;
