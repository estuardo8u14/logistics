import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading } from "components/misc/Headings.js";
import { PrimaryLink as PrimaryLinkBase } from "../misc/Links.js";
import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons.js";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as TimeIcon } from "feather-icons/dist/icons/clock.svg";
import { ReactComponent as ArrowRightIcon } from "../../img/arrow-right-icon.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const ThreeColumn = tw.div`flex flex-wrap`;
const Column = tw.div`xl:mr-12 xl:last:mr-0`;
const HeadingColumn = styled(Column)((props) => [
  tw`w-full xl:w-5/12`,
  props.textOnLeft ? tw`xl:order-first` : tw`xl:order-last xl:ml-12 xl:mr-0`,
]);
const CardColumn = tw(
  Column
)`w-full md:w-1/2 xl:w-3/12 mt-16 xl:mt-0 xl:last:ml-auto`;

const HeadingInfoContainer = tw.div`text-center xl:text-left max-w-lg xl:max-w-none mx-auto xl:mx-0`;
const HeadingTitle = tw(SectionHeading)`mt-4 xl:text-left leading-tight`;
const HeadingDescription = tw.p`text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-8`;
const PrimaryLink = styled(PrimaryLinkBase)`
  ${tw`inline-flex justify-center xl:justify-start items-center mt-8 text-lg`}
  svg {
    ${tw`ml-2 w-5 h-5`}
  }
`;

const Card = tw.div`mx-auto xl:mx-0 xl:ml-auto max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xs`;
const CardImage = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-80 bg-cover bg-center rounded`,
]);

const CardText = tw.div`mt-4`;

const CardHeader = tw.div`flex justify-between items-center`;
const CardCompany = tw.div`text-primary-700 font-bold text-lg`;
const CardType = tw.div`font-semibold text-sm text-gray-600`;

const CardTitle = tw.h5`text-xl mt-4 font-bold`;

const CardMeta = styled.div`
  ${tw`flex flex-row flex-wrap justify-center sm:items-center font-semibold tracking-wide text-gray-600 uppercase text-xs`}
`;

const CardMetaFeature = styled.div`
  ${tw`flex items-center mt-4 mr-4 last:mr-0`}
  svg {
    ${tw`w-5 h-5 mr-1`}
  }
`;
const CardAction = tw(PrimaryButtonBase)`w-full mt-6`;

export default ({
  subheading = " Obtener cotización ",
  headingHtmlComponent = (
    <>
      Encuentre un presupuesto de envío de carga{" "}
      <span tw="text-blue-700">adecuado para usted.</span>
    </>
  ),
  description = "Nuestro alcance global, profundo conocimiento de la industria, tecnología innovadora y extensa red de transporte nos han permitido llevar el aprendizaje más reciente para enfrentar los desafíos y metas únicas de nuestros clientes. Aprovechamos nuestra escala para crear soluciones innovadoras y personalizadas que ayuden a nuestros clientes a optimizar sus cadenas de suministro para mantenerse por delante de su competencia en un mercado que cambia todos los días. ",
  linkText = "Ver Cotizaciones",
  cardLinkText = "Obtener cotización",
  textOnLeft = false,
}) => {
  const cards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1563461660947-507ef49e9c47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
      company: "TEU AMERICAS",
      type: "En línea",
      title: "Cotización Instantánea",
      durationText: "4 hrs",
      locationText: "Centroamérica",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1573165231977-3f0e27806045?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
      company: "TEU AMERICA",
      type: "Agente",
      title: "Cotización de un experto",
      durationText: "16 hrs",
      locationText: "Centroamérica",
    },
  ];
  return (
    <Container>
      <Content>
        <ThreeColumn>
          <HeadingColumn textOnLeft={textOnLeft}>
            <HeadingInfoContainer>
              <Subheading>{subheading}</Subheading>
              <HeadingTitle>{headingHtmlComponent}</HeadingTitle>
              <HeadingDescription>{description}</HeadingDescription>
              <PrimaryLink>
                <a href="/cotiza">{linkText}</a>
                <ArrowRightIcon />
              </PrimaryLink>
            </HeadingInfoContainer>
          </HeadingColumn>
          {cards.map((card, index) => (
            <CardColumn key={index}>
              <Card>
                <CardImage imageSrc={card.imageSrc} />
                <CardText>
                  <CardHeader>
                    <CardCompany>{card.company}</CardCompany>
                    <CardType>{card.type}</CardType>
                  </CardHeader>
                  <CardTitle>{card.title}</CardTitle>
                  <CardMeta>
                    <CardMetaFeature>
                      <TimeIcon /> {card.durationText}
                    </CardMetaFeature>
                    <CardMetaFeature>
                      <LocationIcon /> {card.locationText}
                    </CardMetaFeature>
                  </CardMeta>
                  <CardAction>
                    <a href="/cotiza">{cardLinkText}</a>
                  </CardAction>
                </CardText>
              </Card>
            </CardColumn>
          ))}
        </ThreeColumn>
      </Content>
    </Container>
  );
};

/* import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "../misc/Headings";
import { PrimaryLink as PrimaryLinkBase } from "../misc/Links.js";
import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons.js";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as TimeIcon } from "feather-icons/dist/icons/clock.svg";
import { ReactComponent as TrendingIcon } from "feather-icons/dist/icons/trending-up.svg";
import { ReactComponent as ArrowRightIcon } from "../../img/arrow-right-icon.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const ThreeColumn = tw.div`flex flex-wrap`;
const Column = tw.div``;
const HeadingColumn = tw(Column)`w-full xl:w-1/3`;
const CardColumn = tw(Column)`w-full md:w-1/2 xl:w-1/3 mt-16 xl:mt-0`;

const HeadingInfoContainer = tw.div`text-center xl:text-left max-w-lg xl:max-w-none mx-auto xl:mx-0`;
const HeadingTitle = tw(SectionHeading)`xl:text-left leading-tight`;
const HeadingDescription = tw.p`text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-8`;
const PrimaryLink = styled(PrimaryLinkBase)`
  ${tw`inline-flex justify-center xl:justify-start items-center mt-8 text-lg`}
  svg {
    ${tw`ml-2 w-5 h-5`}
  }
