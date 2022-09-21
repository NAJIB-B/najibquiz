import React from "react";
import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import Login from "./login/login.component";
import Home from "./home/home.component";
import SignUp from "./sign-up/sign-up.component";
import Quiz from "./quiz/quiz.component";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
        <Route path="/quiz/*" element={<Quiz></Quiz>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
