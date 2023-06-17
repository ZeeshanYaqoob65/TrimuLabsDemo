import React from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import Ameen from "../../../assests/images/prayer_img.png";

const useStyles = makeStyles({
  wrapper: { padding: "12px" },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: " #384885",
    borderRadius: "10px",
    width: "100%",
    padding: "16px 11px 23px 13px",
    textAlign: "center",

    "@media (min-width: 800px)": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      textAlign: "left",
      gap: "35px",
      maxHeight: "221px",
      height: "100%",
      padding: "20px",
    },
  },
  title: {
    fontSize: "24px",
    fontWeight: 700,
    marginBottom: "5px",
    lineHeight: "33px",
    textTransform: "uppercase",
    color: "#FFFF",
  },
  description: {
    fontSize: "14px",
    color: "#FFFF",
    fontWeight: 400,
    marginBottom: "10px",
  },
  button: {
    fontSize: "16px",
    padding: "8px 30px 8px 30px",
    fontWeight: 600,
    lineHeight: "20px",
    color: "#FFFF",
    display: "flex",
    alignItems: "center",
    background: "#48C7F4",
    borderRadius: "10px",
    border: "none",
    "@media (min-width: 800px)": {
      flexDirection: "column",
      width: "182px",
      height: "182px",
      justifyContent: "center",
      fontWeight: "normal",
    },
  },
  icon: {
    width: "30px",
    height: "33px",
    marginRight: "5.81px",
  },
  dataContaier: {
    "@media (min-width: 800px)": {
      padding: "9px 0px 9px 19px",
    },
  },
});

const RequestPrayer = ({ index, Prayer }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper} key={index}>
      <div className={classes.container}>
        <div className={classes.dataContaier}>
          <div className={classes.title}>Request Prayer</div>
          <div className={classes.description}>{Prayer}</div>
        </div>

        <div>
          <button className={classes.button}>
            <div>
              <img src={Ameen} className={classes.icon} />
            </div>
            <div>Click to Ameen</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestPrayer;
