import React from "react";
import { makeStyles } from "@mui/styles";
import sms from "../../../assests/images/sms_yellow.png";
import { BASE_URL } from "../utils";
import AlterImg from "../../../assests/images/image_placeholder_small.png";
const useStyles = makeStyles({
  container: {
    display: "flex",
    width: "100%",

    "@media (min-width: 800px)": {
      height: "278px !important",
      borderRadius: 10,
      overflow: "hidden",
    },
  },
  image: {
    width: "126px",
    height: "126px",
    "@media (min-width: 800px)": {
      width: "278px",
      height: "278px",
    },
  },
  content: {
    flex: 1,
    padding: "12px 6px 11px 13px",
    background: " #48C7F4",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "@media (min-width: 800px)": {
      padding: "20px !important",
    },
  },
  name: {
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "19px",
    color: "#FFFFFF",
    "@media (min-width: 800px)": {
      fontSize: "22px !important",
    },
  },
  address: {
    marginTop: "5px",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "30px",
    color: "#FFFFFF",
    "@media (min-width: 800px)": {
      fontSize: "18px !important",
    },
  },
  letsTalk: {
    marginTop: "7px",
    display: "flex",
    alignItems: "center",
    gap: "4px",
    fontStyle: "normal",
    fontSize: "14px",
    lineHeight: "15px",
    textTransform: "uppercase",
    color: "#FFF065",
    "@media (min-width: 800px)": {
      fontSize: "20px !important",
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
  icon: {
    width: "20px",
    height: "20px",
    "@media (min-width: 800px)": {
      width: "35px",
      height: "35px",
    },
  },
  businessTag: {
    textTransform: "uppercase",
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
  const imgSrc =
    ProfilePicture !== null ? `${BASE_URL}${ProfilePicture}` : AlterImg;

  return (
    <div className={classes.container}>
      <img src={imgSrc} alt={AlterImg} className={classes.image} />
      <div className={classes.content}>
        <div className={classes.name}>{name}</div>
        <div className={classes.address}>
          <div>{charityName}</div>
          <div className={classes.businessTag}>{businessTag}</div>
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
