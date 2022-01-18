import React from "react";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <div style={style}>
      <p>
        Please input the email you used to register with us to reset your
        password!
      </p>
      <TextField
        id="outlined-basic"
        label="Email"
        sx={{ m: 1, width: "25ch" }}
        // variant="outlined"
      />
      <Link to="/">
        <Button
          variant="outlined"
          sx={{ m: 1, width: "25ch" }}
          // variant="outlined"
        >
          Reset Password
        </Button>
      </Link>
    </div>
  );
};

export default ForgotPassword;
