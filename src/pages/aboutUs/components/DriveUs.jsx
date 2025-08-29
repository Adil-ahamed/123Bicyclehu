import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

function DriveUs() {
  return (
    <Box py={{ xs: 2, sm: 3, md: 5 }} className="dark-bg">
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems={"center"}>
          {/* Left Text Section */}
          <Grid size={{ xs: 12, sm: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Box mb={{ xs: 3, sm: 4, md: 8 }}>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "1.5rem",
                      sm: "2.5rem",
                      md: "3rem",
                    },
                  }}
                  variant="h2"
                  gutterBottom
                  className="lime-txt"
                  fontWeight={600}
                >
                  What Drives Us
                </Typography>
              </Box>
            </motion.div>

            {/* Each section fades in one after another */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
                }}
                variant="h2"
                mb={2}
                gutterBottom
                fontWeight={500}
              >
                Passion for Performance
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "0.7rem", sm: "0.9rem", md: "1.3rem" },
                }}
                variant="h2"
                className="gray-txt"
                mb={2}
                gutterBottom
                fontWeight={200}
              >
                We treated every cycle like our own.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
                }}
                variant="h2"
                mb={2}
                gutterBottom
                fontWeight={500}
              >
                Community First
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "0.7rem", sm: "0.9rem", md: "1.3rem" },
                }}
                variant="h2"
                className="gray-txt"
                mb={2}
                gutterBottom
                fontWeight={200}
              >
                We ride together, grow together.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
                }}
                variant="h2"
                mb={2}
                gutterBottom
                fontWeight={500}
              >
                Honest Service
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "0.7rem", sm: "0.9rem", md: "1.3rem" },
                }}
                variant="h2"
                className="gray-txt"
                mb={2}
                gutterBottom
                fontWeight={200}
              >
                No shortcuts. Just skilled hands and solid work.
              </Typography>
            </motion.div>
          </Grid>

          {/* Right Image Section */}
          <Grid size={{ xs: 12, sm: 12, md: 4 }}>
            {/* <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true, amount: 0.3 }}
            > */}
              <img loading="lazy"  src="/images/wide-1.png" width={"100%"} />
            {/* </motion.div> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default DriveUs;
