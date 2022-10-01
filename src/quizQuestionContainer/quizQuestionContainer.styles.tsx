import styled from "styled-components";


export const Main = styled.div `
    border: 1px solid rgb(0, 153, 51);
    width: 70%;
    height: 20rem;
    position: absolute;
    left: 50%;
    top: 35%;
    transform: translate(-50%, -50%);
    margin: 2px;
  `
  export const Body = styled.div`
    margin: 2rem;
    position: relative;
  ` 
  
  
  export const QuizQuestionContainerH1= styled.h1`
   text-align: center;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  ` 
   
 
  
 
  
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
  ` 
  
  
  export const Next= styled.button`
    
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
  ` 
    
  
  export const BtnDiv = styled.div`
    position: absolute;
    left: 38%;
    top: 95%;

  ` 
  export const Radiocontainer= styled.div`
    
    background-color: #e7e9eb;
    display: block;
    height: 1.5rem;
    margin-bottom: 0.2rem;
    cursor: pointer;
    &hover{
        background-color: #c7ccd1;
    }
  ` 
 
  
  
  
  export const Question= styled.h3`
      text-align: center;

  `
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
   `
  
 