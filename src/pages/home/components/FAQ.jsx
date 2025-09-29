import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import FaqAccordion from "./FaqAccordion";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

function FAQ() {
  const navigate=useNavigate()
  return (
    <Box py={{ xs: 1, sm: 3, md: 5 }}>
      <Container>
        <Grid container spacing={2}>
          {/* Section Title */}
          <Grid size={{ xs: 12 }}>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Typography
                gutterBottom
                variant="h5"
                sx={{
                  fontSize: { xs: "1.2rem", sm: "1.6rem", md: "2rem" },
                }}
                fontWeight={500}
                className="gray-txt"
              >
                FAQs
              </Typography>
            </motion.div>
          </Grid>

          {/* Left Text + Button */}
          <Grid size={{ xs: 12, sm: 12, md: 5, lg: 4 }}>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={0.2}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
                }}
                fontWeight={500}
                gutterBottom
              >
                Have Questions?
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: "1.2rem", sm: "1.6rem", md: "2rem" },
                }}
                fontWeight={500}
                gutterBottom
              >
                Still Got Questions?
              </Typography>
              <button
                onClick={() => navigate("/contact")}
                style={{ marginTop: "1.4rem" }}
                className="btn-contact"
              >
                Contact Us
              </button>
            </motion.div>
          </Grid>

          {/* Accordion */}
          <Grid size={{ xs: 12, sm: 12, md: 7, lg: 8 }}>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={0.4}
            >
              <FaqAccordion />
            </motion.div>
          </Grid>
        </Grid>

        {/* Footer text */}
        <Box my={4}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.6}
          >
            <Typography fontWeight={600} variant="h2" gutterBottom>
              Get In Touch!
            </Typography>
            <Typography fontWeight={100} variant="subtitle1" gutterBottom>
              Have Question or need Assistance? We’re here to help!
            </Typography>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}

export default FAQ;
