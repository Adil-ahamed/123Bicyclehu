import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "The service is top-notch and the staff truly know bikes.",
    name: "Aarav Nair",
    location: "Malappuram",
  },
  {
    quote: "Love the vibe and the bikes are awesome. Highly recommended.",
    name: "Rohan D",
    location: "Calicut",
  },
  {
    quote: "Great community rides and amazing staff support every time.",
    name: "Sneha Kumar",
    location: "Kochi",
  },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Testimonials() {
  return (
    <Box my={5} className="dark-bg">
      <Container>
        <Grid
          container
          spacing={{ xs: 1.5, sm: 3, md: 5 }}
          px={3}
          py={8}
          alignItems="center"
        >
          {/* Heading */}
          <Grid size={{ xs: 12 }}>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem" },
              }}
              fontWeight={500}
              className="gray-txt"
            >
              Testimonials
            </Typography>
          </Grid>

          {/* Left side */}
          <Grid size={{ xs: 12, sm: 12, md: 4 }}>
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              }}
              fontWeight={600}
              className="lime-txt"
            >
              What our
              <br /> Clients Say
            </Typography>

            <Box>
              <img loading="lazy" 
                src="/images/wide-1.png"
                width="100%"
                height={250}
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Grid>

          {/* Right side - Testimonials */}
          <Grid size={{ xs: 12, sm: 12, md: 8 }}>
            <Stack
              component={motion.div}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              direction={{ xs: "column", md: "row" }}
              justifyContent={{ xs: "center", md: "space-around" }}
              gap={3}
            >
              {testimonials.map((t, index) => (
                <motion.div key={index} variants={cardVariants}>
                  <Box>
                    <Typography
                      variant="h6"
                      component="blockquote"
                      fontWeight={500}
                      className="manrope-txt-family"
                      sx={{ mb: 2 }}
                    >
                      “ {t.quote} ”
                    </Typography>
                    <Stack direction="row" alignItems="center" gap={3}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          bgcolor: "grey.700",
                          borderRadius: "50%",
                        }}
                      />
                      <Box>
                        <Typography variant="h6">{t.name}</Typography>
                        <Typography
                          variant="body1"
                          fontWeight={300}
                          className="gray-txt"
                        >
                          {t.location}
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </motion.div>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Testimonials;
