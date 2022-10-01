import styled from "styled-components";

export const QuizName = styled.h3`
  background-color: #33cc36;
  padding: 1rem;
  font-size: 1.7rem;
  color: white;
  letter-spacing: 2px;
  text-shadow: 2px 2px black;
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
  @media (max-width: 300px) {
    font-size: 1.1rem;
  }
`;
export const ProfileContainerDiv = styled.div`
  position: relative;
  z-index: 11;
  & p {
    font-size: 1.3rem;
    color: white;
    font-weight: 800;
    letter-spacing: 2px;
    margin-bottom: 0;
    @media (max-width: 300px) {
      font-size: 1rem;
    }
  }
`;
export const ScoreDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;
