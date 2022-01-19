import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../redux/reducers/userReducer";
import { useHistory } from "react-router-dom";
import axios from "axios";

const EditProfile = () => {
  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    dispatch(userActions.setEmail(e.target.value));
  };
  const handleNameChange = (e) => {
    dispatch(userActions.setName(e.target.value));
  };
  const handleAddressChange = (e) => {
    dispatch(userActions.setAddress(e.target.value));
  };
  const handleCountryChange = (e) => {
    dispatch(userActions.setCountry(e.target.value));
  };
  const handlePostalChange = (e) => {
    dispatch(userActions.setPostal(e.target.value));
  };
  const handlePhoneChange = (e) => {
    dispatch(userActions.setPhone(e.target.value));
  };
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("update user!");
    console.log(typeof user.accessToken);

    //throw to database
    const res = await axios.put(
      `/api/users/${user.id}`, //url
      {
        name: user.name,
        email: user.email,
        address: user.address,
        country: user.country,
        postal: user.postal,
        phone: user.phone,
      }, //request
      { headers: { token: `Bearer ${user.accessToken}` } }, //configuration is optional
      // { withCredentials: true }
    );
    console.log(res);
    history.goBack(); //can only come from profile page
  };

  const submissionCheck = () => {
    return (
      user.email === "" ||
      user.name === "" ||
      user.address === "" ||
      user.country === "" ||
      user.postal === "" ||
      user.phone === null
    );
  };
  console.log(user);

  return (
    <div>
      <header>
        <p>EDIT YOUR ACCOUNT</p>
      </header>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Email"
          sx={{ m: 1, width: "52ch" }}
          type="string"
          value={user.email}
          onChange={handleEmailChange}
          // variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="First name"
          sx={{ m: 1, width: "52ch" }}
          type="text"
          value={user.name}
          // variant="outlined"
          onChange={handleNameChange}
        />
        <TextField
          id="outlined-basic"
          label="Address"
          sx={{ m: 1, width: "52ch" }}
          type="text"
          value={user.address}
          onChange={handleAddressChange}
          // variant="outlined"
        />
        <div className="postal" style={{ display: "flex" }}>
          <TextField
            id="outlined-basic"
            label="Country"
            sx={{ m: 1, width: "25ch" }}
            type="text"
            value={user.country}
            onChange={handleCountryChange}
            // variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Postal Code"
            sx={{ m: 1, width: "25ch" }}
            type="text"
            value={user.postal}
            onChange={handlePostalChange}
            // variant="outlined"
          />
        </div>
        <div className="contact" style={{ display: "flex" }}>
          <TextField
            id="outlined-basic"
            label="Phone Number"
            sx={{ m: 1, width: "52ch" }}
            type="number"
            value={user.phone}
            onChange={handlePhoneChange}
            // variant="outlined"
          />
        </div>
        <Button
          variant="outlined"
          sx={{ m: 1, width: "52ch" }}
          onClick={handleSubmit}
          disabled={submissionCheck()}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default EditProfile;
