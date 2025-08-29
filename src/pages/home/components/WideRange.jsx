import React from "react";
import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import Slider from "react-slick";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Animations
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};
const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

// Custom arrows
function NextArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        backgroundColor: "#C6FF00",
        color: "#000",
        position: "absolute",
        right: "-22px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 2,
        width: 40,
        height: 40,
        "&:hover": { backgroundColor: "#b2e600" },
      }}
    >
      <Icon icon="material-symbols:arrow-forward-rounded" />
    </IconButton>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        backgroundColor: "#C6FF00",
        color: "#000",
        position: "absolute",
        left: "-22px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 2,
        width: 40,
        height: 40,
        "&:hover": { backgroundColor: "#b2e600" },
      }}
    >
      <Icon icon="material-symbols:arrow-back-rounded" />
    </IconButton>
  );
}

function WideRange() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <Box sx={{ textAlign: "center", mt: 2 }}>
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </Box>
    ),
    customPaging: () => (
      <Box
        sx={{
          width: 10,
          height: 10,
          backgroundColor: "#C6FF00",
          borderRadius: "50%",
          boxShadow: "3px 3px 0px #282828",
        }}
      />
    ),
  };

  return (
    <Box
      className="dark-bg"
      sx={{ py: { xs: 0, sm: 1, md: 10 } }}
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          alignItems="flex-end"
          flexDirection={{
            xs: "column-reverse",
            sm: "column-reverse",
            md: "row",
          }}
        >
          {/* Text content */}
          <Grid size={{ xs: 12, sm: 12, md: 6 }}>
            <motion.div variants={fadeUp}>
              <Typography
                fontWeight={700}
                className="lime-txt"
                gutterBottom
                sx={{
                  display: { xs: "none", sm: "none", md: "block" },
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                  lineHeight: 1.2,
                }}
              >
                Wide Range of
                <br />
                Premium Cycles
              </Typography>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Typography gutterBottom variant="h5" fontWeight={500} className="gray-txt">
                Discover bicycles built for every lifestyle and every journey.
              </Typography>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Typography
                mt={2}
                gutterBottom
                variant="subtitle1"
                fontWeight={400}
                className="gray-txt manrope-txt-family"
              >
                Whether you’re commuting to work, riding for fun, or exploring rugged trails,
                123 Bicycle Hub offers a curated collection of cycles to meet your needs.
                With a focus on quality, comfort, and performance, we make sure every ride feels right.
              </Typography>
            </motion.div>
          </Grid>

          {/* Slider */}
          <Grid size={{ xs: 12, sm: 12, md: 4 }} sx={{ position: "relative", p: { xs: 3, sm: 2, md: 1 } }}>
            <motion.div variants={zoomIn}>
              <Typography
                fontWeight={700}
                className="lime-txt"
                gutterBottom
                sx={{
                  display: { xs: "block", sm: "block", md: "none" },
                  fontSize: { xs: "1.5rem", sm: "2.5rem", md: "3rem" },
                  lineHeight: 1.2,
                }}
              >
                Wide Range of
                <br />
                Premium Cycles
              </Typography>
            </motion.div>

            <motion.div variants={zoomIn}>
              <Slider {...sliderSettings}>
                <Box>
                  <img loading="lazy"  src="/images/wide-1.png" width="100%" alt="Cycle 1" />
                </Box>
                <Box>
                  <img loading="lazy"  src="/images/wide-2.png" width="100%" alt="Cycle 2" />
                </Box>
                <Box>
                  <img loading="lazy"  src="/images/wide-3.png" width="100%" alt="Cycle 3" />
                </Box>
              </Slider>
            </motion.div>
          </Grid>

          {/* Static right-side image */}
          <Grid size={{ xs: 0, sm: 0, md: 2 }} alignItems="flex-end" height={"100%"}>
            <motion.img
              src="/images/about-1.png"
              width={"100%"}
              alt="Cycle small"
              variants={zoomIn}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default WideRange;
