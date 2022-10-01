import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
export const HomeDiv = styled.div`
  // background-color: aqua;

  padding-bottom: 3em;

  background: linear-gradient(to bottom, #6929c4 0%, #8a3ffc 100%);
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
  background: #8a3ffc;
  background: -webkit-linear-gradient(to left, #6929c4, #8a3ffc);
  width: 100%;
  min-height: 100vh;
  text-align: center;
`;
export const HomeH1 = styled.h1`
  font-family: "Exo", sans-serif;
  font-weight: 700;
  font-size: 4rem;
  text-align: center;
  color: white;
  text-align: left;

  @media (max-width: 920px) {
    font-size: 3.5rem;
  }
  @media (max-width: 710px) {
    font-size: 3rem;
  }
  @media (max-width: 580px) {
    font-size: 2.5rem;
  }
  @media (max-width: 460px) {
    font-size: 2rem;
  }
  @media (max-width: 350px) {
    font-size: 1.5rem;
  }
`;
export const HomeH4 = styled.h4`
  font-family: "Exo", sans-serif;
  font-weight: 300;
  font-size: 2rem;
  text-align: center;
  color: white;
  text-align: left;

  @media (max-width: 920px) {
    font-size: 1.8rem;
  }
  @media (max-width: 710px) {
    font-size: 1.5rem;
  }
  @media (max-width: 580px) {
    font-size: 1.2rem;
  }
  @media (max-width: 460px) {
    font-size: 1rem;
  }
  @media (max-width: 350px) {
    font-size: 1rem;
  }
`;
export const HomeTextDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  text-align: left;
  position: relative;
  z-index: 10;
`;
export const TopBtnDiv = styled.div`
  display: flex;
  justify-content: end;
  position: relative;
  z-index: 10;
`;
export const HomeImage = styled.img`
  width: 25rem;
  height: 22rem;
  position: absolute;
  left: 55%;
  top: 13%;
  @media (max-width: 920px) {
    width: 22rem;
    height: 19rem;
  }
  @media (max-width: 785px) {
    left: 30%;
    top: 13%;
    opacity: 0.3;
    z-index: -1;
  }
  @media (max-width: 550px) {
    left: 20%;
    top: 13%;
    opacity: 0.3;
    z-index: -1;
  }
  @media (max-width: 450px) {
    width: 17rem;
    height: 14rem;
  }
  @media (max-width: 450px) {
    left: 10%;
    top: 13%;
    width: 15rem;
    height: 12rem;
  }
  @media (max-width: 300px) {
    left: 10%;
    top: 20%;
    width: 12rem;
    height: 9rem;
  }
`;
export const HomeImageDiv = styled.div`
  position: relative;
`;
export const LogOutBtn = styled.button`
  padding: 0.8rem 1.8rem;
  margin: 1rem;
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  background: none;

  cursor: pointer;
  text-shadow: 2px 2px black;
  border: 3px solid white;
  border-radius: 20px;
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
  @media (max-width: 350px) {
    margin: 0.5rem 0.2rem;
    border: 2px solid white;
  }
`;

export const SignUpBtn = styled.button`
  padding: 1rem 2rem;
  margin: 1rem;
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  background: #33cc36;
  border: none;

  cursor: pointer;
  text-shadow: 2px 2px black;
  border-radius: 20px;
  position: relative;
  z-index: 10;
  @media (max-width: 650px) {
    font-size: 1rem;
  }
  @media (max-width: 460px) {
    padding: 0.5rem 1rem;
  }
  @media (max-width: 350px) {
    margin: 0.5rem 0.2rem;
  }
`;
export const HomeNavButtonsDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const HomeTextInnerDiv = styled.div`
  margin-top: 1rem;
  margin-left: 2rem;
  @media (max-width: 300px) {
    margin-left: 0.5rem;
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

export const CirclesLi = styled.div`
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 25s linear infinite;
  bottom: -150px;
`;
export const Circles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  & ${CirclesLi}:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-name: ${homeAnimation};
    animation-delay: 0s;
  }
  & ${CirclesLi}:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-name: ${homeAnimation};
    animation-delay: 2s;
    animation-duration: 12s;
  }
  & ${CirclesLi}:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-name: ${homeAnimation};
    animation-delay: 4s;
  }
  & ${CirclesLi}:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-name: ${homeAnimation};
    animation-delay: 0s;
    animation-duration: 18s;
  }
  & ${CirclesLi}:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-name: ${homeAnimation};
    animation-delay: 0s;
  }
  & ${CirclesLi}:nth-child(6) {
    animation-name: ${homeAnimation};
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
  }
  & ${CirclesLi}:nth-child(7) {
    animation-name: ${homeAnimation};
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
  }
  & ${CirclesLi}:nth-child(8) {
    animation-name: ${homeAnimation};
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
  }
  & ${CirclesLi}:nth-child(9) {
    animation-name: ${homeAnimation};
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
  }
  & ${CirclesLi}:nth-child(10) {
    animation-name: ${homeAnimation};
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
  }
`;
