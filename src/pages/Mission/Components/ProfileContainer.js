import React from "react";
import { makeStyles } from "@mui/styles";
import sms from "../../../assests/images/sms_yellow.png";
import { BASE_URL } from "../utils";
import AlterImg from "../../../assests/images/image_placeholder_small.png";
const useStyles = makeStyles({
  container: {
    display: "flex",
  },
  image: {
    width: "126px",
    height: "126px",
  },
  content: {
    flex: 1,
    padding: "12px 6px 11px 13px",
    background: " #48C7F4",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  name: {
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "19px",
    textTransform: "uppercase",
    color: "#FFFFFF",
  },
  address: {
    marginTop: "5px",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "15px",
  
    color: "#FFFFFF",
  },
  letsTalk: {
    marginTop: "7px",
    display: "flex",
    alignItems: "center",
    gap: "4px",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "15px",
    textTransform: "uppercase",
    color: "#FFF065",
  },
  icon: {
    width: "20px",
    height: "20px",
  },
});

const ProfileContainer = ({
  name,
  address,
  charityName,
  ProfilePicture,
  businessTag,
  phone,
}) => {
  const classes = useStyles();
  const handleLetsTalkClick = () => {
    console.log("handle clocke");
  
    try {
      const isMobile =
        typeof navigator !== "undefined" &&
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );

      if (isMobile) {
        // Show message to manually compose SMS
        window.location.href = `sms:${phone}`;
      } else {
        // Show message with phone number to copy
        window.location.href = `sms:${phone}`;
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  const imgSrc = ProfilePicture !== null ?  `${BASE_URL}${ProfilePicture}` : AlterImg;

  return (
    <div className={classes.container}>
      <img src={imgSrc} alt={AlterImg} className={classes.image}  />
      <div className={classes.content}>
        <div className={classes.name}>{name}</div>
        <div className={classes.address}>
          <div>{charityName}</div>
          <div>{businessTag}</div>
        </div>
        <div className={classes.letsTalk} onClick={handleLetsTalkClick}>
          <div>
            <img src={sms} className={classes.icon}></img>
          </div>
          <div>Let’s Talk</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContainer;
