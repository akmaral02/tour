import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Blog1 from "../images/blog1.png";

const Blog = () => {
  return (
    <div>
      <Container>
        <Box marginTop={5} marginBottom={5}>
          <Typography variant="h3" display="flex">
            Our Blog
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid item xs={7} backgroundColor="wheat">
              <Box
                marginRight={5}
                height={300}
                backgroundColor="black"
                borderRadius={4}
              ></Box>
              <Grid container item xs={12} backgroundColor="red">
                <Grid item xs={7}>
                  <Box
                    marginTop={5}
                    height={200}
                    backgroundColor="black"
                    borderRadius={4}
                  ></Box>
                </Grid>
                <Grid item xs={5}>
                  <Box
                    marginTop={5}
                    height={200}
                    backgroundColor="black"
                    borderRadius={4}
                  ></Box>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={5} backgroundColor="pink">
              <Box height={600} backgroundColor="black" borderRadius={4}></Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Blog;
