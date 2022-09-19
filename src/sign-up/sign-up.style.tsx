import styled from "styled-components";

export const SignUpPageDiv = styled.div`
  background-color: rgba(152, 68, 183, 1);

  width: 100%;
  min-height: 100vh;
  text-align: center;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  place-items: center;
`;
export const SignUpDiv = styled.div`
  margin: 2rem auto;
  position: relative;
  z-index: 10;
  border: 1px solid white;
  border-radius: 20px;
  padding: 2rem;
`;
