import React, { useRef, useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import backgroundImage from "../assests/images/arrowdown.png";

const useStyles = makeStyles({
  overflow: {
    color: "#464646",
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-line-clamp": (props) =>
      props.showLessButton ? "none" : `${props.lineLimit}`, // Adjust the number of lines to show
    "-webkit-box-orient": "vertical",
  },
  readMoreButton: {
    fontSize: "16px",
    color: "#48C7F4",
  },
  ButtonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  icon: {
    marginTop: "5px",
    marginLeft: "9px",
    width: "10px",
    height: "5px",
  },
  ParagraphStyle: {
    padding: "20px 20px 10px 20px",
  },
});

const Paragraph = ({ text, lineLimit }) => {
  const [showFull, setShowFull] = useState(false);
  const [isOverflowed, setIsOverFlowed] = useState(false);
  const [showMoreButton, setShowMoreButton] = useState(false);
  const paragraphRef = useRef(null);
  const [lineCount, setLineCount] = useState(0);
  const [showLessButton, setshowLessButton] = useState(false);

  useEffect(() => {
    const paragraphElement = paragraphRef.current;
    const lineHeight = parseInt(
      window.getComputedStyle(paragraphElement).lineHeight
    );
    const paragraphHeight = paragraphElement.clientHeight;
    const lineCount = Math.round(paragraphHeight / lineHeight);

    setLineCount(lineCount);
  }, [text]);
  const handleClick = () => {
    setShowMoreButton(!showMoreButton);
    setshowLessButton(!showLessButton);
  };

  useEffect(() => {
    if (lineCount) {
      if (lineCount > lineLimit) {
        setIsOverFlowed(true);
        setShowMoreButton(true);
      }
    }
  }, [lineCount]);

  const classes = useStyles({ showFull, showLessButton, lineLimit });

  return (
    <div>
      <div className={classes.ParagraphStyle}>
        <p
          ref={paragraphRef}
          className={isOverflowed && showMoreButton ? classes.overflow : ""}
        >
          {text}
        </p>
      </div>
      {showMoreButton && (
        <div className={classes.ButtonContainer}>
          <div
            role="button"
            className={classes.readMoreButton}
            onClick={handleClick}
          >
            Read More
          </div>
          <img
            src={backgroundImage}
            alt="Button Icon"
            className={classes.icon}
          />
        </div>
      )}
      {showLessButton && (
        <div className={classes.ButtonContainer}>
          <div
            role="button"
            className={classes.readMoreButton}
            onClick={handleClick}
          >
            Read Less
          </div>
          <img
            src={backgroundImage}
            alt="Button Icon"
            className={classes.icon}
          />
        </div>
      )}
    </div>
  );
};

export default Paragraph;
