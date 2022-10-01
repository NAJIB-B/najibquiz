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
  @media (max-width: 900px) {
    width: 30rem;
    height: 20rem;
  }
  @media (max-width: 560px) {
    width: 25rem;
    height: 17rem;
  }
  @media (max-width: 450px) {
    width: 20rem;
    height: 15rem;
  }
  @media (max-width: 335px) {
    width: 17rem;
    height: 13rem;
  }
  @media (max-width: 300px) {
    width: 15rem;
    height: 11rem;
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
  @media (max-width: 900px) {
    font-size: 1.5rem;
  }
  @media (max-width: 550px) {
    font-size: 1.2rem;
  }
  @media (max-width: 450px) {
    font-size: 1rem;
  }
`;
export const QuizLink = styled.span`
  color: black;
  font-size: 1.5rem;
  background-color: white;
  padding: 1rem;
  border-radius: 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 80%;
  @media (max-width: 900px) {
    font-size: 1.2rem;
  }
  @media (max-width: 560px) {
    font-size: 1rem;
  }
  @media (max-width: 450px) {
    font-size: 0.8rem;
    padding: 0.5rem;
  }
  @media (max-width: 300px) {
    font-size: 0.6rem;
    padding: 0.3rem;
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
  @media (max-width: 900px) {
    font-size: 1.2rem;
    right: 1rem;
  }
  @media (max-width: 560px) {
    font-size: 1rem;
    padding: 0.7rem;
  }
  @media (max-width: 450px) {
    font-size: 0.8rem;
    padding: 0.5rem;
  }
  @media (max-width: 300px) {
    font-size: 0.6rem;
    padding: 0.2rem;
    right: 0.5rem;
    top: 0.5rem;
  }
`;
