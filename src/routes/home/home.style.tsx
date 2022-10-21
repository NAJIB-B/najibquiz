import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
export const HomeDiv = styled.div`
  // background-color: aqua;

  padding-bottom: 3em;

  background: linear-gradient(to bottom, #fff5ec 0%, #ffedde 100%);
  background-position: 50% 101%, 50% 100%, 0 0;
  background-size: 101%, cover, auto;
  background-repeat: no-repeat, no-repeat, repeat;
`;

const homeAnimation = keyframes`
    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }
`;

export const Area = styled.div`
  background: #ffedde;
  background: -webkit-linear-gradient(to left, #ffedde, #ffedde);
  width: 100%;
  min-height: 100vh;
  text-align: center;
`;
export const HomeH1 = styled.h1`
  font-family: "Exo", sans-serif;
  font-weight: 700;
  font-size: 3rem;
  text-align: center;
  color: #2e266f;
  text-align: left;
  @media (max-width: 700px) {
    text-align: center;
    margin-bottom: 0;
    margin-top: 5px;
  }
  @media (max-width: 600px) {
    font-size: 1.875rem;
  }
`;
export const HomeH4 = styled.h4`
  font-family: "Exo", sans-serif;
  font-weight: 300;
  font-size: 1.125rem;
  text-align: center;
  color: #2e266f;
  text-align: left;
  line-height: 1.7rem;
  letter-spacing: 2px;

  @media (max-width: 700px) {
    text-align: center;
    line-height: 1.5rem;
    margin-bottom: 0;
    padding: 0 5px;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;
export const HomeTextDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  text-align: left;
  position: relative;

  z-index: 10;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
export const TopBtnDiv = styled.div`
  display: flex;
  justify-content: end;
  position: relative;
  z-index: 10;
`;
export const HomeImage = styled.img`
  margin-top: 2rem;
  width: 25rem;
  height: 22rem;

  @media (max-width: 920px) {
    width: 22rem;
    height: 19rem;
    margin-top: 2rem;
  }
  @media (max-width: 785px) {
    width: 18rem;
    height: auto;
  }
  @media (max-width: 700px) {
    margin-top: 0.5rem;
    width: 15rem;
    height: auto;
  }
`;

export const OutlineBtn = styled.button`
  padding: 0.8rem 1.8rem;
  margin: 1rem;
  text-decoration: none;
  color: #2e266f;
  font-size: 1.125rem;
  background: none;

  cursor: pointer;

  border: 3px solid #2e266f;
  border-radius: 15px;
  position: relative;
  z-index: 10;
  @media (max-width: 650px) {
    font-size: 1rem;
  }
  @media (max-width: 460px) {
    padding: 0.5rem 1rem;
  }
  @media (max-width: 370px) {
    font-size: 0.8rem;
  }
`;

export const FilledBtn = styled.button`
  padding: 1rem 2rem;
  margin: 1rem;
  text-decoration: none;
  color: white;
  font-size: 1.125rem;
  background: #fe043c;
  border: none;

  cursor: pointer;

  border-radius: 15px;
  position: relative;
  z-index: 10;
  @media (max-width: 650px) {
    font-size: 1rem;
  }
  @media (max-width: 460px) {
    padding: 0.5rem 1rem;
  }
  @media (max-width: 370px) {
    font-size: 0.8rem;
  }
`;
export const HomeNavButtonsDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const HomeTextInnerDiv = styled.div`
  margin-top: 1rem;
  width: 50%;
  display: inline-block;
  @media (max-width: 700px) {
    margin-left: 0;
    margin-top: 0;
    width: 100%;
    text-align: center;
  }
`;
export const HomeImageDiv = styled.div`
  @media (max-width: 700px) {
    text-align: center;
  }
`;
export const GameBtnDiv = styled.div`
  background-color: #33cc36;
  border-radius: 10px;
  margin: 3rem;
  width: 60%;
  display: inline-block;
  position: relative;
  z-index: 10;
  padding: 1rem 1rem;

  color: white;
  font-size: 2rem;
  @media (max-width: 580px) {
    font-size: 1.5rem;
  }
  @media (max-width: 460px) {
    width: 50%;
  }
  @media (max-width: 300px) {
    padding: 0.5rem 0.5rem;
    margin: 2rem;
  }
`;
