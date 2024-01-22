import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Alert, Autocomplete, InputAdornment, TextField } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { useFlower } from "../../contexts/FlowerContextProvider";
import { Box } from "@mui/system";
import { Container } from "react-bootstrap";

const AddFlowers = () => {
  const { addFlower } = useFlower();
  const [open, setOpen] = useState(false);
  const [flower, setFlower] = useState({
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl7XIBztGVYdREcYU-CsxRPghUgsxpkJJH7Qg7Pdmq3Bfncx17T0aBTds3Bs2pCaZmwMk&usqp=CAU",
    title: "",
    price: "",
    description: "--",
    size: "--",
    category: "--",
    colors: "grey",
  });

  const [size, setSize] = useState(flower.size);
  const [inputValue, setInpValue] = useState("");
  const [category, setCategory] = useState(flower.category);
  const [inputCategoryValue, setInpCategoryValue] = useState("");
  const [inpError, setInpError] = useState(false);
  const [alert, setAlert] = useState("none");

  const handleChange = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...flower,
        [e.target.name]: Number(e.target.value),
      };
      setFlower(obj);
    } else {
      let obj = { ...flower, [e.target.name]: e.target.value };
      setFlower(obj);
    }
  };

  useEffect(() => {
    setFlower({ ...flower, size: size });
  }, [size]);

  useEffect(() => {
    setFlower({ ...flower, category: category });
  }, [category]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    flower.title ? setInpError(false) : setInpError(true);
    flower.price ? setInpError(false) : setInpError(true);
    if (!flower.title || !flower.price) {
      setAlert("flex");

      return;
    } else {
      addFlower(flower);
      setAlert("none");
      setInpError(false);
    }
  };

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
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
      <Container>
        <Card
          onClick={handleClickOpen}
          sx={{
            width: 350,
            height: "auto",
            ":hover": {
              boxShadow: "#ccc 0px 5px 15px ",
            },
          }}
        >
          <CardMedia height="295" width="295">
            <Box width={245} margin="auto">
              <AddCircleOutlineIcon
                sx={{
                  fontSize: 255,
                  color: "#EFF2F8",
                  ":hover": { color: "#359740", transition: "2s" },
                }}
                onClick={handleClickOpen}
              />
            </Box>
          </CardMedia>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              textAlign={"center"}
            >
              Add New Flower
            </Typography>
          </CardContent>
        </Card>
      </Container>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"New Flower"}</DialogTitle>
        <Alert
          severity="error"
          sx={{ display: alert, justifyContent: "center", fontSize: 20 }}
        >
          Fill all fields
        </Alert>

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
              name="image"
              label="Image"
              id="outlined-size-normal"
              onChange={handleChange}
            />

            <TextField
              error={inpError}
              name="title"
              label="Title"
              value={flower.title}
              id="outlined-size-normal"
              onChange={handleChange}
            />
            <TextField
              error={inpError}
              value={flower.price}
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
              name="description"
              label="Description"
              multiline
              rows={3}
              id="outlined-size-normal"
              onChange={handleChange}
            />
            <Autocomplete
              value={category}
              onChange={(event, newValue) => {
                setCategory(newValue);
              }}
              inputCategoryValue={inputCategoryValue}
              onInputChange={(event, newInputValue) => {
                setInpCategoryValue(newInputValue);
              }}
              id="controllable-states-demo"
              options={categories}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Categories" />
              )}
            />
            <Autocomplete
              value={size}
              onChange={(event, newValue) => {
                setSize(newValue);
              }}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInpValue(newInputValue);
              }}
              id="controllable-states-demo"
              options={sizes}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Size" />}
            />
          </Box>
        </Box>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddFlowers;
