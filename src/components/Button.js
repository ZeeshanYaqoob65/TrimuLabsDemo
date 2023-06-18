import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  button: {
    padding: "10px 20px",
    borderRadius: "6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: (props) => props.backgroundColor  ? props.backgroundColor : "transparent",
    color:  (props) => props.color  ? props.color : "black",
    cursor: "pointer",
    border: "none",
    outline: "none",
    fontStyle: "normal",
    fontSize: "14px",
    lineHeight: "17px",
    textTransform: (props) => props.isUpperCase ==true  ?  "uppercase" :"",
    fontWeight:"500",
    gap:"5px",
    
    "&:hover": {
      backgroundColor: "#d5d5d5",
    },
  },
  icon: {
    width:"16px",
    height:"16px"
  },
});

const Button = ({ onClick, backgroundColor, icon, title ,color , isUpperCase =true}) => {
  const classes = useStyles({ backgroundColor,color, isUpperCase });


  return (
    <button className={classes.button} onClick={onClick}>
      {icon && <img src={icon} alt="Button Icon" className={classes.icon} />}
      {title}
    </button>
  );
};

export default Button;
