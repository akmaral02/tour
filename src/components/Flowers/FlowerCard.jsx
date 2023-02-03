import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  TextField,
  Autocomplete,
  InputAdornment,
  Grid,
  IconButton,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import "../Flowers/FlowerCard.css";
import { useFlower } from "../../contexts/FlowerContextProvider";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import EditIcon from "@mui/icons-material/Edit";
import { useMyPlants } from "../../contexts/MyPlantsContextProvider";
import { useAuth } from "../../contexts/AuthContextProvider";
import FavoriteIcon from "@mui/icons-material/Favorite";

const FlowerCard = ({ flower, id }) => {
  const { deleteFlower, flowerDetails, saveEditedFlower, getFlowerDetails } =
    useFlower();
  const { addToMyPlants, hasInMyplants } = useMyPlants();
  const { user } = useAuth();

  const [open, setOpen] = React.useState(false);
  const [iconColor, setIconColor] = useState("#ffcf55");

  useEffect(() => {
    getFlowerDetails(id);
  }, [open]);

  useEffect(() => {
    setFlowerForEdit(flowerDetails);
  }, [getFlowerDetails]);

  const [flowerForEdit, setFlowerForEdit] = useState(flowerDetails);
  const [size, setSize] = useState(flowerDetails.size);
  const [inputValue, setInpValue] = useState("");

  const [category, setCategory] = useState(flowerDetails.category);
  const [inputCategoryValue, setInpCategoryValue] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "price") {
      let obj = { ...flowerForEdit, [e.target.name]: Number(e.target.value) };
      setFlowerForEdit(obj);
    } else {
      let obj = { ...flowerForEdit, [e.target.name]: e.target.value };
      setFlowerForEdit(obj);
    }
  };

  useEffect(() => {
    setFlowerForEdit({ ...flowerForEdit, size: size });
  }, [size]);

  useEffect(() => {
    setFlowerForEdit({ ...flowerForEdit, category: category });
  }, [category]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const sizes = ["SX", "S", "M", "L", "XL", "XXL"];
  const categories = [
    "FERN",
    "CACTUS",
    "SUCCULENT",
    "WATER",
    "BERRIES",
    "FRUIT",
  ];

  const changeColor = () => {
    setIconColor("secondary");
  };

  return (
    <div>
      {/* //! CARD START  */}
      <Grid
        item
        lg={4}
        md={6}
        sm={12}
        xs={12}
        sx={{
          marginTop: { lg: 0, md: 10, sm: 5, xs: 5 },
          display: { lg: "flex", md: "flex", sm: "flex", xs: "flex" },
          marginRight: { lg: 0, md: 5, sm: "auto", xs: "auto" },
          marginLeft: { lg: 0, md: 5, sm: 20, xs: 5.5 },
        }}
      >
        <Box width={350} height={512} marginTop={6} position="relative">
          <Card className="flower-card" key={id}>
            <CardMedia
              className="flower-img"
              component="img"
              alt={flower.title}
              src={flower.image}
            />
            <CardContent>
              <Box display="flex" alignItems="center">
                <Stack spacing={1}>
                  <Rating defaultValue={5} size="small"></Rating>
                </Stack>
                <Typography marginLeft={2} fontSize={12}>
                  (123)
                </Typography>
              </Box>
              <Box className="card-like">
                <FavoriteIcon color={iconColor} onClick={changeColor} />
                {/* //44 */}
              </Box>
              <Box textAlign="start">
                <Box className="card-hover" display="none">
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    display="flex"
                    justifyContent="center"
                  >
                    {flower.category}
                    <br />
                    Size: {flower.size}
                  </Typography>
                </Box>
                <Typography gutterBottom variant="h5" component="div">
                  {flower.title}
                </Typography>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="h5" component="div">
                    {flower.price} EUR
                  </Typography>

                  {user.email === "admin@admin.com" ? (
                    <>
                      <Box>
                        <DeleteIcon
                          onClick={() => {
                            deleteFlower(flower.id);
                          }}
                        />
                      </Box>
                      <Box>
                        <EditIcon onClick={handleClickOpen} />
                      </Box>
                    </>
                  ) : (
                    <IconButton className="add-to-cart">
                      <AddShoppingCartOutlinedIcon
                        onClick={() => addToMyPlants(flower)}
                        color={hasInMyplants(flower.id) ? "secondary" : ""}
                      />
                    </IconButton>
                  )}
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Grid>
      {/* //? CARD END */}

      {/* //! DIALOG START */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"New Flower"}</DialogTitle>
        <DialogContent></DialogContent>
        <Box width={500}>
          <Box
            width={400}
            m={"auto"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            rowGap={3}
          >
            <TextField
              value={flowerForEdit.image}
              name="image"
              label="Image"
              id="outlined-size-normal"
              onChange={handleChange}
            />

            <TextField
              value={flowerForEdit.title}
              name="title"
              label="Title"
              id="outlined-size-normal"
              onChange={handleChange}
            />
            <TextField
              value={flowerForEdit.price}
              name="price"
              label="Price"
              id="outlined-size-normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">EUR</InputAdornment>
                ),
              }}
              onChange={handleChange}
            />
            <TextField
              value={flowerForEdit.description}
              name="description"
              label="Description"
              multiline
              rows={3}
              id="outlined-size-normal"
              onChange={handleChange}
            />
            <Autocomplete
              value={flowerForEdit.category}
              onChange={(event, newValue) => {
                setCategory(newValue);
              }}
              inputValue={inputCategoryValue}
              onInputChange={(event, newInputValue) => {
                setInpCategoryValue(newInputValue);
              }}
              disablePortal
              id="controllable-states-demo"
              options={categories}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Categories" />
              )}
            />
            <Autocomplete
              value={flowerForEdit.size}
              onChange={(event, newValue) => {
                setSize(newValue);
              }}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInpValue(newInputValue);
              }}
              disablePortal
              id="combo-box-demo"
              options={sizes}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Size" />}
            />
          </Box>
        </Box>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button
            key={flower.id}
            onClick={() => {
              saveEditedFlower(flower.id, flowerForEdit);
              handleClose();
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
      {/* //? DIALOG END */}
    </div>
  );
};

export default FlowerCard;
