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
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { padding, styled } from "@mui/system";
import { Instagram, LinkedIn, Twitter } from "@mui/icons-material";

import { Link } from "react-router-dom";
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  {
    Name: "About ",
    Link: "/about",
  },
  {
    Name: "Services",
    Link: "/services",
  },
  {
    Name: "Blog",
    Link: "/blog",
  },
  {
    Name: (
      <Button
        sx={{ display: { xs: "none", md: "block" } }}
        color="warning"
        variant="outlined"
      >
        Contact
      </Button>
    ),
    Link: "/contact",
  },
  {
    Name: <Twitter />,
    Link: "/",
  },
  { Name: <LinkedIn />, Link: "/" },
];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 800 }}>
        Ved<b style={{ color: "orange" }}>Arc</b>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.Name} />
            </ListItemButton>
          </ListItem>
        ))}{" "}
      </List>
      <Button color="warning" variant="outlined">
        Contact
      </Button>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <AppBar component="nav" sx={{ background: "black" }}>
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "block", sm: "block" },
              padding: { xs: 2, sm: 4 },
            }}
          >
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              Ved<b style={{ color: "orange" }}>Arc</b>
            </Link>
            {/* props to pass for the logo */}
          </Typography>

          <Box
            alignItems={"center"}
            sx={{
              display: { xs: "none", md: "flex" },
              display: "flex",
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "#fff",
                  display: { xs: "none", md: "flex" },
                  padding: 4,
                  justifyContent: "space-between",
                }}
              >
                <Link style={{ textDecoration: "none" }} to={item.Link}>
                  {" "}
                  <Typography variant="h8" sx={{ color: "white" }}>
                    {item.Name}
                  </Typography>
                </Link>
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 1, display: { sm: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 1 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
