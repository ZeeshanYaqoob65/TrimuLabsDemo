import React from "react";
import { makeStyles } from "@mui/styles";
import { BASE_URL } from "../utils";

const useStyles = makeStyles({
  container: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "21px auto",
  },
  image: {
    width: "140px",
    height: "140px",
  },
  charityName: {
    fontSize: "18px",
    fontWeight: 500,
    marginBottom: "6px",
    marginTop: "9px",
  },
  charityAddress: {
    fontSize: "12px",
    color: "#7A7A7A",
  },
  contactInfo: {
    fontSize: "12px",
    marginBottom: "8px",
    color: "#7A7A7A",
  },
  irsText: {
    fontSize: "12px",
    marginBottom: "8px",
    color: "#7A7A7A",
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

  return (
    <div className={classes.container}>
      <img
        src={`${BASE_URL}${imageUrl} `}
        alt="Charity"
        className={classes.image}
      />
      <div className={classes.charityName}>{name}</div>
      <div className={classes.charityAddress}>{address}</div>
      <div className={classes.contactInfo}>
        {phone} {email} {website}
      </div>
      <div className={classes.irsText}>IRS Tax EIN: {taxEIN}</div>
    </div>
  );
};

export default CharityComponent;
