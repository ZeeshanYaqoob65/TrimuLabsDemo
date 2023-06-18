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

  const handleClick = () => {
    window.location.href = "https://apps.apple.com/app/seedforme/id1554240967"; // Replace with your desired URL
  };

  return (
    <>
      <NavbarComponent />
      <ImageHome />
      <TitleHome />
      <DiscriptionHome text={HomeText} />
      <DiscriptionHome text={HomeText2} />
      <YoutubeHome />
      <FooterWeb />
    </>
  );
};

export default Home;
