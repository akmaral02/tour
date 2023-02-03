import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

import "./home.css";
import "./flowerCard.css";

import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";

const Home = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#284853",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));
  return (
    <div>
      <Box sx={{ minHeight: "80vh" }}>
        <Container>
          <CustomBox>
            <Box sx={{ flex: "1" }}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "18px",
                  color: "#284853",
                  fontWeight: "500",
                  mt: 10,
                  mb: 4,
                }}
              >
                Welcome to ALKI
              </Typography>
              <Title variant="h1">Love is Sweeter with plants</Title>
              <Typography
                variant="body2"
                sx={{ fontSize: "18px", color: "#284853", my: 4 }}
              >
                Celebrate the love in your life with a gift that grows on
                Transform Your Space with ALKI
              </Typography>
              <Link style={{ textDecoration: "none" }} to="/flowers">
                <CustomButton
                  backgroundColor="#284853"
                  heroBtn={true}
                  color="#fff"
                  buttonText="Go to Plants' World"
                ></CustomButton>
              </Link>
            </Box>

            <Box sx={{ flex: "1.25" }}>
              <img
                src="https://www.makerstations.io/content/images/2021/09/severin-candrian-1gwjE0c3PSQ-unsplash.jpg"
                alt="img"
                style={{ maxWidth: "100%", marginbottom: "2rem" }}
              ></img>
            </Box>
          </CustomBox>
        </Container>
      </Box>
    </div>
  );
};

export default Home;
