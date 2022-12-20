import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Twitter } from "@mui/icons-material";
import img from "../assets/img/home.jpg";
export default function Hero(props) {
  return (
    <Box align="center">
      <Box
        sx={{
          backgroundImage: `url("https://wallpaperaccess.com/full/3794734.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          height: { xs: 600, sm: 800 },
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          align="center"
          sx={{
            width: { xs: "100%", sm: "70%", md: "60%" },
            p: { xs: 5, sm: 8, md: 15, lg: 20 },
          }}
        >
          <Box sx={{ background: "white", opacity: " 0.8" }}>
            <Typography
              sx={{ fontSize: { xs: 28, sm: 40, lg: 60 } }}
              pt={8}
              variant="h2"
              align="center"
              fontWeight={800}
            >
              {props.tagline}
            </Typography>

            <Button
              variant="contained"
              color="primary"
              textAlign="center"
              sx={{ mt: 4, mb: 4 }}
            >
              Work with us
            </Button>
          </Box>{" "}
        </Box>{" "}
      </Box>
      <Box mt={10}>
        <Typography align="center" variant="h4" sx={{ fontWeight: 900, pt: 4 }}>
          Welcome to VedArc.{" "}
          {/* props to add for the company name and tagline */}
        </Typography>
        <Typography variant="h6" align="center" sx={{ fontWeight: 500, pb: 4 }}>
          We’re here to help you and your team <br /> evaluate, establish, and
          evolve your ICT <br /> architecture ecosystems.
          <br /> <br /> Enabling you to deliver effective <br /> outcomes for
          your organisation.{" "}
        </Typography>
      </Box>
      <Button
        component={Link}
        to={"/services"}
        variant="contained"
        color="warning"
        textAlign="center"
        sx={{ mb: 2 }}
      >
        Get Started
      </Button>
    </Box>
  );
}
