import React from "react";
import Hero from "./components/Hero";
import About from "./components/about";
import WideRange from "./components/WideRange";
import SwiperSection from "./components/SwiperSection";
import MoreThanCycle from "./components/MoreThanCycle";
import FeatureCards from "./components/FeatureCards";
import Testimonials from "./components/Testimonials";
import BookingSection from "./components/BookingSection";
import FAQ from "./components/FAQ";
import Header from "../../layout/Header";

function Index() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <WideRange />
      <SwiperSection />
      <MoreThanCycle />
      <FeatureCards />
      <Testimonials />
      <BookingSection />
      <FAQ />
    </>
  );
}

export default Index;
