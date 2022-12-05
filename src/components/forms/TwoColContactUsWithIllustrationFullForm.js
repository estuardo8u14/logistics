import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "../misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons.js";
import EmailIllustrationSrc from "../../img/email-illustration.svg";
import axios from "axios";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`;
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`;
const Textarea = styled(Input).attrs({ as: "textarea" })`
  ${tw`h-24`}
`;

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`;

export default ({
  subheading = "Contactanos",
  heading = (
    <>
      Siéntase libre de <span tw="text-blue-500">ponerse en contacto</span>
      <wbr /> con nosotros.
    </>
  ),
  description = "Ya sea que gestione cadenas de suministro locales, regionales o internacionales, nuestro conocimiento y experiencia en Norteamérica puede ayudarlo a reducir gastos y mejorar la eficiencia para tener una ventaja con respecto a aquellos que no pueden lograrlo.",
  submitButtonText = "Enviar",
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  const [correo, setCorreo] = useState(0);
  const [nombre, setNombre] = useState(0);
  const [asunto, setAsunto] = useState(0);
  const [mensaje, setMensaje] = useState(0);

  const myData = {
    correo: correo,
    nombre: nombre,
    asunto: asunto,
    mensaje: mensaje,
  };

  const prueba = () => {
    console.log("correo:", correo);
    console.log("nombre:", nombre);
    console.log("asunto:", asunto);
    console.log("mensaje:", mensaje);
    window.open("/", "_blank", "noopener,noreferrer");
  };

  async function submitForm(e) {
    e.preventDefault();
    await axios
      .post("https://teuamericas.herokuapp.com/post_contacto", {
        correo: correo,
        nombre: nombre,
        asunto: asunto,
        mensaje: mensaje,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <Form onSubmit={submitForm}>
              <Input
                onChange={(e) => setCorreo(e.target.value)}
                type="text"
                name="email"
                placeholder="Correo"
              />
              <Input
                onChange={(e) => setNombre(e.target.value)}
                type="text"
                name="nombre"
                placeholder="Nombre completo"
              />
              <Input
                onChange={(e) => setAsunto(e.target.value)}
                type="text"
                name="asunto"
                placeholder="Asunto"
              />
              <Textarea
                onChange={(e) => setMensaje(e.target.value)}
                name="mensaje"
                placeholder="Mensaje"
              />
              <SubmitButton onClick={prueba} type="submit">
                {submitButtonText}
              </SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
