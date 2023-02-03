import {
  Box,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Stack,
  styled,
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
// import CustomButton from "./CustomButton";
import Main from "../images/main.png";

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
    color: "#000336",
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
                  color: "#687690",
                  fontWeight: "500",
                  mt: 10,
                  mb: 4,
                }}
              >
                Welcome to Besnik Agency
              </Typography>
              <Title variant="h1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit
              </Title>
              <Typography
                variant="body2"
                sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
                porro ducimus ex labore exercitationem earum.
              </Typography>
              <CustomButton
                backgroundColor="#0F184C"
                heroBtn={true}
                color="#fff"
                buttonText="More About Us"
              ></CustomButton>
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

      {/* <div className="home">
        <Container>
          <div className="content">
            <h3>fresh flowers</h3>
            <span>natural & beautiful flowers</span>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae facilis voluptates aut enim dolor iusto voluptatem,
              vitae iste voluptatum pariatur suscipit ratione ad soluta debitis
              obcaecati voluptas consectetur eveniet repellendus!
            </p>
            <a href="#" className="btn">
              Shop now
            </a>
          </div>
        </Container>
      </div> */}
      {/* <Container>
        <Box
          component="img"
          sx={{
            height: "100%",
            width: "100%",
            marginTop: 15,
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
          <Box
            position="absolute"
            height={10}
            // backgroundColor="black"
            display="flex"
            sx={{ bottom: { xs: 25, sm: 30, md: 50, lg: 65, xl: 80 } }}
            justifyContent="center"
            width="100%"
          >
            <Typography
              sx={{
                fontSize: { xs: 12, sm: 18, md: 20, lg: 24, xl: 28 },
                left: { xs: 305, sm: 325, md: 345, lg: 365, xl: 385 },
                letterSpacing: { xs: 1, sm: 2, md: 4, lg: 6, xl: 8 },
              }}
            >
              Will be ready to harvest on monday 23.03.2023
            </Typography>
          </Box>
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
      </Container> */}
    </div>
  );
};

export default Home;
