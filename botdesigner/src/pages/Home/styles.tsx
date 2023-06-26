/* eslint-disable @typescript-eslint/no-var-requires */
import styled from "styled-components";

const illustration = require("../../assets/illustration.png");

export const HomeContainer = styled.div`
  padding: 0 80px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const TextContainer = styled.div`
  flex: 1;

  @media (min-width: 768px) {
    margin-left: 20px;
  }
`;

export const Title = styled.h1`
  color: #323d73;
  font-size: 46px;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 20px;
  max-width: 100%;

  @media (min-width: 768px) {
    width: 500px;
    font-size: 44px;
  }
`;

export const Subtitle = styled.h2`
  font-size: 22px;
  font-weight: 300;
  color: #323d73;
  margin-top: 20px;
  width: 100%;

  @media (min-width: 768px) {
    width: 440px;
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 17px 50px;
  color: #ffffff;
  background-color: #3680ae;
  border: none;
  border-radius: 30px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background-color: #4198ce;
  }
`;

export const ImageContainer = styled.div<{ showImage: boolean }>`
  flex: 1;
  margin-left: 80px;
  margin-top: 1rem;
  height: 550px;
  background-image: url(${illustration});
  background-repeat: no-repeat;
  display: ${({ showImage }) => (showImage ? "block" : "none")};


  @media (max-width: 767px) {
    display: none;
  }
`;
