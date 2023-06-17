import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";

import backgroundImage from "../../../assests/images/dummy_image.png";
import Share from "../../../assests/images/web_share_img.png";
import TitleButton from "../../../components/TitleButton";
import ModalComponent from "../../../components/ModalComponent";

const useStyles = makeStyles({
  container: {
    background: "#3971AE",
    maxWidth: "800px",
    width: "100%",
    padding: "19px",
  },
  title: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "32px",
    lineHeight: "38px",
    color: "#FFFFFF",
  },
  amount: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "30px",
    color: "#EDBE49",
    marginTop: "12px",
    marginBottom: "18px",
  },
  buttons: {
    display: "flex",
    gap: "16px",
  },
});

export default function TitleComponent({
  title,
  goal_amount,
  received_amount,
  payment_keys,
}) {
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
      <ModalComponent open={open} onClose={handleClose} total={goal_amount} received={received_amount} payment_keys={payment_keys}/>
      <Container className={classes.container}>
        <div className={classes.title}>{title}</div>
        <div className={classes.amount}>
          ${received} of ${goal}
        </div>
        <div className={classes.buttons}>
          <TitleButton title="Donate" onClick={handleOpen} />
          <TitleButton title="Selling Property?" onClick={handleClick} />
        </div>
      </Container>
    </>
  );
}
