import React from "react";
import { makeStyles } from "@mui/styles";
import homeImg from "../../../assests/images/home_title_img.jpg";
import Button from "../../../components/Button";
const useStyles = makeStyles((theme) => ({
  titleConatiner: {
    maxWidth: "350px",
    fontSize: "22px",
    fontWeight: 700,
    textAlign: "center",
    textTransform: "uppercase",
  },
  wrapper: {
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    fontWeight: 700,
    fontFamily: "Montserrat",
  
  },
}));

const TitleHome = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.titleConatiner}>
        EMAIL & TEXT WITH YOUR GREATER PURPOSE!
      </div>
    </div>
  );
};

export default TitleHome;
