import React from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import { Stack } from "@mui/system";
import styled from "@emotion/styled";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Footer() {
  const SocialBox = styled(Box)({
    display: "flex",
    gap: 10,
    color: "white",
  });
  return (
    <footer style={{ background: "black", p: 10 }}>
      <Box p={4}>
        <Typography variant="h6" color={"white"}>
          Follow us
        </Typography>
        <SocialBox>
          <FacebookIcon />
          <Instagram />
          <Twitter />
          <LinkedIn />
        </SocialBox>
      </Box>
      <address>
        {" "}
        <Typography
          variant="body2"
          color={"white"}
          align={"center"}
          pt={5}
          pb={2}
        >
          {" "}
          Copyright © 2022 VedArc Inc. All rights reserved.
        </Typography>
      </address>
    </footer>
  );
}
