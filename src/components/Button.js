import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  button: {
    
  
    padding: "5px 20px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: (props) => props.backgroundColor  ? props.backgroundColor : "transparent",
    color:  (props) => props.color  ? props.color : "black",
    cursor: "pointer",
    border: "none",
    outline: "none",
    fontStyle: "normal",
    fontSize: "12px",
    lineHeight: "17px",
    textTransform: "uppercase",
    fontWeight:"500",
    gap:"5px"

  },
  icon: {
    width:"16px",
    height:"16px"
  },
});

const Button = ({ onClick, backgroundColor, icon, title ,color}) => {
  const classes = useStyles({ backgroundColor,color });


  return (
    <button className={classes.button} onClick={onClick}>
      {icon && <img src={icon} alt="Button Icon" className={classes.icon} />}
      {title}
    </button>
  );
};

export default Button;
