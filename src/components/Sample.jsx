import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Sample() {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&w=1000&q=80")`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          height: 600,
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
              variant="h5"
              color="blue"
              align="center"
              pt={8}
              fontWeight="700"
            >
              We Help You
            </Typography>
            <Typography variant="h3" align="center">
              Here's what you need
            </Typography>
            <Typography variant="h6" align="center" pb={2}>
              Experience the Best
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              textAlign="center"
              sx={{ mb: 4 }}
            >
              Check it out
            </Button>
          </Box>{" "}
        </Box>{" "}
      </Box>
    </div>
  );
}
