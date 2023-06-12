import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: "auto",
  },
  title: {
    position: "absolute",
    bottom: "10px",
    left: "20px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "white",
    zIndex: 1,
  },
  link: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: 2,
  },
});

const SellProperty = ({ imageUrl, title, url }) => {
  const classes = useStyles();

  const handleClick = () => {
    window.location.href = url;
  };

  return (
    <div className={classes.container}>
      <img src={imageUrl} alt="Property" className={classes.image} />
      <div className={classes.title}>{title}</div>
      <a href={url} target="_blank" rel="noopener noreferrer" className={classes.link} onClick={handleClick}></a>
    </div>
  );
};

export default SellProperty;
