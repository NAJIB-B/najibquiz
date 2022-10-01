import styled from "styled-components";

export const ModalContainerDiv = styled.div`
  font-family: "Exo", sans-serif;
  position: absolute;
  text-align: center;
  width: 40rem;
  height: 25rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 1px 2px 10px;
  background-color: rgb(152, 68, 183);
  display: grid;
  place-items: center;
  z-index: 12;
  border-radius: 25px;
  @media (max-width: 360px) {
    width: 15rem;
    height: 15rem;
  }
  @media (max-width: 270px) {
    width: 12rem;
    height: 12rem;
  }
  @media (max-width: 220px) {
    width: 10rem;
    height: 10rem;
  }
`;
export const Overlay = styled.div`
  position: absolute;
  z-index: 11;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(51, 204, 54, 0.7);
  backdrop-filter: blur(10px);
  display: inline-block;
`;

export const Message = styled.span`
  color: white;
  font-size: 2rem;
  @media (max-width: 360px) {
    font-size: 1.5rem;
  }
  @media (max-width: 270px) {
    font-size: 1.3rem;
  }
  @media (max-width: 220px) {
    font-size: 1rem;
  }
`;
export const QuizLink = styled.span`
  color: black;
  font-size: 1.5rem;
  background-color: white;
  padding: 1rem;
  border-radius: 18px;

  @media (max-width: 270px) {
    font-size: 1.3rem;
  }
  @media (max-width: 220px) {
    font-size: 1rem;
  }
`;
export const CloseBtn = styled.span`
  position: absolute;
  font-size: 2rem;
  font-weight: 700;
  right: 1.5rem;
  top: 1rem;
  color: white;
  padding: 1rem;
  background-color: #33cc36;
  border-radius: 45%;
  cursor: pointer;
  @media (max-width: 370px) {
    font-size: 1.5rem;
  }
  @media (max-width: 270px) {
    font-size: 1.3rem;
  }
  @media (max-width: 220px) {
    font-size: 1rem;
  }
`;
