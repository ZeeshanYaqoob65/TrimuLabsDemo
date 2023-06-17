import React from "react";
import { makeStyles } from "@mui/styles";
import homeImg from "../../../assests/images/home_title_img.jpg";
import Button from "../../../components/Button";
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
    bottom: 10,
    left: 10,
    color: "white",
  },
  textContainer:{
    display:'flex',
    flexDirection:'column',


  }
}));

const ImageHome = () => {
  const classes = useStyles();

  return (
    <div className={classes.imageContainer}>
      <img src={homeImg} alt="Your Image" className={classes.image} />
      <div className={classes.overlay}>
        <div className={classes.textContainer}>
          <span>Your Text</span>
        <Button backgroundColor={"#FFFF"}/>
        </div>
      </div>
    </div>
  );
};

export default ImageHome;
