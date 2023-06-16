import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import youtube from "../../../assests/images/youtube_img.png";
import zoomImg from "../../../assests/images/zoom_img.png";
import { BASE_URL } from "../utils";

const useStyles = makeStyles({
  container: {
    display: "flex",
    background: "#F1F1F3",
    "@media (min-width: 800px)": {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "0px !important",
      borderRadius: "10px",
      overflow: "hidden",
      position: "relative",
      width:"358px",
      width:"100%"

    
    },
  },
  image: {
    width: "149px",
    height: "149px",
    "@media (min-width: 800px)": {
      width: "100%",
      height: "100%",
    },
  },
  icon: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70px",
    height: "70px",
  },
  eventName: {
    fontSize: "16px",
    fontWeight: 700,
    marginBottom: "20px",
    lineHeight: "20px",
    color: "#000000",
  },
  eventDate: {
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "20px",
  },
  eventTime: {
    fontSize: "16px",
    marginBottom: "8px",
    lineHeight: "20px",
  },
  liveButton: {
    fontSize: "20px",
    fontWeight: 700,
    height: "45px",
    width: "100%",
    color: "#FFFF",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    backgroundColor: "#E22432",
    "@media (min-width: 800px)": {
      display: "none",
    },
  },
  renderIcon: {
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: 2,
  },
  background: {
    position: "relative",
  },
  eventDetails: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "14px 8px 11px 16px",

    "@media (min-width: 800px)": {
      padding: "14px 0px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
  },
  buttonWebLive: {
    display: "none",

    "@media (min-width: 800px)": {
      display: "flex",
      position: "absolute",
      width: "100%",
      backgroundColor: "red",
      height: "40px",
      top: 0,
      left: 0,
      zIndex: 1,
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      color: "white",
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "18px",
      lineHeight: "19px",
    },
  },
});

const EventComponent = ({
  imageUrl,
  eventType,
  eventName,
  eventDate,
  eventStartTime,
  eventEndTime,
  missionImage,
  missionUrl,
}) => {

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

  const classes = useStyles();
  const imgSrc = `${BASE_URL}${imageUrl}`;
  const currentDate = new Date();
  const formattedCurrentDate = currentDate.toISOString().split("T")[0];

  // event date time
  const dateTime = new Date(eventDate);
  const formatter = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
  const formattedDate = formatter.format(dateTime);

  //event start time

  const endTime = new Date(eventEndTime);

  const options = { hour: "numeric", minute: "2-digit", hour12: true };
  const EndTime = endTime.toLocaleTimeString("en-US", options);

  const STARTtiME = new Date(eventStartTime);
  const option = { hour: "numeric", minute: "2-digit", hour12: true };
  const STARTTIME = STARTtiME.toLocaleTimeString("en-US", option);

  const isLiveEvent =
    eventDate === formattedCurrentDate &&
    currentDate >= new Date(formattedCurrentDate + "T" + eventStartTime) &&
    currentDate <= new Date(formattedCurrentDate + "T" + eventEndTime);

  const renderIcon = () => {
    if (eventType === 0) {
      return <img src={youtube} alt="YouTube Icon" className={classes.icon} />;
    } else if (eventType === 1) {
      return <img src={zoomImg} alt="Zoom Icon" className={classes.icon} />;
    } else {
      return null;
    }
  };
  const handleImgClick = () => {
    window.location.href = missionUrl;
  };

  return (
    <div className={classes.container}>
      {isBetweenTimeRange && (
        <div className={classes.buttonWebLive}>LIVE ONLINE</div>
      )}

      <div className={classes.background} onClick={handleImgClick}>
        <img src={imgSrc} alt="Event Image" className={classes.image} />
        <div className={classes.renderIcon}>{renderIcon()}</div>
      </div>
      <div className={classes.eventDetails}>
        <div>
          <div className={classes.eventName}>{eventName}</div>
          <div className={classes.eventDate}>{formattedDate}</div>
          <div className={classes.eventTime}>{`${STARTTIME} - ${EndTime}`}</div>
        </div>

        {isBetweenTimeRange && (
          <button className={classes.liveButton}>LIVE ONLINE</button>
        )}
      </div>
    </div>
  );
};

export default EventComponent;
