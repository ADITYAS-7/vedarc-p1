import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Typography, styled } from "@mui/material";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { useState } from "react";
import AppDrawer from "./Drawer";
import { Link } from "react-router-dom";
export default function Navbar() {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    padding: 10,
  });
  const StyledLogo = styled(Box)({
    display: "flex",
    gap: 10,
  });
  const NavBox = styled(Box)({
    display: "flex",
    gap: 30,
  });
  const MenuItems = [
    {
      Name: "Home",
      Link: "/",
    },
    {
      Name: "About Us",
      Link: "/",
    },
    {
      Name: "Services",
      Link: "/",
    },
    {
      Name: "Our Team",
      Link: "/",
    },
  ];
  const RightNav = styled(Box)({
    display: "flex",
    gap: 1,
  });

  return (
    <AppBar sx={{ background: "black" }} position={"static"}>
      <StyledToolbar>
        <StyledLogo>
          <AdbIcon sx={{ color: "orange" }} />
          <Typography sx={{ color: "orange" }}>Logo</Typography>
        </StyledLogo>
        <NavBox sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
          {MenuItems.map((item) => (
            <Typography sx={{ cursor: "pointer" }}>
              <Link to={item.Link}> {item.Name}</Link>
            </Typography>
          ))}
        </NavBox>
        <RightNav>
          <Typography sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
            Contact Us
          </Typography>

          <AppDrawer
            sx={{ display: { xs: "block", sm: "block", md: "none" } }}
          />
        </RightNav>
      </StyledToolbar>
    </AppBar>
  );
}
