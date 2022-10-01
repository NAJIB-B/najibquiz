import styled from "styled-components";

export const Main = styled.div`
  border: 1px solid rgb(0, 153, 51);
  width: 70%;
  height: auto;
  position: absolute;
  left: 50%;
  top: 35%;
  transform: translate(-50%, -50%);
  margin: 2px;
  @media (max-width: 400px) {
    width: 80%;
  }
  @media (max-width: 250px) {
    width: 90%;
  }
`;
export const Body = styled.div`
  margin: 2rem;
  position: relative;
`;

export const QuizQuestionContainerH1 = styled.h1`
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

export const Prev = styled.button`
  height: 2rem;
  width: 5rem;
  border: none;
  background-color: rgb(0, 153, 51);
  color: white;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 1.2rem;
  border-radius: 10px 0 0 10px;
  border: 1px solid black;
  margin-right: 2rem;
  @media (max-width: 1010px) {
    width: 4.5rem;
    font-size: 1.1rem;
  }
  @media (max-width: 800px) {
    width: 4rem;
    font-size: 0.9rem;
  }
  @media (max-width: 400px) {
    width: 3.5rem;
    font-size: 0.7rem;
  }
`;

export const Next = styled.button`
  height: 2rem;
  width: 5rem;
  border: none;
  background-color: rgb(0, 153, 51);
  color: white;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 1.2rem;
  border-radius: 0 10px 10px 0;
  border: 1px solid black;
  margin-left: 2rem;
  @media (max-width: 1010px) {
    width: 4.5rem;
    font-size: 1.1rem;
  }
  @media (max-width: 800px) {
    width: 4rem;
    font-size: 0.9rem;
  }
  @media (max-width: 400px) {
    width: 3.5rem;
    font-size: 0.7rem;
  }
`;

export const BtnDiv = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 3rem;
`;
export const Radiocontainer = styled.div`
  background-color: #e7e9eb;
  display: block;
  height: 1.5rem;
  margin-bottom: 0.2rem;
  cursor: pointer;
  &hover {
    background-color: #c7ccd1;
  }
`;

export const Question = styled.h3`
  text-align: center;
`;
export const SubmitBtn = styled.button`
  background-color: rgb(0, 153, 51);
  color: white;
  height: 2rem;
  width: 6rem;
  border: none;
  border-radius: 10px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 1.2rem;
  @media (max-width: 1010px) {
    width: 5.5rem;
    font-size: 1.1rem;
  }
  @media (max-width: 800px) {
    width: 4.5rem;
    font-size: 0.9rem;
  }
  @media (max-width: 400px) {
    width: 4rem;
    font-size: 0.7rem;
  }
`;
