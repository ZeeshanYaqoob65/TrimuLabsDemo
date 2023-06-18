import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";

import backgroundImage from "../../../assests/images/dummy_image.png";
import Share from "../../../assests/images/web_share_img.png";
import TitleButton from "../../../components/TitleButton";
import ModalComponent from "../../../components/ModalComponent";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import Play from "../../../assests/images/web_play_img.png";
import faceBook from "../../../assests/images/facebook_white_small.png";
import twitter from "../../../assests/images/twitter_white_small.png";
import whatsapp from "../../../assests/images/whatsapp_white_small.png";
import message from "../../../assests/images/speech_white_small.png";
import mailbox from "../../../assests/images/email_img.png";
import Button from "../../../components/Button";

const useStyles = makeStyles({
  container: {
    background: "#3971AE",
    width: "100% !important",
    display: "flex !important",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  title: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "35px",
    lineHeight: "40px",
    color: "#FFFFFF",
    textAlign: "center !important",
  },
  amount: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "30px",
    color: "#EDBE49",
    marginTop: "12px",
    marginBottom: "18px",
    textAlign: "center",
  },
  buttons: {
    display: "flex",
    gap: "16px",
    width: "100%",
    maxWidth: "350px",
  },
  YouTube: {
    marginBottom: 20,
  },
  share: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    color: "white",
    position: "absolute",
    top: 30,
    right: 20,
  },
  shareText: {
    fontSize: 16,
  },
  iconMail: {
    filter: "invert(100%) brightness(1000) contrast(1000)",
    width: 26,
    "&:hover": {
      cursor: "pointer",
    },
  },
  icons: {
    width: 26,
    "&:hover": {
      cursor: "pointer",
    },
  },
});

export default function TitleWeb({
  title,
  goal_amount,
  received_amount,
  eventStartTime,
  eventEndTime,
  missionUrl,
  payment_keys
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

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
  const URL = window.location.href;

  const formattedDateTime = formatDateAndTime(eventEndTime);
  const goal = new Intl.NumberFormat().format(goal_amount);
  const received = new Intl.NumberFormat().format(received_amount);
  const handleShareClick = () => {
    window.location.href = missionUrl;
  };
  const handleClick = () => {
    window.location.href = "https://www.youtube.com/watch?v=cv8Ee15MsNw";
  };

  const handleFacebookShare = () => {
    const facebookUrl = `https://www.facebook.com/share.php?u=${encodeURIComponent(
      URL
    )}`;
    window.open(facebookUrl);
  };

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      URL
    )}&text=`;
    window.open(twitterUrl);
  };

  const handleEmailShare = () => {
    const emailUrl = `mailto:?&subject=&cc=&bcc=&body=${encodeURIComponent(
      URL
    )}`;
    window.location.href = emailUrl;
  };
  const handleWhatsAppShare = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      URL
    )}`;
    window.open(whatsappUrl);
  };

  const handleSMSShare = () => {
    const message = "";
    const smsUrl = `sms:&body=${encodeURIComponent(message + URL)}`;
    window.location.href = smsUrl;
  };

  return (
    <>
      <ModalComponent
        open={open}
        onClose={handleClose}
        total={goal_amount}
        received={received_amount}
        payment_keys={payment_keys}
      />
      <Container className={classes.container}>
        <div className={classes.share}>
          <div className={classes.shareText}>Share Mission</div>
          <div>
            <img
              src={faceBook}
              alt="Button Icon"
              className={classes.icons}
              onClick={handleFacebookShare}
            />
          </div>
          <div>
            <img
              src={twitter}
              alt="Button Icons"
              className={classes.icons}
              onClick={handleTwitterShare}
            />
          </div>
          <div>
            <img
              src={whatsapp}
              alt="Button Icons"
              className={classes.icons}
              onClick={handleWhatsAppShare}
            />
          </div>
          <div>
            <img
              src={message}
              alt="Button Icons"
              className={classes.icons}
              onClick={handleSMSShare}
            />
          </div>
          <div>
            <img
              src={mailbox}
              alt="Button Icon"
              className={classes.iconMail}
              onClick={handleEmailShare}
            />
          </div>
        </div>
        {isBetweenTimeRange && (
          <div className={classes.YouTube}>
            <Button
              backgroundColor={"#FF0000"}
              onClick={handleShareClick}
              title={`Live ${formattedDateTime}`}
              icon={Play}
              color="#FFFF"
              isUpperCase={false}
            />
          </div>
        )}

        <div className={classes.title}>{title}</div>
        <div className={classes.amount}>
          ${received} Of ${goal}
        </div>
        <div className={classes.buttons}>
          <TitleButton title="Donate" onClick={handleOpen} />
          <TitleButton title="Selling Property?" onClick={handleClick} />
        </div>
      </Container>
    </>
  );
}
