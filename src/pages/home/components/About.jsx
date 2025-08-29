import React from "react";
import { Container, Grid, Stack, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // delay each child
    },
  },
};

function About() {
  return (
    <Box className="gray-bg">
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          px={1}
          py={{ xs: 2, sm: 4, md: 10 }}
          component={motion.div}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Title */}
          <Grid size={{ xs: 12 }} px={{ xs: 0, sm: 0, md: 3 }}>
            <motion.div variants={fadeUp}>
              <Typography variant="h5" fontWeight={500} className="gray-txt">
                About us
              </Typography>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 0, sm: 0, md: 3 }} />

          {/* Description */}
          <Grid size={{ xs: 12, sm: 12, md: 9 }}>
            <motion.div variants={fadeUp}>
              <Typography
                variant="h4"
                fontSize={{ xs: 20, sm: 30, md: 40 }}
                className="gray-txt manrope-txt-family"
                fontWeight={{ xs: 400, sm: 400, md: 500 }}
                sx={{ lineHeight: 1.4 }}
              >
                <span className="black-txt">
                  We offer a complete cycle experience
                </span>{" "}
                for casual riders, commuters, and enthusiasts alike. Whether it’s
                a new ride or a quick tune-up,
                <span className="black-txt">
                  123 Bicycle Hub delivers quality with every spin.
                </span>
              </Typography>
            </motion.div>

            {/* Images */}
            <Stack direction="row" gap={4} mt={4}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 6 }}>
                  <motion.img
                    src="/images/about-1.png"
                    style={{ width: "100%" }}
                    variants={fadeUp}
                    whileHover={{ scale: 1.05 }} // subtle hover zoom
                    transition={{ duration: 0.4 }}
                  />
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <motion.img
                    src="/images/about-2.png"
                    style={{ width: "100%" }}
                    variants={fadeUp}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                </Grid>
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About;
