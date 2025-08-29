import React from "react";
import { Typography, Box, Container, Grid, Stack } from "@mui/material";
import { motion } from "framer-motion";

function HeroService() {
  return (
    <>
      <Container maxWidth="lg" sx={{ mb: 0 }}>
        <Box
          sx={{
            background: "url(/images/service-1.png)",
            backgroundPosition: "center",
            position: "relative",
            mb: 2,
            padding: "0.5rem 1rem",
            height: "100vh",
            overflow: "hidden",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Grid
            container
            spacing={0}
            height={"100%"}
            alignItems={"end"}
            sx={{ pb: { xs: 2, sm: 4, md: 8 } }}
          >
            <Grid size={{ xs: 0, sm: 6, md: 6 }}>
              {/* Placeholder content */}
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 6 }}>
              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Typography
                  gutterBottom
                  variant="h2"
                  fontWeight={700}
                  sx={{ fontSize: { xs: 26, sm: 30, md: 40, lg: 50 } }}
                  className="lime-txt"
                >
                  What We Offer
                </Typography>
              </motion.div>

              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              >
                <Typography
                  gutterBottom
                  variant="h2"
                  fontWeight={500}
                  sx={{ fontSize: { xs: 16, sm: 16, md: 24 } }}
                  className="manrope-txt-family"
                >
                  Whether you’re a daily commuter, weekend rider or cycle
                  enthusiast we’ve got the service to keep you moving.
                </Typography>
              </motion.div>

              {/* Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
              >
                <Stack mt={3} direction="row" gap={2}>
                  <button className="btn-contact">Explore Our Services</button>
                </Stack>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default HeroService;
