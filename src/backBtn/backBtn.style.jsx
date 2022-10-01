import styled from "styled-components";
import { Icon } from "@iconify/react";

export const BackIcon = styled(Icon)`
  font-size: 2rem;
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

export const BackButton = styled.button`
  position: absolute;
  top: 1%;
  left: 0;
  z-index: 10;
  border: none;
  padding: 0;
  margin: 0;
  @media (max-width: 850px) {
    top: 2.5%;
  }
  @media (max-width: 670px) {
    left: 2.5%;
  }
`;
