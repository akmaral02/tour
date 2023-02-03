import {
  Card,
  CardContent,
  Divider,
  Grid,
  List,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Container } from "react-bootstrap";
import "../MyPlants/payment.css";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const MyPlants = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Container>
        <Box height={500} display="flex" marginTop={15}>
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
                  Personal Info
                </Typography>

                <Box width="100%">
                  <TextField
                    margin="dense"
                    label="Your Name"
                    type="email"
                    fullWidth
                    variant="outlined"
                  />
                  <TextField
                    margin="dense"
                    label="Your Surname"
                    type="email"
                    fullWidth
                    variant="outlined"
                  />
                  <TextField
                    margin="dense"
                    label="Your Phone Number"
                    type="email"
                    fullWidth
                    variant="outlined"
                  />
                  <TextField
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
                >
                  <Typography color="black" paddingTop={1} paddingBottom={1}>
                    BUY
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default MyPlants;
