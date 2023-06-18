import React from "react";
import { makeStyles } from "@mui/styles";
import homeImg from "../../../assests/images/home_title_img.jpg";
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
    bottom: 50,
    left: 50,
    color: "white",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
  },
  text: {
    fontSize: 54,
    color: "#FFFF",
    fontWeight: "bold",
    "@media (max-width: 800px)": {
      fontSize: 34,
    },
  },
  buttonstyle: {
    color: "#FFFF",
    backgroundColor: "#edbe49",
  },
}));

const ImageHome = () => {
  const classes = useStyles();

  return (
    <div className={classes.imageContainer}>
      <img src={homeImg} alt="Your Image" className={classes.image} />
      <div className={classes.overlay}>
        <div className={classes.textContainer}>
          <div className={classes.text}>Missions</div>
          <div className={classes.text}>Made Easy</div>
          <Button
            variant="contained"
            className={classes.buttonstyle}
            sx={{ background: "#edbe49" }}
          >
            Login / Signup
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ImageHome;
