import React from "react";

import Animaciones from "../helpers/Animaciones";
import Hero from "../hero/Hero";
import TwoTrendingPreviewCardsWithImage from "../cards/TwoTrendingPreviewCardsWithImage";
import FAQ from "../FAQ/SimpleWithSideImage";
import contain from "../../img/contain.jpg";
import ContactUsForm from "../forms/TwoColContactUsWithIllustration.js";
import Footer from "../footer/MiniCenteredFooter.js";

export default () => (
  <Animaciones>
    <Hero />
    <TwoTrendingPreviewCardsWithImage />
    <FAQ
      imageSrc={contain}
      imageContain={true}
      imageShadow={false}
      subheading="Soluciones de logística y cadena de suministro"
      heading={
        <>
          Podemos ayudarlo a resolver{" "}
          <span tw="text-blue-600">sus mayores desafíos</span>
        </>
      }
    />
    {/* <Features /> */}
    {/* <SliderCard />
      <TrendingCard />
      <MainFeature />
      <Blog />
      <Testimonial textOnLeft={true} />
      <FAQ />
      */}
    <ContactUsForm />
    <Footer />
  </Animaciones>
);
