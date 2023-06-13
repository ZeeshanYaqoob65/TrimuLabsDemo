import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import logo from "../assests/images/seed_for_me.png";

const useStyles = makeStyles({
  container: {
    padding: "10px",
  },
  modalContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 350,
    backgroundColor: "#fff",
    padding: "10px",
    margin: "30px auto",
    borderRadius: "10px",
  },
  image: {
    width: "200px",
    height: "100%",
    marginBottom: 10,
  },
  input: {
    width: "100%",
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
  text: {
    marginTop: 10,
  },
  textBold: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  priceContainer: {
    width: "100%",
    backgroundColor: "#384885",
    minHeight: "30px",
    margin: "10px 0px",
    borderRadius: "10px",
    color: "#FFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "18px",
    fontWeight: "bold",
  },
});

const ModalComponent = ({ open, onClose, received, total }) => {
  const classes = useStyles();
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [receivedAmount, setReceivedAmount] = useState(0);
  useEffect(() => {
    if (received) {
      setReceivedAmount(received);
    }
  }, [received]);
  const handleNext = () => {
    // Perform your post request here
    const data = {
      amount,
      name,
    };
    console.log(data);

    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} className={classes.container}>
      <div className={classes.modalContainer}>
        <img src={logo} alt="Modal Image" className={classes.image} />

        <div className={classes.textBold}>Enter amount you'll</div>
        <div className={classes.textBold}>raise 'Now At' total:</div>

        <TextField
          label="Amount"
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
          {" "}
          Now At ${receivedAmount} of ${total} Goal{" "}
        </div>
        <TextField
          label="Name"
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
        <p className={classes.text}>Some text here</p>
      </div>
    </Modal>
  );
};

export default ModalComponent;
