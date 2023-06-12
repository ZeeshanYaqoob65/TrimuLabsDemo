import React from "react";
import { makeStyles } from "@mui/styles";
import youtube from "../../../assests/images/youtube_img.png";
import zoomImg from "../../../assests/images/zoom_img.png";

const useStyles = makeStyles({
  container: {
    display: "flex",
  
    background: "#F1F1F3",
  },
  image: {
    width: "149px",
    height: "149px",
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
    marginBottom: "4px",
    lineHeight:"20px",
    color:'#000000',
    textTransform:"uppercase"
  },
  eventDate: {
    fontSize: "16px",
    fontWeight:500,
    lineHeight:"20px",
  
  },
  eventTime: {
    fontSize: "16px",
    marginBottom: "8px",
    lineHeight:"20px",
  },
  liveButton: {
    fontSize: "20px",
    fontWeight: 700,
    height:"45px",
    width:"100%",
    color: "#FFFF",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    backgroundColor: "#E22432",
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
    display:'flex',
    flexDirection:"column",
    justifyContent:"space-between",
    padding: "14px 8px 11px 16px",
  },
});

const EventComponent = ({
  imageUrl,
  eventType,
  eventName,
  eventDate,
  eventStartTime,
  eventEndTime,
  missionImage
}) => {
  const classes = useStyles();

  const currentDate = new Date();
  const formattedCurrentDate = currentDate.toISOString().split("T")[0];

// event date time 
const dateTime = new Date(eventDate);
const formatter = new Intl.DateTimeFormat('en-US', { weekday: 'long', month: '2-digit', day: '2-digit', year: 'numeric' });
const formattedDate = formatter.format(dateTime);


//event start time 

const endTime = new Date(eventEndTime);
console.log(eventEndTime)
const options = { hour: 'numeric', minute: '2-digit', hour12: true };
const EndTime = endTime.toLocaleTimeString('en-US', options);

console.log(EndTime);

const STARTtiME = new Date(eventStartTime);
const option = { hour: 'numeric', minute: '2-digit', hour12: true };
const STARTTIME = STARTtiME.toLocaleTimeString('en-US', option);

console.log(STARTTIME);

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

  return (
    <div className={classes.container}>
      <div className={classes.background}>
        <img src={imageUrl} alt="Event Image" className={classes.image} />
        <div className={classes.renderIcon}>{renderIcon()}</div>
      </div>
      <div className={classes.eventDetails}>
        <div className={classes.eventName}>{eventName}</div>
        <div className={classes.eventDate}>{formattedDate}</div>
        <div
          className={classes.eventTime}
        >{`${STARTTIME} - ${EndTime}`}</div>
        {isLiveEvent && (
          <button className={classes.liveButton}>LIVE ONLINE</button>
        )}
      </div>
    </div>
  );
};

export default EventComponent;
