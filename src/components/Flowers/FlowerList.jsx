import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useFlower } from "../../contexts/FlowerContextProvider";
import FlowerCard from "./FlowerCard";

const FlowerList = () => {
  const { getFlower, flowers } = useFlower();
  useEffect(() => {
    getFlower(); //! for getting flowers from database
  }, []);

  return (
    <Container>
      {/* //! for rendering our flowers and do it more normal  */}
      <Grid
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
        {flowers ? (
          flowers.map((flower) => <FlowerCard flower={flower} id={flower.id} />)
        ) : (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        )}
      </Grid>
    </Container>
  );
};

export default FlowerList;
