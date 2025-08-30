import React, { useEffect } from "react";

import HeroService from "./components/HeroService";
import Header from "../../layout/Header";
import ServiceTwo from "./components/ServiceTwo";
import FAQ from "../home/components/FAQ";

function Index() {
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Header />
      <HeroService />
      <ServiceTwo />
      <FAQ />
    </>
  );
}

export default Index;
