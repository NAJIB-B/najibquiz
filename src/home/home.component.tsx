import { useNavigate, Outlet } from "react-router-dom";
import { HomeDiv } from "./home.style";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkUserSession } from "../store/user/user.action";
const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);
  const login = () => {
    navigate("/login");
  };
  const signUp = () => {
    navigate("/signUp");
  };
  const quiz = () => {
    navigate("/quiz");
  };

  return (
    <>
      <HomeDiv>
        <button onClick={login}> login</button>
        <button onClick={signUp}> signUp</button>
        <button onClick={quiz}> quiz</button>
      </HomeDiv>
      <Outlet></Outlet>
    </>
  );
};

export default Home;
