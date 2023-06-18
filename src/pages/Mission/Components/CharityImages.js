import React from "react";
import { makeStyles } from "@mui/styles";
import zoomImg from "../../../assests/images/dummy_image_3.png";
import { BASE_URL } from "../utils";

const useStyles = makeStyles({
  sliderContainer: {
    display: "flex",
    overflowX: "auto",
    scrollBehavior: "smooth",
    width: "100%",
    marginTop: "10px",
    marginBottom: "10px",
    paddingLeft: "12px",
    paddingRight: "12px",
    "-ms-overflow-style": "none" /* IE and Edge */,
    scrollbarWidth: "none" /* Firefox */,
    "&::-webkit-scrollbar": {
      display: "none" /* Chrome, Safari, and Opera */,
    },
    "@media (min-width: 800px)": {
      padding: "0px !important",
    },
  },
  slide: {
    flexShrink: 0,
    width: "305px",
    height: "305px",
    marginRight: "11px",
    "@media (min-width: 800px)": {
      width: (props) => (props.webImagesWidth ? props.webImagesWidth : "305px"),
      height: (props) =>
        props.webImagesWidth ? props.webImagesWidth : "305px",
    },
  },
  slideLastChild: {
    marginRight: "0",
  },
  slideImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "12px",
  },
});

const CharityImages = ({ id, imageUrls, webImagesWidth }) => {
  const classes = useStyles({ webImagesWidth });

  return (
    <div className={classes.sliderContainer}>
      {imageUrls.map((imageUrl, index) => (
        <>
          {imageUrl.picture_path !== null ? (
            <div
              key={index}
              className={`${classes.slide} ${
                index === imageUrls.length - 1 ? classes.slideLastChild : ""
              }`}
            >
              <img
                key={index}
                src={`${BASE_URL}${imageUrl.picture_path}`}
                alt={`Image ${index + 1}`}
                className={classes.slideImage}
              />
            </div>
          ) : null}
        </>
      ))}
    </div>
  );
};

export default CharityImages;
