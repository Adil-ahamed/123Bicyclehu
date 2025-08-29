import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

function OurStory() {
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          px={1}
          py={{ xs: 2, sm: 4, md: 10 }}
          alignItems="center"
        >
          {/* Left Section */}
          <Grid size={{ xs: 12, sm: 4, md: 4 }} px={{ xs: 0, sm: 0, md: 3 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Typography variant="h5" fontWeight={500} className="gray-txt">
                Our story
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Box sx={{ mt: { xs: 2, sm: 4, md: 8 } }}>
                <img loading="lazy"  src="/images/about-1.png" style={{ width: "100%" }} />
              </Box>
            </motion.div>
          </Grid>

          {/* Right Section */}
          <Grid size={{ xs: 12, sm: 8, md: 8 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Typography
                variant="h4"
                fontSize={{ xs: 16, sm: 22, md: 30, lg: 36 }}
                className="gray-txt manrope-txt-family"
                fontWeight={300}
                sx={{ lineHeight: 1.4 }}
              >
                <span className="lime-txt"> Founded in 2020,</span> 123 Bicycle
                Hub Started in a Small garage with a big vision to make quality
                cycling accessible to everyone.
                <span className="lime-txt">
                  {" "}
                  From repairs to custom builds, we’ve grown into a trusted name
                  for
                </span>
                cycle lovers across the city.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default OurStory;
