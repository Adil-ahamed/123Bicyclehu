import React from "react";
import { Typography, Box, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";

const itemVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

function ServiceTwo() {
  return (
    <>
      <Container maxWidth="lg" sx={{ mb: 0 }}>
        <Box
          sx={{
            background: "url(/images/service-2.png)",
            backgroundPosition: "center",
            position: "relative",
            mb: 2,
            padding: "0.5rem 1rem",
            minHeight: "100vh",
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
            sx={{ py: { xs: 2, sm: 4, md: 8, lg: 10 } }}
          >
            <Grid size={{ xs: 0, sm: 6, md: 6 }} />
            <Grid size={{ xs: 12, sm: 6, md: 6 }} container mb={2}>
              {[
                {
                  title: "Cycle Sales",
                  desc: "A range of cycles from beginner to pro.",
                },
                {
                  title: "Repairs & Maintenance",
                  desc: "Brake turning, gear fixing, puncture repair and full servicing.",
                },
                {
                  title: "Accessories",
                  desc: "Helmets, locks, lights, gloves, bottles & more.",
                },
                {
                  title: "Rentals",
                  desc: "Affordable daily and weekly rentals for city and adventure rides.",
                },
                {
                  title: "Events & Rides",
                  desc: "Join group rides, cycling events, and workshops.",
                },
              ].map((service, i) => (
                <Grid key={i} size={{ xs: 12 }} mb={2}>
                  <motion.div
                    variants={itemVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    custom={i}
                  >
                    <Typography
                      gutterBottom
                      variant="h3"
                      fontWeight={600}
                      sx={{
                        fontSize: { xs: 24, sm: 30, md: 36, lg: 40 },
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h5"
                      fontWeight={200}
                      sx={{
                        fontSize: { xs: 18, sm: 18, md: 20, lg: 24 },
                      }}
                    >
                      {service.desc}
                    </Typography>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default ServiceTwo;
