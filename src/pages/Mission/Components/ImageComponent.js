import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";

import backgroun from "../../../assests/images/dummy_image.png";
import Share from "../../../assests/images/web_share_img.png";
import Play from "../../../assests/images/web_play_img.png";
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

    "@media (min-width: 800px)": {
      display: "block",
      margin: "0px !important",
      paddingBottom: "0px !important",
    },
  },
  shareButton: {
    position: "absolute",
    top: "15px",
    right: "18px",
    "@media (min-width: 800px)": {
      display: "none",
    },
  },
  btn: {
    fontWeight: "500px !important",
    color: "black",
  },
  YouTube: {
    position: "absolute",
    bottom: "10px",
    left: "13px",
  },
});

export default function ImageComponent({
  backgroundImage,
  eventStartTime,
  eventEndTime,
}) {
  const [isBetweenTimeRange, setIsBetweenTimeRange] = useState(false);

  useEffect(() => {
    const checkTimeRange = () => {
      const currentTime = new Date(); // Get current time

      const startTime = new Date(eventStartTime);
      const endTime = new Date(eventEndTime);

      if (currentTime >= startTime && currentTime <= endTime) {
        setIsBetweenTimeRange(true);
      } else {
        setIsBetweenTimeRange(false);
      }
    };

    checkTimeRange();
  }, []);
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

  const formatDateAndTime = (dateTime) => {
    const date = new Date(dateTime);
    const formattedDate = date.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    return `${formattedDate} ${formattedTime}`;
  };
  const formattedDateTime = formatDateAndTime(eventEndTime);

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
        />
      </div>
      {isBetweenTimeRange && (
        <div className={classes.YouTube}>
          <Button
            backgroundColor={"#E5202B"}
            onClick={handleShareClick}
            title={`Live ${formattedDateTime}`}
            icon={Play}
            color="#FFFF"
          />
        </div>
      )}
    </Container>
  );
}
