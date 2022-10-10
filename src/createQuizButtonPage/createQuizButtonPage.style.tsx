import styled from "styled-components";

export const BringQuizToLife = styled.h1`
  color: #2e266f;
  font-size: 2.5rem;

  @media (max-width: 800px) {
    font-size: 2rem;
  }
  @media (max-width: 600px) {
    font-size: 1.7rem;
  }
  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
  @media (max-width: 350px) {
    font-size: 1.2rem;
  }
  @media (max-width: 300px) {
    font-size: 1rem;
  }
`;
export const BringQuizToLifePageDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #2e266f;

  border-radius: 20px;
  padding: 2rem;
  z-index: 10;
  display: inline-block;
  @media (max-width: 960px) {
    width: 60%;
  }
  @media (max-width: 820px) {
    width: 75%;
  }
  @media (max-width: 290px) {
    width: 55%;
  }
`;
