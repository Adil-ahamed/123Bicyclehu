import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Icon } from "@iconify/react";
import { Box, Container, IconButton, Typography } from "@mui/material";

const offers = [
  { title: "Sales", img: "/images/about-2.png" },
  { title: "Repairs & Servicing", img: "/images/jus-shop-1.png" },
  { title: "Accessories", img: "/images/about-2.png" },
  { title: "Community Events & Rides", img: "/images/jus-shop-1.png" },
];

export default function WhatWeOffer() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Box py={{ xs: 2, sm: 3, md: 5 }} className="gray-bg">
      <Container maxWidth="lg">
        <Box mb={{ xs: 3, sm: 4, md: 8 }}>
          <Typography
            sx={{
              fontSize: { xs: "1.5rem", sm: "2.5rem", md: "3rem" },
            }}
            variant="h2"
            gutterBottom
            className="light-gray-txt"
            fontWeight={600}
          >
            What We Offer
          </Typography>
        </Box>

        <Swiper
          modules={[Navigation]}
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={20}
          loop={true} // ✅ Infinite loop
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // ✅ Assign refs before Swiper initializes
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {offers.map((offer, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={`offer-card ${isActive ? "active" : "inactive"}`}
                >
                  <img loading="lazy" 
                    src={offer.img}
                    alt={offer.title}
                    className="offer-image"
                  />
                  <div className="offer-overlay">
                    <h3 className="offer-text">{offer.title}</h3>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✅ Buttons work now */}
        <div className="offer-nav">
          <IconButton ref={prevRef} className="slider-btn" aria-label="Previous">
            <Icon
              icon="material-symbols:arrow-left-alt"
              style={{ color: "black" }}
            />
          </IconButton>
          <IconButton ref={nextRef} className="slider-btn" aria-label="Next">
            <Icon
              icon="material-symbols:arrow-right-alt"
              style={{ color: "black" }}
            />
          </IconButton>
        </div>
      </Container>
    </Box>
  );
}
