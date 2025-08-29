import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

function Address() {
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container spacing={2} px={1} py={{ xs: 2, sm: 4, md: 10 }}>
          {/* Section Title */}
          <Grid size={{ xs: 12 }} px={{ xs: 0, sm: 0, md: 3 }}>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Typography variant="h5" fontWeight={500} className="gray-txt">
                Contact us
              </Typography>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 0, sm: 0, md: 3 }} />

          {/* Contact Details */}
          <Grid
            size={{ xs: 12, sm: 12, md: 9 }}
            container
            spacing={2}
            alignItems="center"
          >
            {[
              { label: "Address", value: "123 Cycle Street, Tirur, 676101" },
              { label: "Phone", value: "+91 1234567890" },
              { label: "Email", value: "yaseen@gmail.com" },
              {
                label: "Store Hours",
                value: "Mon-Sat : 9am - 8pm\nSunday : 10am - 4pm",
              },
            ].map((item, index) => (
              <React.Fragment key={item.label}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={index * 0.2}
                  >
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: { xs: "16px", sm: "22px", md: "30px" },
                      }}
                      fontWeight={500}
                    >
                      {item.label}
                    </Typography>
                  </motion.div>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={index * 0.2 + 0.1}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: { xs: "14px", sm: "20px", md: "26px" },
                        whiteSpace: "pre-line", // keeps line breaks
                      }}
                      fontWeight={300}
                      className="gray-txt"
                    >
                      {item.value}
                    </Typography>
                  </motion.div>
                </Grid>
              </React.Fragment>
            ))}

            {/* Google Map */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "16px", sm: "22px", md: "30px" },
                }}
                fontWeight={500}
              >
                Google Map
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.8}
              >
                <Box
                  sx={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.3234667446004!2d75.9368009!3d10.8629836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b1cfa7fa38a1%3A0xc00d4c4df0ebde6f!2s123%20cycle%20Hub!5e0!3m2!1sen!2sin!4v1756435775250!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Address;
