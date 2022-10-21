import styled from "styled-components";

export const ProfileMainDiv = styled.div`
  margin-top: 2rem;
  margin: 0;
  position: relative;
  z-index: 11;
`;
export const ProfileMainText = styled.h3`
  color: #2e266f;
  padding-top: 2rem;
  margin: 0;
  font-size: 3rem;
  @media (max-width: 700px) {
    font-size: 2.5rem;
  }
  @media (max-width: 500px) {
    font-size: 2rem;
  }
  @media (max-width: 370px) {
    font-size: 1.7rem;
  }
  @media (max-width: 300px) {
    font-size: 1.3rem;
  }
  @media (max-width: 220px) {
    font-size: 1.1rem;
  }
`;
