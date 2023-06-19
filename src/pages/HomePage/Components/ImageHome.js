import React from "react";
import { makeStyles } from "@mui/styles";
import homeImg from "../../../assests/images/seed.jpg";
import appImg from "../../../assests/images/download_appstore_img.png";
import Button from "@mui/material/Button";

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    position: "relative",
    width: "100%",
    height: "auto",
    marginBottom: 2,
  },
  image: {
    width: "100%",
    height: "auto",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    left: 0,
    top: 0,
    opacity: 0.3,
    zIndex: 2,
  },
  textOverlay: {
    position: "absolute",
    bottom: 300,
    left: 210,
    color: "white",
    zIndex: 3,
    "@media (max-width: 800px)": {
      bottom: 10,
      left: 30,
    },
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
  },
  image2: {
    marginTop: "5px",
    width: "120px",
  },
  text: {
    fontSize: 54,
    color: "#FFFF",
    fontFamily: "Montserrat !important",
    lineHeight: "60px",
    fontWeight: 400,

    "@media (max-width: 800px)": {
      fontSize: 34,
      lineHeight: "45px",
    },
  },
  buttonstyle: {
    color: "#FFFF",
    backgroundColor: "#edbe49",
  },
}));

const ImageHome = () => {
  const classes = useStyles();

  const handleClick = () => {
    const URLS = "https://apps.apple.com/app/seedforme/id1554240967";
    window.open(URLS, "_blank");
  };

  return (
    <div className={classes.imageContainer}>
      <img src={homeImg} alt="Your Image" className={classes.image} />
      <div className={classes.overlay}></div>
      <div className={classes.overlay}></div>
      <div className={classes.textOverlay}>
        <div className={classes.textContainer}>
          <div className={classes.text}>Missions</div>
          <div className={classes.text}>Made Easy</div>
          <img src={appImg} alt="Your Image" className={classes.image2} />
        </div>
      </div>
    </div>
  );
};

export default ImageHome;
