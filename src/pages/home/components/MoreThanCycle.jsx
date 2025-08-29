import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

function MoreThanCycle() {
  return (
    <Box
      py={3}
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <Container maxWidth="xl" sx={{ px: 3 }}>
        {/* Heading */}
        <motion.div variants={fadeUp}>
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
            More Than Just a
            <br />
            Cycle Shop
          </Typography>
        </motion.div>

        {/* Grid Cards */}
        <Grid container spacing={2} mt={{ xs: 4, sm: 6, md: 10 }}>
          {/* Workshop & Repairs */}
          <Grid size={{ xs: 12, sm: 6, md: 5 }}>
            <motion.div variants={fadeUp}>
              <Box
                py={{ xs: 1, sm: 2, md: 4 }}
                px={{ xs: 1, sm: 4, md: 8 }}
                className="dark-bg"
              >
                <motion.img
                  src="/images/jus-shop-2.png"
                  width={"100%"}
                  height={"auto"}
                  alt="Workshop & Repairs"
                  variants={zoomIn}
                />
                <Typography my={2} variant="h6">
                  Workshop & Repairs
                </Typography>
                <Typography
                  my={2}
                  variant="subtitle1"
                  className="gray-txt manrope-txt-family"
                  fontWeight={300}
                >
                  Experts cycle maintenance, tune-ups, and full servicing handled
                  with care and precision. Our trained technicians ensure your
                  ride stays smooth and safe whether it’s a quick fix or a full
                  overhaul.
                </Typography>
                <button className="btn-contact">Contact Us</button>
              </Box>
            </motion.div>
          </Grid>

          {/* Accessories */}
          <Grid size={{ xs: 12, sm: 6, md: 3.5 }}>
            <motion.div variants={fadeUp}>
              <Box py={0} px={{ xs: 1, sm: 2, md: 4 }}>
                <motion.img
                  src="/images/jus-shop-1.png"
                  width={"100%"}
                  height={"auto"}
                  alt="Accessories"
                  variants={zoomIn}
                />
                <Typography
                  mt={7}
                  variant="subtitle1"
                  className="gray-txt manrope-txt-family"
                  fontWeight={300}
                >
                  From helmets and lights to baskets, bottle holders, and locks
                  we offer a wide range of accessories to upgrade your cycling
                  experience. Designed for safety, style, and function, our gear
                  helps you ride smarter and safer.
                </Typography>
              </Box>
            </motion.div>
          </Grid>

          {/* Community */}
          <Grid size={{ xs: 12, sm: 6, md: 3.5 }}>
            <motion.div variants={fadeUp}>
              <Box py={0} px={{ xs: 1, sm: 2, md: 4 }}>
                <motion.img
                  src="/images/about-2.png"
                  width={"100%"}
                  height={"auto"}
                  alt="Community"
                  variants={zoomIn}
                />
                <Typography
                  mt={7}
                  variant="subtitle1"
                  className="gray-txt manrope-txt-family"
                  fontWeight={300}
                >
                  Join our cycling community for weekly group rides, training
                  camps, and local events. Whether you’re a beginner or a seasoned
                  rider, we create experiences that connect, inspire, and energize
                  riders of all levels.
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default MoreThanCycle;
