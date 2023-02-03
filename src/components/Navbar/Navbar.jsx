import React from "react";
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
import "./navbar.css";
import Logo from "../images/logo.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { ICON_COLOR, MAIN_COLOR } from "../../helpers/consts";

import { Link } from "react-router-dom";
import { useFlower } from "../../contexts/FlowerContextProvider";
import { useAuth } from "../../contexts/AuthContextProvider";
import LogoutIcon from "@mui/icons-material/Logout";

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
  const { search, setSearch } = useFlower();
  const { user, handleLogOut } = useAuth();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link className="links" to="/auth">
          LOGIN
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link className="links" to="/myplants">
          MY PLANTS
        </Link>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
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
      <Link className="links" to="/">
        <MenuItem className="nav">HOME</MenuItem>
      </Link>
      <Link className="links" to="/flowers">
        <MenuItem className="nav">FLOWERS</MenuItem>
      </Link>
      <Link className="links" to="/contactus">
        <MenuItem className="nav">CONTACT US</MenuItem>
      </Link>
      <Link className="links" to="/myplants">
        <MenuItem className="nav">MY PLANTS</MenuItem>
      </Link>
      {user.email === "admin@admin" ? (
        <Link className="links" to="/admin">
          <MenuItem className="nav">ADMIN</MenuItem>
        </Link>
      ) : null}
    </Menu>
  );

  return (
    <div className="cont">
      <Box
        sx={{
          flexGrow: 12,
          marginBottom: 15,
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

              <Link to={"/"}>
                <Box
                  component="img"
                  sx={{
                    height: 64,
                  }}
                  alt="logo"
                  src={Logo}
                  color={`${MAIN_COLOR}`}
                ></Box>
              </Link>
              <Box>
                <Typography
                  color={`${ICON_COLOR}`}
                  sx={{
                    display: {
                      sm: "block",
                      xs: "none",
                      md: "block",
                      lg: "block",
                    },
                  }}
                >
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
                // color: `${MAIN_COLOR}`,
                color: "#284853",
              }}
            >
              <Link className="links" to="/">
                <MenuItem className="nav">HOME</MenuItem>
              </Link>
              <Link className="links" to="/flowers">
                <MenuItem className="nav">FLOWERS</MenuItem>
              </Link>
              <Link className="links" to="/contactus">
                <MenuItem className="nav">CONTACT US</MenuItem>
              </Link>
              <Link className="links" to="/myplants">
                <MenuItem className="nav">MY PLANTS</MenuItem>
              </Link>
              {user.email === "bekmyrza@gmail.com" ? (
                <Link className="links" to="/admin">
                  <MenuItem className="nav">ADMIN</MenuItem>
                </Link>
              ) : null}
            </Box>

            <Box
              flexGrow={1}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
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
                <Link to={"/myplants"}>
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                  >
                    <ShoppingCartOutlinedIcon sx={{ color: `${ICON_COLOR}` }} />
                  </IconButton>
                </Link>
              </Box>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {user.email ? (
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    onClick={handleLogOut}
                  >
                    <LogoutIcon sx={{ color: `${ICON_COLOR}` }} />
                  </IconButton>
                ) : (
                  <Link to={"/auth"}>
                    <IconButton
                      size="large"
                      edge="end"
                      aria-label="account of current user"
                      aria-controls={menuId}
                      aria-haspopup="true"
                    >
                      <AccountCircle sx={{ color: `${ICON_COLOR}` }} />
                    </IconButton>
                  </Link>
                )}
              </Box>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
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
