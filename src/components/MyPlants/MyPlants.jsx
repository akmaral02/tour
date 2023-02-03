import {
  Button,
  Card,
  CardContent,
  Divider,
  List,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import "../MyPlants/payment.css";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Modal from "@mui/material/Modal";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { useMyPlants } from "../../contexts/MyPlantsContextProvider";
import { Link } from "react-router-dom";

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

  return (
    <div>
      <Container>
        <Box height={500} display="flex">
          <Box className="payment-card" width="65%">
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
              <Typography fontSize={24}>{myplants?.totalPrice} EUR</Typography>
            </Box>
            {/* //!end */}
            <Link to={"/flowers"} style={{ textDecoration: "none" }}>
              <Box
                width="30%"
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
              >
                <Typography
                  color="black"
                  paddingTop={1}
                  paddingBottom={1}
                  textDecoration={"none"}
                >
                  Continue Shopping
                </Typography>
              </Box>
            </Link>
          </Box>

          <Box width="35%">
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 24 }} gutterBottom>
                  Select Address
                </Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  color="black"
                  paddingTop={1}
                  fontSize={16}
                >
                  Choose one of the addresses
                </Typography>

                <Box
                  border={1}
                  borderRadius={1}
                  color="#EFEFEF"
                  marginTop={1}
                  onClick={handleOpen}
                >
                  <Typography
                    sx={{ mb: 1.5 }}
                    color="text.secondary"
                    paddingTop={1}
                    paddingLeft={2}
                  >
                    25 rue Robert Latouche, Nice, 06200, Cote D’azur, France
                  </Typography>
                </Box>
                <Box
                  border={1}
                  borderRadius={1}
                  color="#EFEFEF"
                  marginTop={1}
                  onClick={handleOpen}
                >
                  <Typography
                    sx={{ mb: 1.5 }}
                    color="text.secondary"
                    paddingTop={1}
                    paddingLeft={2}
                  >
                    25 rue Robert Latouche, Nice, 06200, Cote D’azur, France
                  </Typography>
                </Box>
                <Box
                  border={1}
                  borderRadius={1}
                  color="#EFEFEF"
                  marginTop={1}
                  onClick={handleOpen}
                >
                  <Typography
                    sx={{ mb: 1.5 }}
                    color="text.secondary"
                    paddingTop={1}
                    paddingLeft={2}
                  >
                    25 rue Robert Latouche, Nice, 06200, Cote D’azur, France
                  </Typography>
                </Box>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 24 }} gutterBottom>
                  Delivery
                </Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  color="black"
                  paddingTop={1}
                  fontSize={16}
                >
                  Choose one of the addresses
                </Typography>

                <Box
                  border={1}
                  borderRadius={1}
                  color="#EFEFEF"
                  marginTop={1}
                  onClick={handleOpen}
                >
                  <Typography
                    sx={{ mb: 1.5 }}
                    color="text.secondary"
                    paddingTop={1}
                    paddingLeft={2}
                  >
                    25 rue Robert Latouche, Nice, 06200, Cote D’azur, France
                  </Typography>
                </Box>
                <Box
                  border={1}
                  borderRadius={1}
                  color="#EFEFEF"
                  marginTop={1}
                  onClick={handleOpen}
                >
                  <Typography
                    sx={{ mb: 1.5 }}
                    color="text.secondary"
                    paddingTop={1}
                    paddingLeft={2}
                  >
                    25 rue Robert Latouche, Nice, 06200, Cote D’azur, France
                  </Typography>
                </Box>
                <Box
                  border={1}
                  borderRadius={1}
                  color="#EFEFEF"
                  marginTop={1}
                  onClick={handleOpen}
                >
                  <Typography
                    sx={{ mb: 1.5 }}
                    color="text.secondary"
                    paddingTop={1}
                    paddingLeft={2}
                  >
                    25 rue Robert Latouche, Nice, 06200, Cote D’azur, France
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 700,
            borderRadius: 5,
            backgroundColor: "white",
            border: "2px solid #000",
            boxShadow: 24,
            padding: 4,
          }}
        >
          <Typography id="modal-modal-title" fontSize={28} component="h2">
            Checkout
            <CheckOutlinedIcon />
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 3, mb: 3 }}
            fontSize={20}
          >
            Personal Info
          </Typography>
          <Box width="100%">
            <TextField
              autoFocus
              margin="dense"
              label="Your Name"
              type="email"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              label="Your Surname"
              type="email"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              label="Your Phone Number"
              type="email"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              label="Your Address"
              type="email"
              fullWidth
              variant="outlined"
            />
          </Box>
          <Box display="flex" justifyContent="end">
            <Button>Close</Button>
            <Button>OK</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default MyPlants;