`;

const Card = tw.div`mx-auto xl:mx-0 xl:ml-auto max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xs`;
const CardImage = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-80 bg-cover bg-center rounded`,
]);

const CardText = tw.div`mt-4`;

const CardHeader = tw.div`flex justify-between items-center`;
const CardType = tw.div`text-primary-500 font-bold text-lg`;
const CardPrice = tw.div`font-semibold text-sm text-gray-600`;
const CardPriceAmount = tw.span`font-bold text-gray-800 text-lg`;

const CardTitle = tw.h5`text-xl mt-4 font-bold`;

const CardMeta = styled.div`
  ${tw`flex flex-row flex-wrap justify-between sm:items-center font-semibold tracking-wide text-gray-600 uppercase text-xs`}
`;

const CardMetaFeature = styled.div`
  ${tw`flex items-center mt-4`}
  svg {
    ${tw`w-5 h-5 mr-1`}
  }
`;
const CardAction = tw(PrimaryButtonBase)`w-full mt-8`;

export default () => {
  const cards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1553194587-b010d08c6c56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
      type: "Beachfront",
      pricePerDay: "$99",
      title: "A Trip to the Bahamas and the Carribean Ocean",
      trendingText: "Trending",
      durationText: "7 Days Tour",
      locationText: "Africa",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1584200186925-87fa8f93be9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
      type: "Cruise",
      pricePerDay: "$169",
      title: "Cruise to the Mariana Trench and the Phillipines",
      trendingText: "Trending",
      durationText: "15 Days Tour",
      locationText: "Australia",
    },
  ];
  return (
    <Container>
      <Content>
        <ThreeColumn>
          <HeadingColumn>
            <HeadingInfoContainer>
              <HeadingTitle>Trending Tours</HeadingTitle>
              <HeadingDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua enim
                ad minim veniam.
              </HeadingDescription>
              <PrimaryLink>
                View All Tours <ArrowRightIcon />
              </PrimaryLink>
            </HeadingInfoContainer>
          </HeadingColumn>
          {cards.map((card, index) => (
            <CardColumn key={index}>
              <Card>
                <CardImage imageSrc={card.imageSrc} />
                <CardText>
                  <CardHeader>
                    <CardType>{card.type}</CardType>
                    <CardPrice>
                      <CardPriceAmount>{card.pricePerDay}</CardPriceAmount> per
                      day
                    </CardPrice>
                  </CardHeader>
                  <CardTitle>{card.title}</CardTitle>
                  <CardMeta>
                    <CardMetaFeature>
                      <TrendingIcon /> {card.trendingText}
                    </CardMetaFeature>
                    <CardMetaFeature>
                      <TimeIcon /> {card.durationText}
                    </CardMetaFeature>
                    <CardMetaFeature>
                      <LocationIcon /> {card.locationText}
                    </CardMetaFeature>
                  </CardMeta>
                  <CardAction>Book Now</CardAction>
                </CardText>
              </Card>
            </CardColumn>
          ))}
        </ThreeColumn>
      </Content>
    </Container>
  );
}; */
