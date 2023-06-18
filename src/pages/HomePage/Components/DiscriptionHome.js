import React from "react";
import { makeStyles } from "@mui/styles";
import homeImg from "../../../assests/images/home_title_img.jpg";
import Button from "../../../components/Button";
const useStyles = makeStyles((theme) => ({
  titleConatiner: {
    maxWidth: "600px",
    fontSize: "12px",
    textAlign: "center",
    color: "black",
  },
  wrapper: {
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingLeft:40,
    paddingRight:40,
  },
}));

const DiscriptionHome = ({ text }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.titleConatiner}>{text}</div>
    </div>
  );
};

export default DiscriptionHome;
