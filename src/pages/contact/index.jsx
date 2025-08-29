import React from "react";

import ContactHero from "./components/ContactHero";
import Header from "../../layout/Header";
import FAQ from "../home/components/FAQ";
import Address from "./components/Address";
import ContactFrom from "./components/ContactFrom";

function Index() {
  return (
    <>
      <Header />
      <ContactHero />
      <Address />
      <ContactFrom />
      <FAQ />
    </>
  );
}

export default Index;
