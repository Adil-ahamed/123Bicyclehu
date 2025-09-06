import React from "react";

import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import { Icon } from "@iconify/react";

function Footer() {
  return (
    <Box className="dark-bg">
      <Container maxWidth={"lg"}>
        <Box py={5}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 8 }}>
              <Typography
                variant="subtitle1"
                className="gray-txt"
                fontWeight={500}
              >
                123 BICYCLE HUB , MARS TOWER <br />
                Opposite Dhaya pharmacy
                <br />
                Alathiyur TIRUR,
                <br />
                Pin 676102
              </Typography>
            </Grid>
            <Grid
              size={{ xs: 12, sm: 4 }}
              textAlign={{ xs: "left", sm: "center" }}
            >
              <Typography
                variant="subtitle1"
                className="gray-txt"
                fontWeight={500}
                gutterBottom
              >
                {" "}
                Follow Us
              </Typography>
              <Stack
                direction="row"
                gap={2}
                justifyContent={{ xs: "flex-start", sm: "center" }}
              >
                <IconButton sx={{ width: 40 }} className="social-links">
                  <Icon
                    icon="fa7-brands:instagram"
                    style={{ color: "black" }}
                  />
                </IconButton>
                <IconButton sx={{ width: 40 }} className="social-links">
                  <Icon
                    icon="fa7-brands:x-twitter"
                    style={{ color: "black" }}
                  />
                </IconButton>
                <IconButton sx={{ width: 40 }} className="social-links">
                  <Icon
                    icon="fa7-brands:facebook-f"
                    style={{ color: "black" }}
                  />
                </IconButton>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12 }} my={3} textAlign='center'>
              <Typography
                className="logo-txt"
                 fontSize={{ xs: 26, sm: 38, md:76,lg: 96}}
                variant="h4"

              >
                <Typography
                variant="span"
                  className="logo-txt lime-txt"
                   fontSize={{ xs: 32, sm: 44, md:90,lg: 116}}
                >
                  123
                </Typography>
                BICYCLEHUB
              </Typography>
            </Grid>
            <Grid size={{ xs: 12 }} mb={3}>
              <Stack
                direction={{ xs: "column", sm: "column", md: "row" }}
                gap={3}
                justifyContent={"center"}
              >
                <Typography className="gray-txt" variant="h6" fontWeight={500}>
                  Home
                </Typography>
                <Typography className="gray-txt" variant="h6" fontWeight={500}>
                  About Us
                </Typography>
                <Typography className="gray-txt" variant="h6" fontWeight={500}>
                  Products
                </Typography>
                <Typography className="gray-txt" variant="h6" fontWeight={500}>
                  Service
                </Typography>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12 }} mb={1} textAlign={"center"}>
              <Typography variant="body2" fontWeight={100}>
                2025 123 Bicycle Hub. All Right Reserved
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
