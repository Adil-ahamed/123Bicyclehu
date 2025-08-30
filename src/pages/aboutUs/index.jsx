import React, { useEffect } from "react";

import Header from "../../layout/Header";
import HeroAbout from "./components/HeroAbout";
import OurStory from "./components/OurStory";
import DriveUs from "./components/DriveUs";
import OffersSlider from "./components/OffersSlider";
import Testimonials from "../home/components/Testimonials";
import FAQ from "../home/components/FAQ";
import ReadyToRide from "./components/ReadyToRide";

function Index() {
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Header />
      <HeroAbout />
      <OurStory />
      <DriveUs />
      <OffersSlider />
      <Testimonials />
      <ReadyToRide />
      <FAQ />
    </>
  );
}

export default Index;
