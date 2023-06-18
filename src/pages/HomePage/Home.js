import React from "react";
import { makeStyles } from "@mui/styles";
import backgroundImage from "../../assests/images/home_page.jpg"; // Replace with the path to your image
import NavbarComponent from "./Components/NavbarComponent";
import ImageHome from "./Components/ImageHome";
import TitleHome from "./Components/TitleHome";
import DiscriptionHome from "./Components/DiscriptionHome";
import FooterWeb from "../Mission/web/FooterWeb";
import { HomeText, HomeText2 } from "./utils";
import YoutubeHome from "./Components/YoutubeHome";

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
});

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <NavbarComponent />
      <ImageHome />
      <TitleHome />
      <DiscriptionHome text={HomeText} />
      <DiscriptionHome text={HomeText2} />
      {/* <div style={{ marginTop: 20 }}>
        <YoutubeHome />
      </div> */}
      <FooterWeb />
    </>
  );
};

export default Home;
