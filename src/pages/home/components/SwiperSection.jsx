import React from "react";
import { Box } from "@mui/material";

const swiperItems = [
  { label: "Hero", img: "/images/brands/Hero.png" },
  { label: "Hercules", img: "/images/brands/Hercules roaded.png" },
  { label: "BSA", img: "/images/brands/BSA.png" },
  { label: "Cospro", img: "/images/brands/Cosmic.png" },
  { label: "91", img: "/images/brands/91.png" },
  { label: "Lady Bird", img: "/images/brands/Lady bird.png" },
  { label: "Mach City", img: "/images/brands/Mach city.png" },
];

function SwiperSection() {
  return (
    <Box my={5}>
      <Box className="gray-bg">
        <div
          className="swiper-container"
          style={{
            display: "flex",
            overflow: "hidden",
            gap: "24px",
          }}
        >
          <div className="swiper-wrapper" style={{ display: "flex" }}>
            {/* Original Items */}
            {swiperItems.map((item, index) => (
              <div
                key={index}
                className="swiper-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "120px",
                }}
              >
                <Box
                  component="img"
                  loading="lazy"
                  src={item.img}
                  alt={item.label}
                  sx={{
                    width: { xs: "90px", sm: "110px", md: "150px" }, // responsive width
                    height: { xs: "50px", sm: "65px", md: "80px" }, // responsive height
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}

            {/* Duplicate Items for Loop */}
            {swiperItems.map((item, index) => (
              <div
                key={`duplicate-${index}`}
                className="swiper-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "120px",
                }}
              >
                <Box
                  component="img"
                  loading="lazy"
                  src={item.img}
                  alt={item.label}
                  sx={{
                    width: { xs: "90px", sm: "110px", md: "150px" },
                    height: { xs: "50px", sm: "65px", md: "80px" },
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </Box>
    </Box>
  );
}

export default SwiperSection;
