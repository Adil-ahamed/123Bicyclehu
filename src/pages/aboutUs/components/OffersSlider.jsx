import React from "react";
import Slider from "react-slick";
import { Box, Container, IconButton, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const offers = [
  { title: "Sales", img: "/images/about-2.png" },
  { title: "Repairs & Servicing", img: "/images/jus-shop-1.png" },
  { title: "Accessories", img: "/images/about-2.png" },
  { title: "Community Events & Rides", img: "/images/jus-shop-1.png" },
];

export default function WhatWeOffer() {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // ❌ disable default arrows
    swipe: false, // ✅ disable dragging/swiping
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

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

        {/* Slick Slider */}
        <Slider ref={sliderRef} {...settings}>
          {offers.map((offer, index) => (
            <Box key={index} px={2}>
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
          ))}
        </Slider>

        {/* Custom Navigation Buttons - below slider, centered */}
        <Box mt={3} display="flex" justifyContent="center" gap={2}>
          <IconButton
            className="slider-btn"
            aria-label="Previous"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <Icon icon="material-symbols:arrow-left-alt" style={{ color: "black" }} />
          </IconButton>
          <IconButton
            className="slider-btn"
            aria-label="Next"
            onClick={() => sliderRef.current.slickNext()}
          >
            <Icon icon="material-symbols:arrow-right-alt" style={{ color: "black" }} />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
