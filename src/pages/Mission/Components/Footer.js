import React from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import footer from "../../../assests/images/seed_for_me_white.png";

const useStyles = makeStyles({
  footer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "23px 30px 29px 30px",
    backgroundColor: "#6D6E70",
  },
  image: {
    width: "158px",
    height: "29px",
    marginBottom: "16px",
  },
  link: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "14px",
    color: "#FFFF",
  },
  text: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "8px",
    lineHeight: "14px",
    color: "#FFFF",
    textTransform: "uppercase",
    opacity: 0.7,
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.footerContent}>
        <div>
          <img src={footer} alt="Footer Image" className={classes.image} />
        </div>

        <Link to="/terms-and-conditions" className={classes.link}>
          Terms and Conditions
        </Link>
        <p className={classes.text}>
          © Copyright & SM Service Mark SeedforMe. All rights expressly
          reserved. Nothing may be reproduced without express written permission
          of SeedforMe. Powered by The Holy Spirit.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
