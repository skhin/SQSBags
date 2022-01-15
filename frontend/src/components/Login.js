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

const Login = () => {
  const [password, setPassword] = useState("");
  const [hidden, setHidden] = useState(true);
  const handleVisibility = () => {
    setHidden(!hidden);
    console.log(hidden);
  };
  const handleChange = (e) => {
    console.log(e.target);
    setPassword(e.target.value);
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
          label="Username"
          sx={{ m: 1, width: "25ch" }}
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
            onChange={handleChange}
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
          >
            LOG IN
          </Button>
        </ThemeProvider>
      </div>
      <div>
        <p>I DON'T HAVE AN ACCOUNT YET</p>
        <p>Get to save items and checkout your newest favourite!</p>
        <button onclick="location.href='/register';">Create My Account</button>
      </div>
    </>
  );
};

export default Login;
