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
    position: "sticky",
    top: 0,
    left: 0,
    paddingLeft: 40,
 
  },
 
});

const NavbarComponent = () => {
  const classes = useStyles();

  return (
    <Navbar
      className={classes.navContainer}
      style={{ backgroundColor: "#edbe49", position: "sticky", zIndex: 4 }}
    >
      <Navbar.Brand >
        <img
          src={logo}
          width={160}
          height={30}
       
          className={classes.navbarstyle}
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavbarComponent;
