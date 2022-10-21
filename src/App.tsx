import React from "react";
import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import Login from "./routes/login/login.component";
import Home from "./routes/home/home.component";
import SignUp from "./routes/sign-up/sign-up.component";
import Quiz from "./components/quiz/quiz.component";
import QuizRoom from "./routes/quizRoom/quizRoom.component";
import Profile from "./routes/profile/profile.component";
import PrivateRoute from "./components/private-routes/privateRoute";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="login" element={<Login></Login>}></Route>
      <Route path="signUp" element={<SignUp></SignUp>}></Route>

      <Route path="profile" element={<Profile></Profile>}></Route>

      <Route
        path="quiz/*"
        element={
          <PrivateRoute>
            <Quiz></Quiz>
          </PrivateRoute>
        }
      ></Route>
      <Route path="quizRoom/*" element={<QuizRoom></QuizRoom>}></Route>
    </Routes>
  );
}

export default App;
