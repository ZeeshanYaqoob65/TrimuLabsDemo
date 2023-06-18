import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import logo from "../assests/images/seed_for_me.png";
import paypal from "../assests/images/paypal_h.png";
// import closeIcon from "../assests/images/close_btn.png";
import InputAdornment from "@mui/material/InputAdornment";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useParams } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const useStyles = makeStyles({
  container: {
    padding: "10px",
    overflowY: "scroll",
  },
  modalContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 340,
    backgroundColor: "#fff",
    padding: "10px",
    margin: "10px auto",
    borderRadius: "10px",
  },
  image: {
    width: "200px",
    height: "100%",
    marginBottom: 10,
  },
  input: {
    width: "100%",
  },
  button: {
    marginTop: "20px !important",
    width: "100%",
    backgroundColor: "#EDBE49 !important",
    color: "black !important",
    fontSize: "16px !important",
    borderRadius: "10px !important",
  },
  text: {
    fontWeight: "bold",
    color: "#0a2163",
    fontSize: "15px",
  },
  textBold: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  priceContainer: {
    width: "100%",
    backgroundColor: "#0a2163",
    minHeight: "40px",
    margin: "10px 0px",
    borderRadius: "10px",
    color: "#FFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "18px",
    fontWeight: "bold",
  },
  paypal: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paypalImg: {
    width: "70px",
    height: "100%",
    margin: "0px 5px",
  },
  paypalText: {
    marginTop: "20px",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    color: "#7A7A7A",
    lineHeight: "20px",
    textAlign: "justify",
    marginBottom: "10px",
  },
  close: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  closeImg: {
    width: "27px",
    height: "100%",
    marginRight: "10px",
  },
});

const ModalComponent = ({ open, onClose, received, total, payment_keys }) => {
  const classes = useStyles();
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [receivedAmount, setReceivedAmount] = useState(0);
  const { id } = useParams();
  useEffect(() => {
    if (received) {
      setReceivedAmount(received);
    }
  }, [received]);
  const handleNext = async () => {
    try {
      const url = "https://seedapis.seedforme.com/api/v1/payment";
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          missionId: id,
          amount: amount,
          user_name: name,
          email: "",
          description: "",
        }),
      };

      const response = await fetch(url, requestOptions);
      const data = await response.json();

      window.open(payment_keys, "_blank");

      onClose();
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Modal open={open} onClose={onClose} className={classes.container}>
      <div className={classes.modalContainer}>
        <div className={classes.close}>
          <CloseIcon
            className={classes.closeImg}
            onClick={onClose}
            sx={{ color: "#ff0000", fontWeight: "bold" }}
          />
        </div>
        <img src={logo} alt="Modal Image" className={classes.image} />

        <div className={classes.textBold}>Enter amount you'll</div>
        <div className={classes.textBold}>raise 'Now At' total:</div>

        <TextField
          label=""
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AttachMoneyIcon sx={{ color: "black" }} />
              </InputAdornment>
            ),
          }}
          value={amount}
          onChange={(e) => {
            const input = e.target.value;
            const newAmount = parseInt(input, 10);
            if (!isNaN(newAmount)) {
              setAmount(newAmount);
              setReceivedAmount(newAmount + received);
            } else {
              setAmount("");
              setReceivedAmount(received);
            }
          }}
          className={classes.input}
        />
        <div className={classes.priceContainer}>
          Now At ${receivedAmount} Of ${total} Goal{" "}
        </div>
        <TextField
          label="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={classes.input}
        />
        <Button
          variant="contained"
          onClick={handleNext}
          className={classes.button}
        >
          Next
        </Button>
        <div className={classes.paypal}>
          <div className={classes.text}>Going to</div>

          <img src={paypal} alt={paypal} className={classes.paypalImg} />

          <div className={classes.text}>enter donation there</div>
        </div>
        <div className={classes.paypalText}>
          Donations go direct to the charity via PayPal preferenced for
          missionary or minister. SeedForMe does not receive donation money or
          fees from PayPal. Preferencing support for worker is secondary to
          gifts use by the charity. Worker’s mission or ministry is to be
          conducted under direction of the charity and its board approves
          worker’s budget.
        </div>
      </div>
    </Modal>
  );
};

export default ModalComponent;
