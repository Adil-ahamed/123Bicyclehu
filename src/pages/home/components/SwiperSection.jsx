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
            gap: "24px", // space between items
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
                  minWidth: "200px", // controls item width
                }}
              >
                {/* ⭐ Star */}

                {/* Brand Logo */}
                <img loading="lazy" 
                  src={item.img}
                  alt={item.label}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                    marginRight: "8px",
                  }}
                />

                {/* Label */}
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
                  minWidth: "200px",
                }}
              >
                {/* <img loading="lazy" 
                  src="/images/swiper-star.png"
                  alt="star"
                  style={{
                    width: "28px",
                    height: '"28px"',
                    marginRight: "8px",
                  }}
                /> */}
                <img loading="lazy" 
                  src={item.img}
                  alt={item.label}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                    marginRight: "8px",
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
