import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

function BookingSection() {
  return (
    <Box py={{ xs: 2, sm: 3, md: 5 }}>
      <Grid container spacing={0} alignItems="stretch">
        {/* Left Image */}
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            display: { xs: "block", md: "block" }, // keep image visible on mobile
          }}
          component={motion.div}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            loading="lazy"
            src="/images/jus-shop-1.png"
            width="100%"
            style={{ height: "100%", objectFit: "cover" }}
          />
        </Grid>

        {/* Right Content */}
        <Grid
          size={{ xs: 12, md: 6 }}
          py={{ xs: 2, sm: 4, md: 8 }}
          // component={motion.div}
          // initial={{ opacity: 0, x: 60 }}
          // whileInView={{ opacity: 1, x: 0 }}
          // transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          // viewport={{ once: true, amount: 0.3 }}
        >
          <Box
            sx={{ height: "100%", py: 3, px: { xs: 3, md: 5 } }}
            className="dark-bg"
            justifyContent="center"
            display="flex"
            alignItems="center"
          >
            <Container>
              <Stack
                direction="column"
                justifyContent="center"
                height="100%"
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
                  fontWeight={600}
                >
                  Effortless
                  <br /> Booking for <br /> Your Next Ride
                </Typography>

                <Typography variant="h6" fontWeight={500} className="gray-txt">
                  Exceptional Experience
                </Typography>

                <Grid container spacing={2} alignItems="center">
                  <Grid size={{ xs: 12, sm: 12, md: 5 }}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        padding: "1rem 2rem",
                        fontSize: "1.1rem",
                        cursor: "pointer",
                      }}
                      className="btn-contact"
                    >
                      Book Now
                    </motion.button>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                    <Typography variant="h6" fontWeight={300}>
                      Pick your date, choose your time, and enjoy your purchase
                    </Typography>
                  </Grid>
                </Grid>
              </Stack>
            </Container>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BookingSection;
