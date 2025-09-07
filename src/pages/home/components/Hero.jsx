import React from "react";
import {
  Typography,
  Box,
  Container,
  Grid,
  Stack,
  IconButton,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

// Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

function Hero() {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{ m: { xs: 0, sm: "auto" }, p: { xs: 0, sm: "auto" } }}
      >
        <Box
          sx={{
            backgroundImage: {
              xs: "url(/images/hero-bg-2.JPG)", // mobile
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
          component={motion.div}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
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
              {/* Heading */}
              <motion.div variants={fadeUp}>
                <Typography
                  gutterBottom
                  variant="h2"
                  fontWeight={700}
                  sx={{ fontSize: { xs: 36, sm: 36, md: 52, lg: 60 } }}
                  className="lime-txt"
                >
                  Ride into a New
                  <br />
                  Adventure
                </Typography>
              </motion.div>

              {/* Subtext */}
              <motion.div variants={fadeUp}>
                <Typography
                  gutterBottom
                  variant="h2"
                  fontWeight={500}
                  sx={{ fontSize: { xs: 16, sm: 16, md: 24 } }}
                  className="manrope-txt-family"
                >
                  We offer a great cycling experience for all ages with quality
                  bikes, expert servicing, and hassle free booking
                </Typography>
              </motion.div>

              {/* Buttons + Social Icons */}
              <Stack
                mt={3}
                direction="row"
                gap={2}
                component={motion.div}
                variants={staggerContainer}
              >
                {/* 📞 Contact Us -> Telephone link */}
                <motion.a
                  href="tel:+917994664789"
                  className="btn-contact"
                  variants={fadeUp}
                  whileHover={{ scale: 1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ textDecoration: "none" }}
                >
                  Contact Us
                </motion.a>

                {/* 💬 WhatsApp link */}
                <motion.a
                  href="https://wa.me/917994664789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-contact"
                  variants={fadeUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ textDecoration: "none" }}
                >
                  WhatsApp Us
                </motion.a>

                {/* Instagram */}
                {["fa7-brands:instagram"].map((icon, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeUp}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconButton sx={{ width: 40 }} className="social-links">
                      <Icon icon={icon} style={{ color: "black" }} />
                    </IconButton>
                  </motion.div>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Dark Section */}
      <Box
        className="dark-bg"
        sx={{ py: 3 }}
        component={motion.div}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={2} alignItems="center">
            <Grid size={{ xs: 12, sm: 6, md: 7 }}>
              <Typography variant="h5" fontWeight="bold">
                Build for Riders.
              </Typography>
              <Typography variant="h5" fontWeight="bold">
                Trusted by the Community.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 5 }}>
              <Typography variant="subtitle1" className="manrope-txt-family">
                From first time riders to daily commuters, 123 bicycle hubs your
                go to destination for quality cycles, expert repairs, and a
                cycling lifestyle that moves with you
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Hero;
