import React from "react";
import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import Login from "./login/login.component";
import SignUp from "./sign-up/sign-up.component";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp></SignUp>}></Route>
    </Routes>
  );
}

export default App;
