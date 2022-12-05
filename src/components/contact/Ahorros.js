import React from "react";
import Animaciones from "../helpers/Animaciones";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "../header/light.js";
import Footer from "../footer/FiveColumnWithInputForm.js";
import ContactUsForm from "../forms/TwoColContactUsWithIllustrationFullForm.js";
import ContactDetails from "../cards/ThreeColContactDetails.js";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {
  return (
    <Animaciones>
      <Header />
      <ContactUsForm />
      <ContactDetails
        cards={[
          {
            title: "Guatemala",
            description: (
              <>
                <Address>
                  <AddressLine>Blvd Acatat</AddressLine>
                  <AddressLine>Villas, VS 01016</AddressLine>
                </Address>
                <Email>contact@REUAMERICAS.com</Email>
                <Phone>+(502) 5912-6988</Phone>
              </>
            ),
          },
          {
            title: "Panamá",
            description: (
              <>
                <Address>
                  <AddressLine>602 Annadale Drive</AddressLine>
                  <AddressLine>Dekalb, IL 60115</AddressLine>
                </Address>
                <Email>contact@REUAMERICAS.com</Email>
                <Phone>+1 (203) 991-6988</Phone>
              </>
            ),
          },
          {
            title: "USA",
            description: (
              <>
                <Address>
                  <AddressLine>96 NE. Delaware Lane</AddressLine>
                  <AddressLine>Sacramento, CA 95820</AddressLine>
                </Address>
                <Email>contact@REUAMERICAS.com</Email>
                <Phone>+1 (203) 991-6988</Phone>
              </>
            ),
          },
        ]}
      />
      <Footer />
    </Animaciones>
  );
};
