import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Container,
  IconButton,
  Drawer,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Icon } from "@iconify/react";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about-us" },
    { label: "Services", path: "/services" },
  ];

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const scrolled =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box sx={{ position: "relative" }}>
      {/* Scroll Progress Bar */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "3px",
          width: `${scrollProgress}%`,
          bgcolor: "#C6FF00",
          zIndex: 2000,
          transition: "width 0.1s linear",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          py: isScrolled ? 0.5 : 1.5,
          transition: "all 0.3s ease",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1500,
          backdropFilter: "blur(10px)",
        }}
      >
        <header>
          <Box
            // className="navbar"
            sx={{
              py: { xs: 1 },
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Logo */}
            <div className="logo-container">
              {/* <img loading="lazy" 
                src="/images/logo.png"
                alt="123 Logo"
                width={
                  isScrolled ? (isDesktop ? 200 : 120) : isDesktop ? 250 : 150
                }
                style={{ height: "auto", transition: "all 0.3s ease" }}
              /> */}
              <Typography
                className="logo-txt"
                fontSize={{ xs: 14, sm: 16, md: 18, color: "#fff" }}
                variant="h4"
              >
                <span
                  className="logo-txt lime-txt"
                  style={{ fontSize: "1.5rem" }}
                >
                  123
                </span>
                BICYCLEHUB
              </Typography>
            </div>

            {/* Desktop Menu */}
            <ul
              className="nav-links"
              style={{ display: "flex", alignItems: "center", gap: "2rem" }}
            >
              {isDesktop &&
                menuItems.map((item) => (
                  <li key={item.path}>
                    <a
                      onClick={() => navigate(item.path)}
                      className={
                        location.pathname === item.path ? "active" : ""
                      }
                      style={{
                        color:
                          location.pathname === item.path ? "#C6FF00" : "#fff",
                        cursor: "pointer",
                        fontWeight:
                          location.pathname === item.path ? "bold" : "normal",
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}

              {/* Mobile toggle */}
              {!open ? 
                <li>
                  <IconButton
                    sx={{ display: { sm: "block", md: "none" } }}
                    onClick={() => setOpen(true)}
                  >
                    <Icon
                      icon="line-md:close-to-menu-alt-transition"
                      style={{ fontSize: 38, color: "#fff" }}
                    />
                  </IconButton>
                </li>:
                 <li>
                  <IconButton
                    sx={{ display: { sm: "block", md: "none" } }}
                    onClick={() => setOpen(false)}
                  >
                    <Icon
                      icon="line-md:menu-to-close-alt-transition"
                      style={{ fontSize: 38, color: "#fff" }}
                    />
                  </IconButton>
                </li>
              }
              {isDesktop && (
                <li>
                  <button
                    className="btn-contact"
                    onClick={() => navigate("/contact")}
                  >
                    Contact Us
                  </button>
                </li>
              )}
            </ul>
          </Box>

          {/* Drawer for mobile */}
          <Drawer
            anchor="right"
            open={open}
            onClose={() => setOpen(false)}
            PaperProps={{
              sx: {
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                backdropFilter: "blur(5px)",
                width: "100%",
                color: "#C6FF00",
              },
            }}
          >
            <Box p={3} display="flex" flexDirection="column" height="100%">
              {/* Close Icon */}
              <Box display="flex" justifyContent="flex-end">
                <IconButton
                  onClick={() => setOpen(false)}
                  sx={{ color: "white" }}
                >
                  <Icon
                    icon="line-md:close"
                    style={{ fontSize: 30, color: "#fff" }}
                  />
                </IconButton>
              </Box>

              {/* Menu Items in Drawer */}
              <Box flexGrow={1} mt={6}>
                {menuItems.map((item, index) => (
                  <Box
                    key={item.path}
                    mb={4}
                    onClick={() => {
                      navigate(item.path);
                      setOpen(false);
                    }}
                    sx={{
                      cursor: "pointer",
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 2,
                      color:
                        location.pathname === item.path ? "#fff" : "#C6FF00",
                    }}
                  >
                    <Typography variant="h4">
                      {String(index + 1).padStart(2, "0")}
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{ fontWeight: "bold", letterSpacing: 1 }}
                    >
                      {item.label}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Contact Button */}
              <Box textAlign="center" pb={2}>
                <button
                  className="btn-contact"
                  style={{ fontSize: "1rem" }}
                  onClick={() => {
                    navigate("/contact");
                    setOpen(false);
                  }}
                >
                  Contact Us
                </button>
              </Box>
            </Box>
          </Drawer>
        </header>
      </Container>

      {/* Spacer to prevent content being hidden behind fixed header */}
      <Box sx={{ height: isScrolled ? 70 : 70 }} />
    </Box>
  );
}
