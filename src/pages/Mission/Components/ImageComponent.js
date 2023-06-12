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
  },
  shareButton: {
    position: "absolute",
    top: "11px",
    right: "10px",
  },

  YouTube: {
    position: "absolute",
    bottom: "10px",
    left: "13px",
  },
});

export default function ImageComponent({ backgroundImage }) {
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
          backgroundColor={"white"}
          onClick={handleShareClick}
          title={"Share Mission"}
          icon={Share}
        ></Button>
      </div>

      {/* <div className={classes.YouTube}>
        <Button backgroundColor={'#E5202B'} onClick={handleShareClick} title={"Youtube"} icon={Share} ></Button>
     </div > */}
    </Container>
  );
}
