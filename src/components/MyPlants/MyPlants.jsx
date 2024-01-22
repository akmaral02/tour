import {
  Alert,
  Card,
  CardContent,
  Divider,
  Grid,
  List,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../MyPlants/payment.css";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Modal from "@mui/material/Modal";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { useMyPlants } from "../../contexts/MyPlantsContextProvider";
import { Link, useNavigate } from "react-router-dom";

import "../MyPlants/payment.css";

const MyPlants = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    myplants,
    getMyPlants,
    incrementCount,
    decrementCount,
    deleteFromMyplants,
  } = useMyPlants();

  useEffect(() => {
    getMyPlants();
  }, []);

  const [inpError, setInpError] = useState(false);
  const [alertD, setAlertD] = useState("none");
  const [alertS, setAlertS] = useState("none");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSave = () => {
    name ? setInpError(false) : setInpError(true);
    surname ? setInpError(false) : setInpError(true);
    phone ? setInpError(false) : setInpError(true);
    address ? setInpError(false) : setInpError(true);
    if (!name || !surname || !phone || !address) {
      setAlertD("flex");
      return;
    } else {
      setInpError(false);
      setAlertD("none");
      setAlertS("flex");
    }
  };

  return (
    <div>
      <Container>
        <Grid container>
          <Grid item lg={7} md={12} sm={12} xs={12}>
            <Box className="payment-card" width="100%">
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography fontSize={24}>PAYMENT</Typography>
              </Box>
              <List>
                <Divider color="#EFEFEF" />
              </List>
              <Box
                display="flex"
                justifyContent="space-between"
                marginTop={3}
                marginBottom={3}
              >
                <Box width="45%">
                  <Typography>PRODUCT DETAILS</Typography>
                </Box>
                <Box display="flex" width="55%" textAlign="center">
                  <Typography width="33%">AMOUNT</Typography>
                  <Typography width="33%">PRICE</Typography>
                  <Typography width="33%">TOTAL</Typography>
                </Box>
              </Box>

              {/* //! start */}
              {myplants?.flowers.map((everyFlower) => (
                <div>
                  <Box display="flex">
                    <Box width="45%" display="flex">
                      <Box
                        className="payment-img"
                        component="img"
                        sx={{
                          height: 80,
                          width: 80,
                          borderRadius: 3,
                        }}
                        src={everyFlower.item.image}
                      />
                      <Box
                        className="payment-delete"
                        onClick={() => deleteFromMyplants(everyFlower.item.id)}
                      >
                        <CancelOutlinedIcon />
                      </Box>
                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        marginLeft={2}
                      >
                        <Typography>{everyFlower.item.title}</Typography>
                        <Typography>{everyFlower.item.category}</Typography>
                      </Box>
                    </Box>
                    <Box display="flex" width="55%">
                      <Box
                        width="33.3%"
                        display="flex"
                        justifyContent="space-around"
                        alignItems="center"
                        textAlign="center"
                      >
                        <Box
                          border={1}
                          display="flex"
                          width={200}
                          borderColor="#EFEFEF"
                          borderRadius={2}
                          padding={1}
                          textAlign="center"
                          alignItems="center"
                          color="#359740"
                        >
                          <Box
                            className="count"
                            width="33.3%"
                            onClick={() => decrementCount(everyFlower.item.id)}
                          >
                            -
                          </Box>
                          <Typography width="33.3%">
                            {everyFlower.count}
                          </Typography>
                          <Box
                            className="count"
                            width="33.3%"
                            onClick={() => incrementCount(everyFlower.item.id)}
                          >
                            +
                          </Box>
                        </Box>
                      </Box>
                      <Typography
                        width="33.3%"
                        display="center"
                        textAlign="center"
                        justifyContent="center"
                        alignItems="center"
                      >
                        {everyFlower.item.price}
                      </Typography>
                      <Typography
                        width="33.3%"
                        display="center"
                        textAlign="center"
                        justifyContent="center"
                        alignItems="center"
                      >
                        {everyFlower.subPrice}
                      </Typography>
                    </Box>
                  </Box>
                  <Box marginTop={1} marginBottom={1}>
                    <List>
                      <Divider color="#EFEFEF" />
                    </List>
                  </Box>
                </div>
              ))}
              <Box
                display="flex"
                justifyContent="end"
                alignItems="center"
                columnGap={3}
              >
                <span fontSize={18}> Total Price: </span>
                <Typography fontSize={24}>
                  {myplants?.totalPrice} EUR
                </Typography>
              </Box>
              {/* //!end */}
              <Link to={"/flowers"} style={{ textDecoration: "none" }}>
                <Grid
                  width="100%"
                  border={1}
                  borderRadius={1}
                  color="#EFEFEF"
                  marginTop={3}
                  alignItems="center"
                  display="flex"
                  justifyContent="center"
                  sx={{
                    ":hover": {
                      backgroundColor: "#284853",
                    },
                  }}
                  sm={12}
                  xs={12}
                >
                  <Typography
                    color="black"
                    paddingTop={1}
                    paddingBottom={1}
                    textDecoration={"none"}
                  >
                    Continue Shopping
                  </Typography>
                </Grid>
              </Link>
            </Box>
          </Grid>
          <Grid item lg={5}>
            <Box width="100%">
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography sx={{ fontSize: 24 }} gutterBottom>
                    Personal Info
                  </Typography>

                  <Box width="100%">
                    <TextField
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      name="name"
                      value={name}
                      error={inpError}
                      margin="dense"
                      label="Your Name"
                      type="email"
                      fullWidth
                      variant="outlined"
                    />
                    <TextField
                      onChange={(e) => {
                        setSurname(e.target.value);
                      }}
                      name="surname"
                      value={surname}
                      error={inpError}
                      margin="dense"
                      label="Your Surname"
                      type="email"
                      fullWidth
                      variant="outlined"
                    />
                    <TextField
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      name="phone"
                      value={phone}
                      error={inpError}
                      margin="dense"
                      label="Your Phone Number"
                      type="email"
                      fullWidth
                      variant="outlined"
                    />
                    <TextField
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                      name="address"
                      value={address}
                      error={inpError}
                      margin="dense"
                      label="Your Address"
                      type="email"
                      fullWidth
                      variant="outlined"
                    />
                  </Box>

                  <Box
                    width="100%"
                    border={1}
                    borderRadius={1}
                    color="#EFEFEF"
                    marginTop={3}
                    alignItems="center"
                    display="flex"
                    justifyContent="center"
                    sx={{
                      ":hover": {
                        backgroundColor: "#284853",
                      },
                    }}
                    onClick={handleSave}
                  >
                    <Typography color="black" paddingTop={1} paddingBottom={1}>
                      BUY
                    </Typography>
                  </Box>
                  <Alert
                    severity="error"
                    sx={{
                      display: alertD,
                      justifyContent: "center",
                      fontSize: 20,
                    }}
                  >
                    Fill all fields
                  </Alert>
                  <Alert
                    sx={{
                      display: alertS,
                      justifyContent: "center",
                      fontSize: 20,
                    }}
                  >
                    Your order successed !!
                  </Alert>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
        {/* <Box height={500} display="flex" marginTop={15}>

        </Box> */}
      </Container>
    </div>
  );
};

export default MyPlants;
