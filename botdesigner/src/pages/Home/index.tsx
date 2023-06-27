import React from "react";
import {
  HomeContainer,
  TextContainer,
  Title,
  Subtitle,
  Button,
  ImageContainer,
} from "./styles";

export const Home: React.FC = () => {

  const showImage = true; 

  return (
    <HomeContainer>
      <TextContainer>
        <Title>Uma boa comunicação salva vidas</Title>
        <Subtitle>
          Oferecemos uma plataforma de atendimento omnichannel e chatbot para
          instituições de saúde de todo Brasil!
        </Subtitle>
        <Button>Solicitar Demonstração</Button>
      </TextContainer>
      <ImageContainer  showImage={showImage}/>
    </HomeContainer>
  );
};
