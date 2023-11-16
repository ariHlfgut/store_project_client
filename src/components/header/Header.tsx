import * as React from "react";
import { Search, SearchIconWrapper, StyledInputBase } from "./styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LoginMenu from "../loginMenu/loginMenu";
export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img
            height={"50px"}
            src="https://www.bing.com/images/blob?bcid=qIy0NAmZ0U8G0A"
            alt=""
          />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link to={"/storeLocation"}>
              <IconButton
                className="icon"
                color="inherit"
                aria-label="shopping cart"
                aria-haspopup="true"
                size="large"
              >
                <LocationOnIcon sx={{ color: "white" }} />
              </IconButton>
            </Link>
            <Link to={"/"}>
              <IconButton
                className="icon"
                color="inherit"
                aria-label="shopping cart"
                aria-haspopup="true"
                size="large"
              >
                <HomeIcon sx={{ color: "white" }} />
              </IconButton>
            </Link>
            <Link to={"/cartPreview"}>
              <IconButton
                className="icon"
                color="inherit"
                aria-label="shopping cart"
                aria-haspopup="true"
                size="large"
              >
                <ShoppingCartSharpIcon sx={{ color: "white" }} />
              </IconButton>
            </Link>
            {/* <Link to={"/login"}> */}
              <LoginMenu/>
              {/* <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit">
                <AccountCircle className="icon" sx={{ color: "white" }} />
              </IconButton> */}
            {/* </Link> */}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
