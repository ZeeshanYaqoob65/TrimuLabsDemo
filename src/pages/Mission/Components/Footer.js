import React from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import footer from "../../../assests/images/seed_for_me_white.png";

const useStyles = makeStyles({
  footer: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
    gap:20,

    backgroundColor: "#3d3d3d",
    minHeight: 188,
    height: "100%",
  },
  image: {
    height: "40px",
  },
  link: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "14px",
    color: "#FFFF",
    textDecoration:"none"
  },
  text: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "10px",
    lineHeight: "14px",
    color: "#FFFF",
   
  },
  footerContent: {
    display: "flex",
    flexDirection: "column",

    alignItems: "center",
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div>
        <img src={footer} alt="Footer Image" className={classes.image} />
      </div>
      <div>
        <Link to="/terms" className={classes.link}>
          Terms and Conditions
        </Link>
      </div>
      <div>
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
