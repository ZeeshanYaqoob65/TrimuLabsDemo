import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";

import backgroun from "../../../assests/images/dummy_image.png";
import Share from "../../../assests/images/web_share_img.png";
import Button from "../../../components/Button";
import { BASE_URL } from "../utils";

const useStyles = makeStyles({
  container: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100% !important",
    maxWidth: "800px",
    margin: "0px auto",
    paddingBottom: "100%", // Set the height based on width as a percentage
    position: "relative",
    maxHeight: "800px",
    fontWeight: "500px !important",
    height: "600px",

    "@media (min-width: 800px)": {
      display: "block",
      margin: "0px !important",
      paddingBottom: "0px",
    },
  },
  shareButton: {
    position: "absolute",
    top: "15px",
    right: "18px",
  },
  btn: {
    fontWeight: "500px !important",
  },
  YouTube: {
    position: "absolute",
    bottom: "10px",
    left: "13px",
  },
});

export default function ImageWeb({ backgroundImage }) {
  useEffect(() => {}, [backgroundImage]);
  const classes = useStyles({ backgroundImage });
  const handleShareClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Seed For Me",
          text: "Donate Now",
          url: window.location.href,
        })
        .then(() => {
          console.log("Successfully shared");
        })
        .catch((error) => {
          console.error("Error sharing:", error);
        });
    } else {
      console.log("Web Share API is not supported");
    }
  };

  return (
    <Container
      className={classes.container}
      style={{
        backgroundImage: backgroundImage
          ? `url( ${BASE_URL}${backgroundImage})`
          : `url(${backgroun})`,
      }}
    >
      <div className={classes.shareButton}>
        <Button
          className={classes.btn}
          backgroundColor={"white"}
          onClick={handleShareClick}
          title={"Share Mission"}
          icon={Share}
        ></Button>
      </div>
    </Container>
  );
}
