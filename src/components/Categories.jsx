import styled from "@emotion/styled";
import { Box, Typography, Divider } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const StyledBox = styled(Box)({
  height: 200,
  width: "100%",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
});
const StyledTypography = styled(Typography)({
  margin: "15% 15% 15% 15%",
  padding: 10,
  background: "black",
  opacity: "0.8",
});
export default function Categories() {
  return (
    <Box>
      <Typography
        variant="h4"
        m={10}
        fontWeight="400"
        sx={{ textAlign: { xs: "center", md: "left" } }}
      >
        OUR SERVICES
      </Typography>
      <Divider />
      <Stack
        align="center"
        spacing={{ xs: 1, sm: 2, md: 4 }}
        direction={{ xs: "column", md: "row" }}
        margin={4}
      >
        <StyledBox
          sx={{
            backgroundImage: `url("data:image/jpeg;base64,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")`,
          }}
        >
          <StyledTypography align="center" variant="h5" color={"white"}>
            Cloud Operating Model
          </StyledTypography>
        </StyledBox>
        <StyledBox
          sx={{
            backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/002/561/912/original/security-system-interface-on-dark-purple-background-vector.jpg")`,
          }}
        >
          <StyledTypography align="center" variant="h5" color={"white"}>
            Cyber Security
          </StyledTypography>
        </StyledBox>

        <StyledBox
          sx={{
            backgroundImage: `url("https://img.freepik.com/premium-vector/3d-wireframe-green-room-abstract-perspective-grid-retro-futuristic-concept-vector-illustration_634443-1164.jpg?w=2000")`,
          }}
        >
          <StyledTypography align="center" variant="h5" color={"white"}>
            Strategy and Architecture
          </StyledTypography>
        </StyledBox>
      </Stack>
      <Stack
        align="center"
        spacing={{ xs: 1, sm: 2, md: 4 }}
        direction={{ xs: "column", md: "row" }}
        margin={4}
      >
        <StyledBox
          sx={{
            backgroundImage: `url("https://www.costrategix.com/wp-content/uploads/2020/03/6-signs-that-indicate-digital-transformation-costrategix-blog.jpg")`,
          }}
        >
          <StyledTypography align="center" variant="h5" color={"white"}>
            Managed Architecture Services (MaaS)
          </StyledTypography>
        </StyledBox>
        <StyledBox
          sx={{
            backgroundImage: `url("https://s37605.pcdn.co/wp-content/uploads/2021/05/enterprise-architecture-change-management.jpg")`,
          }}
        >
          <StyledTypography align="center" variant="h5" color={"white"}>
            Architecture Practice and Governance{" "}
          </StyledTypography>
        </StyledBox>

        <StyledBox
          sx={{
            backgroundImage: `url("https://d2poqm5pskresc.cloudfront.net/wp-content/uploads/2016/09/application-strategy-digital-transformation-e1569841021706.png")`,
          }}
        >
          <StyledTypography align="center" variant="h5" color={"white"}>
            Application Transformation{" "}
          </StyledTypography>
        </StyledBox>
      </Stack>
    </Box>
  );
}
