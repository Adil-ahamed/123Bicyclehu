import React from "react";

import {
  Typography,
  Box,
  Container,
  Grid,
  Stack,
} from "@mui/material";


function HeroAbout() {
  return (
    <>
      <Container maxWidth="lg" sx={{ m: { xs: 0, sm: "auto" },p: { xs: 0, sm: "auto" } }}>
        <Box
          sx={{
            backgroundImage: {
              xs: "url(/images/about-bg-2.JPG)", // mobile
              sm: "url(/images/hero-bg.png)", // tablet & up
            },
            backgroundPosition: "center",
            position: "relative",
            backgroundSize: "cover",
            height: { xs: "calc(80vh - 77px)", sm: "100vh" },
            overflow: "hidden",
            padding: "0.5rem 1rem",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Grid
            container
            spacing={0}
            height={"100%"}
            alignItems={"end"}
            sx={{ pb: { xs: 2, sm: 4, md: 8 } }}
          >
            <Grid size={{ xs: 0, sm: 0, md: 5.5 }} />
            <Grid size={{ xs: 12, sm: 12, md: 5.6 }}>
              <Typography
                gutterBottom
                variant="h2"
                fontWeight={700}
                sx={{ fontSize: { xs: 26, sm: 30, md: 40, lg: 50 } }}
                className="lime-txt"
              >
                More Than Cycle Shop its a Movements on Wheels
              </Typography>
              <Typography
                gutterBottom
                variant="h2"
                fontWeight={500}
                sx={{ fontSize: { xs: 16, sm: 16, md: 24 } }}
                className="manrope-txt-family"
              >
                Discover how 123 Cycle Hub Started and why we’re passionate
                about every ride.
              </Typography>
              <Stack mt={3} direction="row" gap={2}>
                <button className="btn-contact">Explore Our Services</button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default HeroAbout;
