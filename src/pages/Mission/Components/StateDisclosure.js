import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  disclosure: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "14px",
    color: "#888888",
    textTransform: (props) => (props.isUppercase ? "uppercase" : "none"),
  },
  wrapper: {
    padding: "10px",
  },
  container: {},
});

const StateDisclosure = ({ disclosure }) => {
  const classes = useStyles();
  const disclosureStates = Object.entries(disclosure)
    .filter(([key, value]) => value !== null && key.startsWith("state_"))
    .map(([key, value]) => value);

  return (
    <div className={classes.wrapper}>
      {disclosureStates.map((state, key) => (
        <p key={key} className={classes.disclosure}>
          {state}
        </p>
      ))}
    </div>
  );
};

export default StateDisclosure;
