import React from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import footer from "../../../assests/images/seed_for_me_white.png";

const useStyles = makeStyles({
  footer: {
    marginTop:"20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    padding:'10px',
  
    backgroundColor: "#6D6E70",
    minHeight:188,
    height:"100%"
  },
  image: {
    width: "230px",
    height: "100%",
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
          <Link to="/terms-and-conditions" className={classes.link}>
            Terms and Conditions
          </Link>
        </div>
        <div>
          <p className={classes.text}>
            © Copyright & SM Service Mark SeedforMe. All rights expressly
            reserved. Nothing may be reproduced without express written
            permission of SeedforMe. Powered by The Holy Spirit.
          </p>
        </div>
     
    </footer>
  );
};

export default Footer;
