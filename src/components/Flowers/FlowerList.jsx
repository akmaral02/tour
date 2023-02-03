import {
  Box,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Pagination,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFlower } from "../../contexts/FlowerContextProvider";
import FlowerCard from "./FlowerCard";
import All from "../images/all.png";
import Berries from "../images/berries.png";
import Cactus from "../images/cactus.png";
import Fern from "../images/fern.png";
import Fruit from "../images/fruit.png";
import Succulent from "../images/succulent.png";
import Water from "../images/water.png";
import "../Home/flowerCard.css";
import "../Home/home.css";
import { useSearchParams } from "react-router-dom";

const FlowerList = () => {
  const { getFlower, flowers, fetchByParams } = useFlower();
  const [searchParams, setSearchParams] = useSearchParams(); // возвращает объект (фильтр)
  const [search, setSearch] = useState(searchParams.get("q") || ""); // серч - за привязку к инпутам | серчпарамс - следит за изменениями (фильтр)
  const [page, setPage] = useState(1);
  const count = Math.ceil(flowers.length / 3); // количество продуктов на одной странице

  useEffect(() => {
    getFlower(); //! for getting flowers from database
  }, []);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
    console.log(searchParams.toString());
  }, [search]);

  // фильтр
  useEffect(() => {
    getFlower();
  }, [searchParams]);

  function currentData() {
    const begin = (page - 1) * 3;
    const end = begin + 3;
    return flowers.slice(begin, end);
  }

  return (
    <Container>
      <Grid container marginTop={9} height={30}>
        <Box position="fixed" zIndex={1} backgroundColor="">
          <Pagination
            color="secondary"
            variant="outlined"
            count={count} // суммарное количество страниц
            shape="rounded"
            page={page} // страница на которой находимся
            onChange={(e, p) => setPage(p)} // атрибут p = page
          />
        </Box>
      </Grid>
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

      {/* фильтр */}

      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          defaultValue="ALL"
          onChange={(e) => fetchByParams("category", e.target.value)}
          name="row-radio-buttons-group"
        >
          <Box display="flex" justifyContent="space-between" flexWrap="wrap">
            <Box className="category">
              <Box component="img" src={All} paddingRight={1}></Box>
              <FormControlLabel
                value="ALL"
                control={<Radio sx={{ display: "none" }} />}
                label="all"
              />
            </Box>
            <Box className="category">
              <Box component="img" src={Fern} paddingRight={1}></Box>
              <FormControlLabel
                value="FERN"
                control={<Radio sx={{ display: "none" }} />}
                label="fern"
              />
            </Box>

            <Box className="category">
              <Box component="img" src={Cactus} paddingRight={1}></Box>
              <FormControlLabel
                value="CACTUS"
                control={<Radio sx={{ display: "none" }} />}
                label="cactus"
              />
            </Box>

            <Box className="category">
              <Box component="img" src={Succulent} paddingRight={1}></Box>
              <FormControlLabel
                value="SUCCULENT"
                control={<Radio sx={{ display: "none" }} />}
                label="succulent"
              />
            </Box>
            <Box className="category">
              <Box component="img" src={Water} paddingRight={1}></Box>
              <FormControlLabel
                value="WATER"
                control={<Radio sx={{ display: "none" }} />}
                label="water"
              />
            </Box>
            <Box className="category">
              <Box component="img" src={Berries} paddingRight={1}></Box>
              <FormControlLabel
                value="BERRIES"
                control={<Radio sx={{ display: "none" }} />}
                label="berries"
              />
            </Box>

            <Box className="category">
              <Box component="img" src={Fruit} paddingRight={1}></Box>
              <FormControlLabel
                value="FRUIT"
                control={<Radio sx={{ display: "none" }} />}
                label="fruit"
              />
            </Box>
          </Box>
        </RadioGroup>
      </FormControl>

      <Grid
        item
        sx={{
          justifyContent: "space-between",
          display: "flex",
          flexWrap: "wrap",
        }}
        md={9}
      >
        {flowers ? (
          currentData().map((flower) => (
            <FlowerCard flower={flower} id={flower.id} />
          ))
        ) : (
          <h2>Loading...</h2>
        )}
      </Grid>
      {/* </Grid> */}

      {/* //! for rendering our flowers and do it more normal  */}
      {/* <Grid
        item
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          rowGap: 5,
        }}
        md={10}
      >
        {/* //! check have we in database some data under the key flowers it's our state in contexts
        //! if we have we are maping our array and open our component to render every another object in our array in another card  
        //! and give our every object as props to our component */}
      {/* {flowers ? (
          flowers.map((flower) => <FlowerCard flower={flower} id={flower.id} />)
        ) : (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        )}  */}
      {/* </Grid> */}
    </Container>
  );
};

export default FlowerList;
