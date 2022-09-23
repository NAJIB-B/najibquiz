import { useNavigate, Outlet } from "react-router-dom";
import { HomeDiv } from "./home.style";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkUserSession } from "../store/user/user.action";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const root = React.createElement("h1", {}, "My First React Code");
  // ReactDOM.render(root, document.getElementById("root"));
  const arr = [1, 2, 3, 4, 5, 6];
  const Input = () => {
    return <input placeholder="Your input here" />;
  };
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
