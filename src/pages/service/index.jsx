import React from "react";

import HeroService from "./components/HeroService";
import Header from "../../layout/Header";
import ServiceTwo from "./components/ServiceTwo";
import FAQ from "../home/components/FAQ";

function Index() {
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
