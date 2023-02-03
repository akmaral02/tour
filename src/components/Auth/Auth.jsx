import List from "./ims/List.png";
import React from "react";
import { LockOutlined } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/system";
import { useAuth } from "../../contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import list from "./ims/list.jpg";
import "./Auth.css";

const theme = createTheme();

const Auth = () => {
  const {
    email,
    password,
    user,

    emailError,
    passwordError,
    hasAccount,
    setEmail,
    setPassword,
    setHasAccount,

    handleSignin,
    handleSignUp,
    handleLogOut,
  } = useAuth();

  let setBlack = (e) => {
    if (e.target.style.borderColor === "blue")
      e.target.style.borderColor = "black";
  };

  const navigate = useNavigate();
  return (
    <div className="auz">
      <Container className="leftSide">
        <img
          className="image"
          src={list}
          style={{ width: "100%", height: "50%" }}
        />
        <h1 className="welcome image">Welcome to the ALKI</h1>
        <h3 className="welcome-1 image">Art of Plants</h3>
      </Container>
      <ThemeProvider theme={theme} className="rightSide">
        <Container
          // component="main"
          maxWidth="xs"
          style={{ marginTop: "-6%", marginRight: "6%" }}
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box>
              <img src={List} alt="create" />
              <Box style={{ color: "#284853" }}>
                {hasAccount ? (
                  <Box className="">
                    <h3>Welcome</h3>
                    <p>Login to continue!</p>
                  </Box>
                ) : (
                  <Box className="create">
                    <h3>Create account</h3>
                    <p>Register to get started!</p>
                  </Box>
                )}
              </Box>
            </Box>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                size="small"
                required
                fullWidth
                id="email"
                // label="Email Address"
                placeholder="email address"
                name="email"
                value={email}
                helperText={emailError}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                autoComplete="email"
                autoFocus
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
                      borderColor: "#284853",
                    },
                  },
                }}
              />
              <TextField
                margin="normal"
                size="small"
                required
                fullWidth
                name="password"
                // label="Password"
                placeholder="password"
                type="password"
                id="password"
                value={password}
                helperText={passwordError}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                autoComplete="current-password"
                onClick={setBlack}
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
                      borderColor: "#284853",
                    },
                  },
                }}
                variant="outlined"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                // sx={{ color: "#284853" }}
                style={{ color: "black" }}
                label="Remember me"
              />

              {hasAccount ? (
                <Link to="/home">
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, backgroundColor: "#284853" }}
                    // sx={{
                    //   width: { sm: 250, md: 350 },
                    //   "& .MuiOutlinedInput-root:hover": {
                    //     "& > fieldset": {
                    //       borderColor: "orange",
                    //     },
                    //   },
                    // }}
                    onClick={handleSignin}
                  >
                    Sign In
                  </Button>
                </Link>
              ) : (
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, backgroundColor: "#284853" }}
                  onClick={handleSignUp}
                >
                  Sign Up
                </Button>
              )}

              <Grid container>
                {/* <Grid item xs> 
                  <Link href="#" variant="body2"> 
                    Forgot password? 
                  </Link> 
                </Grid> */}
                <Grid item>
                  {hasAccount ? (
                    <Link
                      href="#"
                      variant="body2"
                      onClick={() => setHasAccount(!hasAccount)}
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      Don't have an account? Sign Up.
                    </Link>
                  ) : (
                    <Link
                      href="#"
                      variant="body2"
                      onClick={() => setHasAccount(!hasAccount)}
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      Have an account? Sign In.
                    </Link>
                  )}
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default Auth;
