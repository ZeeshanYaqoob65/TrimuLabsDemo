import React from "react";
import { makeStyles } from "@mui/styles";

import Navbar from "react-bootstrap/Navbar";
import logo from "../../../assests/images/seed_for_me_white.png";

const useStyles = makeStyles({
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    backgroundColor: "black",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  navContainer: {
  position:"absolute",
    top: 30,
    left: 0,
    paddingLeft: 40,
    zIndex:4,
 
  },
 
});

const NavbarComponent = () => {
  const classes = useStyles();

  return (
    <div
      className={classes.navContainer}
    
    >
      <div>
        <img
          src={logo}
          width={160}
          height={30}
       
          className={classes.divstyle}
          alt="React Bootstrap logo"
        />
      </div>
    </div>
  );
};

export default NavbarComponent;
