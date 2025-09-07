import React from "react";
import { useKeenSlider } from "keen-slider/react";
import { Box, Container, IconButton, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import "keen-slider/keen-slider.min.css";

const offers = [
  { title: "Sales", img: "/images/about-2.png" },
  { title: "Repairs & Servicing", img: "/images/jus-shop-1.png" },
  { title: "Accessories", img: "/images/about-2.png" },
  { title: "Community Events & Rides", img: "/images/jus-shop-1.png" },
];

export default function WhatWeOffer() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 3,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 1200px)": {
        slides: { perView: 3, spacing: 16 },
      },
      "(max-width: 992px)": {
        slides: { perView: 2, spacing: 12 },
      },
      "(max-width: 600px)": {
        slides: { perView: 1, spacing: 8 },
      },
    },
  });

  return (
    <Box py={{ xs: 4, sm: 6, md: 8 }} className="gray-bg">
      <Container maxWidth="lg">
        {/* Heading */}
        <Box mb={{ xs: 3, sm: 4, md: 8 }}>
          <Typography
            sx={{ fontSize: { xs: "1.5rem", sm: "2.5rem", md: "3rem" } }}
            variant="h2"
            gutterBottom
            className="light-gray-txt"
            fontWeight={600}
          >
            What We Offer
          </Typography>
        </Box>

        {/* Keen Slider */}
        <div ref={sliderRef} className="keen-slider">
          {offers.map((offer, index) => (
            <div key={index} className="keen-slider__slide">
              <Box px={2}>
                <div className="offer-card">
                  <img
                    loading="lazy"
                    src={offer.img}
                    alt={offer.title}
                    className="offer-image"
                  />
                  <div className="offer-overlay">
                    <h3 className="offer-text">{offer.title}</h3>
                  </div>
                </div>
              </Box>
            </div>
          ))}
        </div>

        {/* Custom Navigation */}
        <Box mt={3} display="flex" justifyContent="center" gap={2}>
          <IconButton
            className="slider-btn"
            aria-label="Previous"
            onClick={() => instanceRef.current?.prev()}
          >
            <Icon icon="material-symbols:arrow-left-alt" style={{ color: "black" }} />
          </IconButton>
          <IconButton
            className="slider-btn"
            aria-label="Next"
            onClick={() => instanceRef.current?.next()}
          >
            <Icon icon="material-symbols:arrow-right-alt" style={{ color: "black" }} />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
