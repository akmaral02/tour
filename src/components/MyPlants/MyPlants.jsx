import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  FilledInput,
  Grid,
  InputAdornment,
  InputLabel,
  List,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { ButtonGroup, Container, FormControl } from "react-bootstrap";
import "../MyPlants/payment.css";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import Modal from "@mui/material/Modal";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

const MyPlants = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
              <Typography fontSize={18}>3 items</Typography>
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
                  src="https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_money-tree_slate-e1643402075928.jpg?ver=279409"
                />
                <Box className="payment-delete">
                  <CancelOutlinedIcon />
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  marginLeft={2}
                >
                  <Typography>Rhea Selvia</Typography>
                  <Typography>Indoor</Typography>
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
                    <Box className="count" width="33.3%">
                      -
                    </Box>
                    <Typography width="33.3%">2</Typography>
                    <Box className="count" width="33.3%">
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
                  $399.99
                </Typography>
                <Typography
                  width="33.3%"
                  display="center"
                  textAlign="center"
                  justifyContent="center"
                  alignItems="center"
                >
                  $399.99
                </Typography>
              </Box>
            </Box>
            <Box marginTop={1} marginBottom={1}>
              <List>
                <Divider color="#EFEFEF" />
              </List>
            </Box>
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
              <Typography color="black" paddingTop={1} paddingBottom={1}>
                Continue Shopping
              </Typography>
            </Box>
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
                {/* <Box
                  border={1}
                  borderRadius={1}
                  color="#EFEFEF"
                  marginTop={3}
                  alignItems="center"
                  display="flex"
                  justifyContent="center"
                  backgroundColor="#284853"
                >
                  <Typography color="white" paddingTop={1} paddingBottom={1}>
                    BUY
                  </Typography>
                </Box> */}
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
                {/* <Box
                  border={1}
                  borderRadius={1}
                  color="#EFEFEF"
                  marginTop={3}
                  alignItems="center"
                  display="flex"
                  justifyContent="center"
                  backgroundColor="#284853"
                >
                  <Typography color="white" paddingTop={1} paddingBottom={1}>
                    BUY
                  </Typography>
                </Box> */}
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
