import React from "react";
import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import Login from "./login/login.component";
import Home from "./home/home.component";
import SignUp from "./sign-up/sign-up.component";
import Quiz from "./quiz/quiz.component";
import QuizRoom from "./quizRoom/quizRoom.component";
import Profile from "./profile/profile.component";
import PrivateRoute from "./private-routes/privateRoute";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="login" element={<Login></Login>}></Route>
      <Route path="signUp" element={<SignUp></SignUp>}></Route>

      <Route path="profile" element={<Profile></Profile>}></Route>

      <Route path="quiz/*" element={
      <PrivateRoute>
        <Quiz></Quiz>
      </PrivateRoute>
      }></Route>
      <Route path="quizRoom/*" element={<QuizRoom></QuizRoom>}></Route>
    </Routes>
  );
}

export default App;
