import React from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { Typography, styled, IconButton } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export default function AppDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
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
    {
      Name: "Contact Us",
      Link: "/",
    },
  ];
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon sx={{ display: { xs: "block", sm: "block", md: "none" } }} />
      </IconButton>
      <Drawer
        variant="temporary"
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        sx={{
          "& .MuiDrawer-paper": { boxSizing: "border-box" },
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          {MenuItems.map((item) => (
            <Typography variant="h6" sx={{ p: 2, cursor: "pointer" }}>
              {item.Name}
            </Typography>
          ))}{" "}
        </Box>
      </Drawer>
    </>
  );
}
