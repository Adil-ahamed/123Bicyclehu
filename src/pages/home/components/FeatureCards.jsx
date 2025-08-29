import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";

const cardsData = [
  {
    number: "01",
    title: "Trusted",
    description:
      "Our customers rely on us for quality products, honest service, and consistent performance every ride, every time.",
    bgClass: "lime-bg",
    barColor: "#b6d434",
  },
  {
    number: "02",
    title: "Affordable",
    description:
      "Premium cycles and services that don't break the bank. We believe cycling should be accessible to everyone.",
    bgClass: "gray-bg",
    barColor: "#cdcdcd",
  },
  {
    number: "03",
    title: "Friendly",
    description:
      "From first time buyers to pro riders, our team is here to support, guide, and help with a smile.",
    bgClass: "lime-bg",
    barColor: "#b6d434",
  },
];

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const numberVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "backOut" } },
};

function FeatureCards() {
  return (
    <Container maxWidth="lg">
      <Box
        my={8}
        component={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {cardsData.map((card, index) => (
          <motion.div key={index} variants={cardVariants}>
            <Box
              sx={{
                px: { xs: 2, sm: 3, md: 6 },
                py: { xs: 2, sm: 3, md: 0 },
                my: 4,
                width: "100%",
                minHeight: 250,
              }}
              className={card.bgClass}
            >
              <Grid container spacing={3} minHeight={250} alignItems="center">
                {/* Number */}
                <Grid sx={{ position: "relative" }} size={{ xs: 12, sm: 12, md: 2 }}>
                  <Box
                    sx={{
                      position: "absolute",
                      width: "100%",
                      height: 30,
                      top: "70%",
                      left: 0,
                      background: card.barColor,
                    }}
                  />
                  <motion.div variants={numberVariants}>
                    <Typography
                      variant="h1"
                      sx={{
                        fontSize: {
                          xs: "3rem",
                          sm: "5rem",
                          md: "6.5rem",
                        },
                      }}
                      fontWeight={400}
                      className="light-gray-txt"
                    >
                      {card.number}
                    </Typography>
                  </motion.div>
                </Grid>

                {/* Title */}
                <Grid size={{ xs: 12, sm: 12, md: 4 }}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: {
                        xs: "2rem",
                        sm: "2.5rem",
                        md: "3.5rem",
                        lg: "4rem",
                      },
                    }}
                    fontWeight={600}
                    className="light-gray-txt"
                  >
                    {card.title}
                  </Typography>
                </Grid>

                {/* Description */}
                <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                  <Typography
                    variant="h6"
                    fontWeight={400}
                    className="light-gray-txt manrope-txt-family"
                  >
                    {card.description}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Container>
  );
}

export default FeatureCards;
