import { Box, CircularProgress, Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useFlower } from "../../contexts/FlowerContextProvider";
import FlowerCard from "./FlowerCard";

const FlowerList = () => {
  const { getFlower, flowers, searchParams } = useFlower();

  useEffect(() => {
    getFlower();
  }, []);

  useEffect(() => {
    getFlower();
  }, [searchParams]);

  return (
    <Container>
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
