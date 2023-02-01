import {
  Box,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Landing from "../images/landing.png";
import New from "../images/news.png";
import "./home.css";
import "./flowerCard.css";
import All from "../images/all.png";
import Berries from "../images/berries.png";
import Cactus from "../images/cactus.png";
import Fern from "../images/fern.png";
import Fruit from "../images/fruit.png";
import Succulent from "../images/succulent.png";
import Water from "../images/water.png";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import RheaSelvia from "../images/RheaSelvia.png";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { MAIN_COLOR } from "../../helpers/consts";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

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
        <Box>
          <Typography
            variant="h3"
            display="flex"
            paddingTop={5}
            paddingBottom={5}
          >
            Categories
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" flexWrap="wrap">
          <Box className="category">
            <Box component="img" src={All} paddingRight={1} />
            All
          </Box>
          <Box className="category">
            <Box component="img" src={Fern} paddingRight={1} />
            Fern
          </Box>
          <Box className="category">
            <Box component="img" src={Cactus} paddingRight={1} />
            Cactus
          </Box>
          <Box className="category">
            <Box component="img" src={Succulent} paddingRight={1} />
            Succulent
          </Box>
          <Box className="category">
            <Box component="img" src={Water} paddingRight={1} />
            Water
          </Box>
          <Box className="category">
            <Box component="img" src={Berries} paddingRight={1} />
            Berries
          </Box>
          <Box className="category">
            <Box component="img" src={Fruit} paddingRight={1} />
            Fruit
          </Box>
        </Box>

        <Box width={350} height={512} marginTop={6} position="relative">
          <Card className="flower-card">
            <CardMedia
              className="flower-img"
              component="img"
              alt="flower"
              // src={RheaSelvia}
              src="https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_money-tree_slate-e1643402075928.jpg?ver=279409"
            />
            <CardContent>
              <Box display="flex" alignItems="center">
                <Stack spacing={1}>
                  <Rating defaultValue={5} size="small"></Rating>
                </Stack>
                <Typography
                  marginLeft={2}
                  fontSize={12}
                  color={`${MAIN_COLOR}`}
                >
                  (123)
                </Typography>
              </Box>
              <Box className="card-like">
                <FavoriteBorderOutlinedIcon />
              </Box>
              <Box textAlign="start">
                <Box className="card-hover" display="none">
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    display="flex"
                    justifyContent="center"
                  >
                    Indoor Planting
                    <br />
                    Size: S
                  </Typography>
                </Box>
                <Typography gutterBottom variant="h5" component="div">
                  Rhea Selvia
                </Typography>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="h5" component="div">
                    399.99 EUR
                  </Typography>
                  <Box className="add-to-cart">
                    <AddShoppingCartOutlinedIcon />
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
