import React, { useState } from "react";
import TextField from "@mui/material/TextField";
// import InputAdornment from "@mui/material/InputAdornment";
import {
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
  InputAdornment,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../redux/reducers/userReducer";
import axios from "axios";

const Login = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");

  const [hidden, setHidden] = useState(true);
  const handleVisibility = () => {
    setHidden(!hidden);
  };

  const handleEmailChange = (e) => {
    dispatch(userActions.setEmail(e.target.value));
  };
  const handlePasswordChange = (e) => {
    dispatch(userActions.setPassword(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("logging in!");

    dispatch(userActions.loginStart());
    const res = await axios.post("/api/auth/login", {
      email: user.email,
      password: user.password,
    });
    dispatch(userActions.loginSuccess(res.data));

    // const login = async (dispatch, data) => {
    //   dispatch(loginStart());
    //   try {
    //     const res = await axios.post("/api/auth/login", data);
    //     console.log(res);
    //     dispatch(loginSuccess(res.data));
    //   } catch (err) {
    //     dispatch(loginFailure());
    //   }
    // };
    // login(dispatch, { user.email, password });
  };

  //for the register button
  const history = useHistory();

  const routeChange = () => {
    const path = "/register";
    history.push(path);
  };

  const header = {
    position: "-webkit-sticky",
    position: "sticky",
    top: "0",
    backgroundColor: "teal",
    color: "white",
    textAlign: "center",
    height: "80px",
    justifyContent: "center",
    marginBottom: "20px",
    marginTop: "20px",
  };
  const inputs = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  return (
    <>
      <header style={header}>MY ACCOUNT</header>
      <div className="login" style={inputs}>
        <div>
          <TextField
            id="outlined-basic"
            label="Email"
            sx={{ m: 1, width: "25ch" }}
            onChange={handleEmailChange}
            // variant="outlined"
          />
        </div>
        <div>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={hidden ? "password" : "text"}
              value={user.password}
              onChange={handlePasswordChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleVisibility}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {hidden ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </div>
        <a href="">Forgot your password?</a>

        <Button
          variant="contained"
          sx={{ m: 1, width: "25ch" }}
          onClick={handleSubmit}
        >
          LOG IN
        </Button>
      </div>
      <div>
        <header style={header}>I DON'T HAVE AN ACCOUNT YET</header>
        <div style={{ textAlign: "center" }}>
          <p>Get to save items and checkout your newest favourite!</p>
          <button onClick={routeChange}>Create My Account</button>
        </div>
      </div>
    </>
  );
};

export default Login;
