import React from "react";
import Categories from "../components/Categories";
import AppDrawer from "../components/Drawer";
import Footer from "../components/Footer";
import Navbar from "../components/Header";
import Hero from "../components/Hero";
import Button1 from "../components/button/Button";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import DrawerAppBar from "../components/Header_2";
import Sample from "../components/Sample";
export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <DrawerAppBar logo="" />
      <Hero
        tagline={
          <>
            Digital <br /> transformation <br /> through cloud
          </>
        }
      />
      <Categories />
      <Sample />
      <Footer />
    </div>
  );
}
