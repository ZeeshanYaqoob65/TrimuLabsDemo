import React from "react";
import { makeStyles } from "@mui/styles";
import backgroundImage from "../../assests/images/home_page.jpg"; // Replace with the path to your image

const useStyles = makeStyles({
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    backgroundColor:"black"
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit:"contain"
  },
});

const Home = () => {
  const classes = useStyles();

  const handleClick = () => {
    window.location.href = "https://apps.apple.com/app/seedforme/id1554240967"; // Replace with your desired URL
  };

  return (
    <div className={classes.container} onClick={handleClick}>
      <img src={backgroundImage} alt="Home" className={classes.image} />
    </div>
  );
};

export default Home;
