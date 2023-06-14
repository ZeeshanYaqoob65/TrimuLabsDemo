import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";

import backgroundImage from "../../../assests/images/dummy_image.png";
import Share from "../../../assests/images/web_share_img.png";
import TitleButton from "../../../components/TitleButton";
import ModalComponent from "../../../components/ModalComponent";

const useStyles = makeStyles({
  container: {
    background: "#3971AE",
    width: "100% !important",
    display: "flex !important",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "22px",
    lineHeight: "28px",
    color: "#FFFFFF",
    textAlign: "center !important",
  },
  amount: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "23px",
    color: "#EDBE49",
    marginTop: "12px",
    marginBottom: "18px",
  },
  buttons: {
    display: "flex",
    gap: "16px",
    width: "100%",
    maxWidth:"350px"
  },
});

export default function TitleWeb({ title, goal_amount, received_amount }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const goal = new Intl.NumberFormat().format(goal_amount);
  const received = new Intl.NumberFormat().format(received_amount);
  const handleShareClick = () => {};
  const handleClick = () => {
    window.location.href = "https://www.youtube.com/watch?v=cv8Ee15MsNw";
  };

  return (
    <>
      <ModalComponent
        open={open}
        onClose={handleClose}
        total={goal_amount}
        received={received_amount}
      />
      <Container className={classes.container}>
        <div className={classes.title}>{title}</div>
        <div className={classes.amount}>
          ${received} of ${goal}
        </div>
        <div className={classes.buttons}>
          <TitleButton title="Donate" onClick={handleOpen} />
          <TitleButton title="Selling Property ?" onClick={handleClick} />
        </div>
      </Container>
    </>
  );
}
