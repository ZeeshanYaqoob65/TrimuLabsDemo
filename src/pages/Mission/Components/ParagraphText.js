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
    fontSize: "12px",
    lineHeight: "14px",
    color: "#888888",
    textTransform: (props) => (props.isUppercase ? "uppercase" : "none"),
  },
});

const ParagraphText = ({ isUppercase, text }) => {
  const classes = useStyles({ isUppercase });

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>{text}</div>
    </div>
  );
};

export default ParagraphText;
