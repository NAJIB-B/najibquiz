import { useNavigate, Outlet } from "react-router-dom";
import { HomeDiv } from "./home.style";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkUserSession, signOutStart } from "../store/user/user.action";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/user/user.selector";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
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
  const signOut = () => {
    dispatch(signOutStart());
  };
  const profile = () => {
    navigate("/profile");
  };
  return (
    <>
      <HomeDiv>
        {currentUser ? (
          <>
            <button onClick={signOut}>sign Out </button>
            <button onClick={profile}>profile</button>
          </>
        ) : (
          <>
            <button onClick={login}> login</button>
            <button onClick={signUp}> signUp</button>
          </>
        )}

        <button onClick={quiz}> quiz</button>
      </HomeDiv>
      <Outlet></Outlet>
    </>
  );
};

export default Home;
