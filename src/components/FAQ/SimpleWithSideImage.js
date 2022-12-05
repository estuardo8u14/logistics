import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { ReactComponent as PlusIcon } from "feather-icons/dist/icons/plus.svg";
import { ReactComponent as MinusIcon } from "feather-icons/dist/icons/minus.svg";
import CostoyPre from "../forms/CostoyPre";
import ServyCon from "../forms/ServyCon";
import AgiCadena from "../forms/AgiCadena";
import SegyVis from "../forms/SegyVis";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const TwoColumn = tw.div`flex`;
const Column = tw.div``;

const Image = styled.div((props) => [
  `background-image: url("https://c0.wallpaperflare.com/preview/631/640/43/boat-sea-ocean-tanker.jpg");`,
  props.imageContain ? tw`bg-contain bg-no-repeat` : tw`bg-cover`,
  props.imageShadow ? tw`shadow` : tw`shadow-none`,
  tw`hidden lg:block rounded h-144 bg-center`,
]);

const FAQContent = tw.div`lg:ml-12`;
const Subheading = tw(SubheadingBase)`mb-4 text-center lg:text-left`;
const Heading = tw(SectionHeading)`lg:text-left`;
const Description = tw.p`max-w-xl text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4 text-secondary-100`;

const FAQSContainer = tw.dl`mt-12`;
const FAQ = tw.div`cursor-pointer mt-8 select-none border lg:border-0 px-8 py-4 lg:p-0 rounded-lg lg:rounded-none`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = styled.span`
  ${tw`ml-2 bg-primary-500 text-gray-100 p-1 rounded-full group-hover:bg-primary-700 group-hover:text-gray-200 transition duration-300`}
  svg {
    ${tw`w-4 h-4`}
  }
`;
const Answer = motion(
  tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`
);

export default ({
  subheading = "",
  heading = "Questions",
  description = "Nuestro alcance global, profundo conocimiento de la industria, tecnología innovadora y extensa red de transporte nos han permitido llevar el aprendizaje más reciente para enfrentar los desafíos y metas únicas de nuestros clientes. Aprovechamos nuestra escala para crear soluciones innovadoras y personalizadas que ayuden a nuestros clientes a optimizar sus cadenas de suministro para mantenerse por delante de su competencia en un mercado que cambia todos los días. ",
  imageSrc = "",
  imageContain = false,
  imageShadow = true,
  faqs = null,
}) => {
  /*
   * You can modify FAQs either by modifying the below defaultFaqs array or by passing a custom array of FAQs using
   * the faqs prop
   */
  const defaultFaqs = [
    {
      question: "Costo y presupuesto",
      answer: <CostoyPre />,
    },
    {
      question: "Servicio y confiabilidad",
      answer: <ServyCon />,
    },
    {
      question: "Agilidad de la cadena de suministro",
      answer: <AgiCadena />,
    },
    {
      question: "Seguimiento y visibilidad",
      answer: <SegyVis />,
    },
  ];

  if (!faqs || faqs.length === 0) faqs = defaultFaqs;

  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = (questionIndex) => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <Container>
      <Content>
        <TwoColumn>
          <Column tw="hidden lg:block w-5/12 flex-shrink-0">
            <Image
              imageContain={imageContain}
              imageShadow={imageShadow}
              imageSrc={imageSrc}
            />
          </Column>
          <Column>
            <FAQContent>
              {subheading ? <Subheading>{subheading}</Subheading> : null}
              <Heading>{heading}</Heading>
              <Description>{description}</Description>
              <FAQSContainer>
                {faqs.map((faq, index) => (
                  <FAQ
                    key={index}
                    onClick={() => {
                      toggleQuestion(index);
                    }}
                    className="group"
                  >
                    <Question>
                      <QuestionText>{faq.question}</QuestionText>
                      <QuestionToggleIcon>
                        {activeQuestionIndex === index ? (
                          <MinusIcon />
                        ) : (
                          <PlusIcon />
                        )}
                      </QuestionToggleIcon>
                    </Question>
                    <Answer
                      variants={{
                        open: { opacity: 1, height: "auto", marginTop: "16px" },
                        collapsed: { opacity: 0, height: 0, marginTop: "0px" },
                      }}
                      initial="collapsed"
                      animate={
                        activeQuestionIndex === index ? "open" : "collapsed"
                      }
                      transition={{
                        duration: 0.3,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                    >
                      {faq.answer}
                    </Answer>
                  </FAQ>
                ))}
              </FAQSContainer>
            </FAQContent>
          </Column>
        </TwoColumn>
      </Content>
    </Container>
  );
};
