import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Stack,
  Typography,
  TextField,
  Autocomplete,
  InputAdornment,
} from "@mui/material";
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
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import EditIcon from "@mui/icons-material/Edit";

const FlowerCard = ({ flower, id }) => {
  //  ! get our props and destructuring them
  const { deleteFlower, flowerDetails, saveEditedFlower, getFlowerDetails } =
    useFlower();

  // console.log(id);

  const [open, setOpen] = React.useState(false); //!its for dialog window

  useEffect(() => {
    getFlowerDetails(id); //!there we getting one flower and use the props to get exactly this flower what wee want
    //!before in list we give for every card uniq id
  }, [open]); //! and it will work only we open the dialog cuse this fialog will open only then when we click on the button in every card
  //! so  he get which card was opened and which flower he have to get from data

  useEffect(() => {
    setFlowerForEdit(flowerDetails); //! its for update our state after getting data from json and show right data
  }, [getFlowerDetails]);

  const [flowerForEdit, setFlowerForEdit] = useState(flowerDetails); //! its state for rendering in our edit inputs the data from one flower
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

  return (
    <div>
      {/* //! CARD START  */}
      <Box width={350} height={512} marginTop={6} position="relative">
        <Card className="flower-card" key={id}>
          <CardMedia
            className="flower-img"
            component="img"
            alt={flower.title}
            // src={RheaSelvia}
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
                <Box className="add-to-cart">
                  <AddShoppingCartOutlinedIcon />
                </Box>
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
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
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
                  <InputAdornment position="end">som</InputAdornment>
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
              // onChange={handleChange}
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
              // onInputChange={handleChange}
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

// export default FlowerCard;
