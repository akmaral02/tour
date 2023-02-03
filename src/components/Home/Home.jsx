import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Landing from "../images/landing.png";
import New from "../images/news.png";
import "./home.css";
import "./flowerCard.css";

const Home = () => {
  return (
    <div>
      <Container>
        <Box
          component="img"
          sx={{
            height: "100%",
            width: "100%",
          }}
          alt="landing"
          src={Landing}
        />
        <Box position="relative">
          <Box
            marginTop={5}
            component="img"
            sx={{
              height: "100%",
              width: "100%",
            }}
            alt="news"
            src={New}
          ></Box>
          <Typography
            position="absolute"
            bottom={45}
            left={365}
            letterSpacing={3}
          >
            Will be ready to harvest on monday 23.03.2023
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
