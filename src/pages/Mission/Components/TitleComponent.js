import React from "react";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";

import backgroundImage from "../../../assests/images/dummy_image.png";
import Share from "../../../assests/images/web_share_img.png";
import TitleButton from "../../../components/TitleButton";

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
    fontSize: "32px",
    lineHeight: "38px",
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
}) {
  const classes = useStyles();
  const goal = new Intl.NumberFormat().format(goal_amount);
  const received = new Intl.NumberFormat().format(received_amount);
  const handleShareClick = () => {};
  const handleClick = () => {
    window.location.href = "https://www.youtube.com/watch?v=cv8Ee15MsNw";
  };

  return (
    <Container className={classes.container}>
      <div className={classes.title}>{title}</div>
      <div className={classes.amount}>
        ${received} of ${goal}
      </div>
      <div className={classes.buttons}>
        <TitleButton title="Donate" />
        <TitleButton title="Selling Property ?" onClick={handleClick} />
      </div>
    </Container>
  );
}
