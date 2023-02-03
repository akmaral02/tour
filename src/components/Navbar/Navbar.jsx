import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Link } from "@mui/material";
import "./navbar.css";
import Logo from "../images/logo.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { ICON_COLOR, MAIN_COLOR } from "../../helpers/consts";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  color: `${MAIN_COLOR}`,
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: `${MAIN_COLOR}`,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
    color: `${MAIN_COLOR}`,
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
        <MenuItem>HOME</MenuItem>
        <MenuItem>FLOWERS</MenuItem>
        <MenuItem>CONTACT US</MenuItem>
        <MenuItem>BLOG</MenuItem>
        <MenuItem>ADMIN</MenuItem>
      </Menu>
    );

  return (
    <div className="cont">
      <Box
        sx={{
          flexGrow: 12,

          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: "white",
            boxShadow: "3px 3px 7px #ccc",
          }}
        >
          <Toolbar>
            <Box flexGrow={8} display="flex" alignItems="center">
              <IconButton
                onClick={handleMobileMenuOpen}
                size="large"
                edge="start"
                color={`${MAIN_COLOR}`}
                aria-label="open drawer"
                sx={{ mr: 2, display: { xs: "flex", md: "none", lg: "none" } }}
              >
                <MenuIcon />
              </IconButton>

              <Box
                component="img"
                sx={{
                  height: 64,
                }}
                alt="logo"
                src={Logo}
                color={`${MAIN_COLOR}`}
              ></Box>
              <Box>
                <Typography color={`${ICON_COLOR}`}>
                  ALKI | Art of Plants
                </Typography>
              </Box>
            </Box>
            <Box
              flexGrow={8}
              sx={{
                display: "flex",
                justifyContent: "center",
                columnGap: 2,
                display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
                color: `${MAIN_COLOR}`,
              }}
            >
              <MenuItem className="nav">
                <Link to="/"></Link> HOME
              </MenuItem>
              <MenuItem className="nav">FLOWERS</MenuItem>
              <MenuItem className="nav">CONTACT US</MenuItem>
              <MenuItem className="nav">BLOG</MenuItem>
              <MenuItem className="nav">ADMIN</MenuItem>
            </Box>

            <Box
              flexGrow={1}
              sx={{
                display: "flex",
                alignItems: "center",
                // justifyContent: "space-evenly",
                // display: {
                //   lg: { flexGrow: 3.8 },
                //   md: { flexGrow: 2 },
                //   sm: { flexGrow: 0.1 },
                // },
              }}
            >
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  sx={{
                    border: 0.1,
                    color: "#EFEFEF",
                    borderRadius: 50,
                    ":hover": {
                      color: `${ICON_COLOR}`,
                      transition: "1s",
                      boxShadow: "5px 5px 10px #ccc",
                    },
                  }}
                />
              </Search>

              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                  >
                    <ShoppingCartOutlinedIcon sx={{ color: `${ICON_COLOR}` }} />
                  </IconButton>
                }
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
                  >
                    <AccountCircle sx={{ color: `${ICON_COLOR}` }} />
                  </IconButton>
                }
              </Box>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color={`${MAIN_COLOR}`}
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </div>
  );
}
