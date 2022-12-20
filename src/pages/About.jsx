import React from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import DrawerAppBar from "../components/Header_2";

export default function About() {
  return (
    <div>
      <DrawerAppBar />
      <Typography sx={{ m: 2 }} variant="h2" fontWeight={800}>
        About US{" "}
      </Typography>
      <Divider />
    </div>
  );
}
