import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  button: {
    height: 40,
    padding: 7,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #FFFFFF",
    backgroundColor: (props) => props.backgroundColor || "#3971AE",
    cursor: "pointer",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 14,
    lineHeight: "20px",
    color: "white",
    width: "100%",
    textTransform: "uppercase",
    "@media (max-width: 350px)": {
      fontSize: 8,
    },
    "&:hover": {
      backgroundColor: "#41B6D2",
    },
  },
});

const TitleButton = ({ onClick, backgroundColor, icon, title }) => {
  const classes = useStyles({ backgroundColor });

  useEffect(() => {
    console.log(backgroundColor);
  }, [backgroundColor]);

  return (
    <button className={classes.button} onClick={onClick}>
      {title}
    </button>
  );
};

export default TitleButton;
