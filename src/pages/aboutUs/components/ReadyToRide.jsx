import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

function ReadyToRide() {
  return (
    <Box className="dark-bg">
      <Container>
        <Grid container spacing={2}>
          <Grid size={{ xs: 0, sm: 0, md: 6 }}>
            <img loading="lazy" 
              src="/images/jus-shop-1.png"
              style={{ objectFit: "cover" }}
              width={"100%"}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6 }}>
            <Stack
              direction="column"
              justifyContent="center"
              sx={{ height: "100%" }}
              p={2}
              gap={2}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: {
                    xs: "1.8rem",
                    sm: "2.5rem",
                    md: "4rem",
                  },
                }}
                fontWeight={"600"}
              >
                Ready to Ride
              </Typography>
              <Box width="45%" sx={{ height: 2.2, bgcolor: "#808080" }} />
              <Typography fontWeight={100} variant="h5">
                Check out our service or a book<br/> a quick repair online
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ReadyToRide;
