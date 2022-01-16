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

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [hidden, setHidden] = useState(true);
  const handleVisibility = () => {
    setHidden(!hidden);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("logging in!");
    await fetch("/api/auth/login", {
      method: "POST",
      mode: "cors",
      data: JSON.stringify({ email: email, password: password }),
    });
  };
  const history = useHistory();

  const routeChange = () => {
    const path = "/register";
    history.push(path);
  };

  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      primary: {
        main: "#0971f1",
        darker: "#053e85",
      },
      neutral: {
        main: "#64748B",
        contrastText: "#fff",
      },
    },
  });
  const header = {
    position: "-webkit-sticky",
    position: "sticky",
    top: "0",
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    height: "100px",
    paddingTop: "20px",
  };
  return (
    <>
      <header style={header}>MY ACCOUNT</header>
      <div
        className="login"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <TextField
          id="outlined-basic"
          label="Email"
          sx={{ m: 1, width: "25ch" }}
          onChange={handleEmailChange}
          // variant="outlined"
        />
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={hidden ? "password" : "text"}
            value={password}
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
        <a href="">Forgot your password?</a>
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            sx={{ m: 1, width: "25ch" }}
            color="neutral"
            onClick={handleSubmit}
          >
            LOG IN
          </Button>
        </ThemeProvider>
      </div>
      <div>
        <p>I DON'T HAVE AN ACCOUNT YET</p>
        <p>Get to save items and checkout your newest favourite!</p>
        <button onClick={routeChange}>Create My Account</button>
      </div>
    </>
  );
};

export default Login;
