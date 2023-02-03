import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAuth } from "../../contexts/AuthContextProvider";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";

const theme = createTheme();

const Auth = () => {
  const {
    email,
    password,
    // user,

    emailError,
    passwordError,
    // hasAccount,
    setEmail,
    setPassword,
    // setHasAccount,

    handleSignin,
    handleSignUp,
  } = useAuth();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [isSignUp, setSignUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <ThemeProvider theme={theme} className="rigtSide">
        <Container>
          {/*//! component="main" maxWidth="xs"*/}
          <Grid container>
            <Grid item lg={12}>
              <form onSubmit={handleSubmit}>
                <Box
                  display="flex"
                  flexDirection={"column"}
                  maxWidth={400}
                  alignItems="center"
                  justifyContent={"center"}
                  margin="auto"
                  marginTop={5}
                  padding={3}
                  borderRadius={5}
                  boxShadow={"5px 5px 10px #ccc"}
                  sx={{
                    ":hover": {
                      boxShadow: "10px 10px 20px #ccc",
                    },
                  }}
                >
                  <Typography variant="h2" padding={3} textAlign>
                    {isSignUp ? "SignUp" : "Login"}
                  </Typography>
                  <TextField
                    label="Email Address"
                    value={email}
                    name="email"
                    margin="normal"
                    type={"email"}
                    variant="outlined"
                    helperText={emailError}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  ></TextField>
                  <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      value={password}
                      helperText={passwordError}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>

                  <Button
                    endIcon={isSignUp ? <HowToRegIcon /> : <LoginIcon />}
                    type="submit"
                    sx={{ marginTop: 3, borderRadius: 3 }}
                    variant="contained"
                    color="warning"
                    onClick={isSignUp ? handleSignUp : handleSignin}
                  >
                    {isSignUp ? "SignUp" : "LogIn"}
                  </Button>
                  <Button
                    endIcon={isSignUp ? <LoginIcon /> : <HowToRegIcon />}
                    // onClick={resetState}
                    onClick={() => setSignUp(!isSignUp)}
                    sx={{ marginTop: 3, borderRadius: 3 }}
                  >
                    Change to {isSignUp ? "Login" : "SignUp"}
                  </Button>
                </Box>
              </form>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default Auth;
