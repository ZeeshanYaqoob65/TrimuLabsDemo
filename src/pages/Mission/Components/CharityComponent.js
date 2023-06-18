import React from "react";
import { makeStyles } from "@mui/styles";
import { BASE_URL } from "../utils";
import AlterImg from "../../../assests/images/image_placeholder_small.png";

const useStyles = makeStyles({
  container: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "21px auto 0px auto",

    "@media (min-width: 800px)": {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      flexDirection: "row",
      gap: 40,
      textAlign: "left",
      margin: "0px",
      padding: 20,
    },
  },
  image: {
    width: "140px",
    height: "140px",
  },
  charityName: {
    fontSize: "18px",
    fontWeight: 500,
    textAlign: "center",
    marginTop: "10px",
  },
  charityAddress: {
    fontSize: "12px",
    color: "#7A7A7A",
    textAlign: "center",
  },
  contactInfo: {
    fontSize: "12px",
    color: "#7A7A7A",
    textAlign: "center",
  },
  irsText: {
    fontSize: "12px",
    color: "#7A7A7A",
    textAlign: "center",
  },
});

const CharityComponent = ({
  imageUrl,
  name,
  address,
  phone,
  email,
  website,
  taxEIN,
}) => {
  const classes = useStyles();
  const showImg = imageUrl !== null ? `${BASE_URL}${imageUrl} ` : AlterImg;

  return (
    <div className={classes.container}>
      <img src={showImg} alt={AlterImg} className={classes.image} />
      <div>
        <div className={classes.charityName}>{name}</div>
        <div className={classes.charityAddress}>{address}</div>
        <div className={classes.contactInfo}>
          {phone} {email} {website}
        </div>
        <div className={classes.irsText}>IRS Tax EIN: {taxEIN}</div>
      </div>
    </div>
  );
};

export default CharityComponent;
