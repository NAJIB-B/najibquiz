import { useNavigate, Outlet } from "react-router-dom";
import image from "../assets/homeImg.png";
import {
  HomeDiv,
  HomeH1,
  HomeH4,
  HomeNavButtonsDiv,
  HomeTextDiv,
  HomeTextInnerDiv,
  LogOutBtn,
  SignUpBtn,
  HomeImage,
} from "./home.style";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  checkUserSession,
  setBackToHome,
  signOutStart,
} from "../store/user/user.action";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/user/user.selector";
import { selectQuizSuccess } from "../store/quiz/quiz.selector";
import { Area, Circles, CirclesLi } from "./home.style";
import ModalContainer from "../modalContainer/modalContainer.component";
const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const quizSuccess = useSelector(selectQuizSuccess);

  useEffect(() => {
    dispatch(checkUserSession());
    dispatch(setBackToHome(false));
  }, []);
  const login = () => {
    navigate("login");
  };
  const signUp = () => {
    navigate("signUp");
  };
  const quiz = () => {
    navigate("quiz");
  };
  const signOut = () => {
    dispatch(signOutStart());
  };
  const profile = () => {
    navigate("profile");
  };
  return (
    <>
      <Area>
        <HomeDiv>
          {quizSuccess ? <ModalContainer></ModalContainer> : ""}
          <HomeNavButtonsDiv>
            {currentUser ? (
              <>
                <LogOutBtn onClick={signOut}>sign Out </LogOutBtn>
                <SignUpBtn onClick={profile}>profile</SignUpBtn>
              </>
            ) : (
              <>
                <LogOutBtn onClick={login}> login</LogOutBtn>
                <SignUpBtn onClick={signUp}> signUp</SignUpBtn>
              </>
            )}
          </HomeNavButtonsDiv>

          <HomeTextDiv>
            <HomeTextInnerDiv>
              <HomeH1>Testing made easy </HomeH1>
              <HomeH4>
                You don't have to look far anymore, this is the solution to all
                automated testing problems.
              </HomeH4>
              <HomeH4>
                Create online quiz, exam or any form of test for FREE
              </HomeH4>
              <br />

              <SignUpBtn onClick={quiz}> Create quiz</SignUpBtn>
            </HomeTextInnerDiv>
            <div>
              <HomeImage src={image} alt="image of boy taking test"></HomeImage>
            </div>
          </HomeTextDiv>
        </HomeDiv>
        <Circles>
          <CirclesLi></CirclesLi>
          <CirclesLi></CirclesLi>
          <CirclesLi></CirclesLi>
          <CirclesLi></CirclesLi>
          <CirclesLi></CirclesLi>
          <CirclesLi></CirclesLi>
          <CirclesLi></CirclesLi>
          <CirclesLi></CirclesLi>
          <CirclesLi></CirclesLi>
          <CirclesLi></CirclesLi>
        </Circles>
      </Area>
    </>
  );
};

export default Home;
