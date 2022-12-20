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
    <div>
      <footer>
        <Box sx={{ background: "black", height: "500px" }}>
          <Stack direction={{ xs: "row", md: "row" }} p={7}>
            <Box flex={1}>
              <Typography variant="h6" color={"white"} align={"center"}>
                Visit us
              </Typography>
              <Divider />
              <Typography color={"white"} align={"center"}>
                Wellington Central, Wellington 6011
              </Typography>
              <Typography color={"white"} align={"center"}>
                <Link to="/About">Contact Us </Link>
              </Typography>{" "}
            </Box>
            <Box flex={1}>
              {" "}
              <Typography variant="h6" color={"white"} align={"center"}>
                Data Policy
              </Typography>{" "}
              <Typography color={"white"} align={"center"}>
                Cookies
              </Typography>{" "}
              <Typography color={"white"} align={"center"}>
                Data Safety
              </Typography>
            </Box>

            <Box>
              {" "}
              <Typography color={"white"} align={"center"} variant="h6">
                Follow us
              </Typography>{" "}
              <SocialBox>
                <FacebookIcon />
                <Instagram />
                <Twitter />
                <LinkedIn />
              </SocialBox>
            </Box>
          </Stack>
          <address>
            {" "}
            <Typography
              variant="body2"
              color={"white"}
              align={"center"}
              pt={20}
            >
              {" "}
              Copyright © 2022 VedArc Inc. All rights reserved.
            </Typography>
          </address>
        </Box>
      </footer>
    </div>
  );
}
