import React from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import footer from "../../../assests/images/seed_for_me_white.png";
import Divider from "../../../components/Divider";

const useStyles = makeStyles({
  footer: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    textAlign: "center",

    backgroundColor: "#3d3d3d",
    minHeight: 188,
    height: "100%",
  },
  image: {
    width: "230px",
    height: "40px",
  },
  link: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "14px",
    color: "#FFFF",
    textDecoration:'none'
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
  footerContent: {
    display: "flex",
    flexDirection: "column",

    alignItems: "center",
  },
  FooterWeb: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  divdiers: {
    margin: "30px 0px auto 0px",
    paddingLeft: 20,
    paddingRight: 20,
  },
});

const FooterWeb = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.FooterWeb}>
        <div>
          <img src={footer} alt="Footer Image" className={classes.image} />
        </div>
        <div>
          <Link to="/terms-and-conditions" className={classes.link}>
            Terms and Conditions
          </Link>
        </div>
      </div>
      <div className={classes.divdiers}>
        <Divider />
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

export default FooterWeb;
