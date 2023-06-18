import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  wrapper: {
    padding: "10px",
  },
  container: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: (props) => (props.fontSize ? props.fontSize : "12px"),
    lineHeight: "14px",
    color: "#7A7A7A",
    textTransform: (props) => (props.isUppercase ? "uppercase" : "none"),
  },
});

const ParagraphText = ({ isUppercase, text, fontSize }) => {
  const classes = useStyles({ isUppercase, fontSize });

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>{text}</div>
    </div>
  );
};

export default ParagraphText;
