import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Container } from "@mui/system";
import { Block } from "@mui/icons-material";
import { Button } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",

  borderRadius: theme.shape.borderRadius,
  //   backgroundColor: alpha(theme.palette.common.white, 0.15),
  //   "&:hover": {
  //     backgroundColor: alpha(theme.palette.common.white, 0.25),
  //   },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl); //false
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl); //false

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget); //функция которая меняет состояние на текущую
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null); // функция которая закрывает меню меняя состояние моб версия бургер
  };

  const handleMenuClose = () => {
    setAnchorEl(null); // закрывает иконка с профилем
    handleMobileMenuClose(); //закрывает моб бургер
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget); // меняет состояние на текущую
  };
  const menuId = "primary-search-account-menu"; //сохраняем Id профиля иконка
  const renderMenu = //для отображения составной части профиля иконка как я поняла это функция которая в последующем вызывается
    (
      <Menu
        anchorEl={anchorEl} //? anchorEl-это пропс /элемент(объект) или фцнкция которая возвращает его он нужен для установки положения поппера
        //? поппер это всплывающая подсказка как я понял это нужно чтобы при нажатии появлялась состовня часть профиля иконка
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        id={menuId} // используем айди ктоторое мы сохранили в начале
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={isMenuOpen} // пропс имеет булево значение по дефолту он имеет false если он true то этот компонент покажется это состовная часть профиля
        //здесь он закрыт так как имеет булево ложь
        onClose={handleMenuClose} // пропс -функция которая вызывает колбек функцию при запросе закрытия компонента
      >
        {/* это состовные тексты при их нажатии вызывается функ. которая закрывает их  */}
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </Menu>
    );

  const mobileMenuId = "primary-search-account-menu-mobile"; // айди для бургера
  const renderMobileMenu = //для отображения меню
    (
      <Menu
        anchorEl={mobileMoreAnchorEl} //тут он закрыт
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        {/* <MenuItem>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem> */}

        <MenuItem>About</MenuItem>
        <MenuItem>Home</MenuItem>
      </Menu>
    );

  return (
    <div className="cont">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
          }}
        >
          <Toolbar>
            <IconButton
              onClick={handleMobileMenuOpen}
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2, display: { xs: "flex", md: "none", lg: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Box
              sx={{
                flexGrow: 0,
                display: "flex",
                columnGap: 2,
                display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
              }}
            >
              <Typography>ABOUT</Typography>
              <Typography>CONTACTS</Typography>
            </Box>

            <Box
              sx={{
                flexGrow: 0.5,
                display: {
                  lg: { flexGrow: 3.8 },
                  md: { flexGrow: 2 },
                  sm: { flexGrow: 0.1 },
                },
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  display: { xs: "none", sm: "block" },
                  letterSpacing: 10,
                }}
              >
                DELMAR
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <Button
                variant="outlined"
                sx={{
                  color: "white",
                  borderColor: "white",
                  flexGrow: 1,
                  mr: 5,
                }}
              >
                Reserve
              </Button>
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              }
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
        <hr></hr>
      </Box>
    </div>
  );
}
