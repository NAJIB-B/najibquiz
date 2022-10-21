import { useNavigate, Outlet } from "react-router-dom";
import image from "../../assets/homeImg.png";
import {
  HomeDiv,
  HomeH1,
  HomeH4,
  HomeNavButtonsDiv,
  HomeTextDiv,
  HomeTextInnerDiv,
  OutlineBtn,
  FilledBtn,
  HomeImage,
  HomeImageDiv,
} from "./home.style";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  checkUserSession,
  setBackToHome,
  signOutStart,
} from "../../store/user/user.action";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectQuizSuccess } from "../../store/quiz/quiz.selector";
import { Area } from "./home.style";
import ModalContainer from "../../components/modalContainer/modalContainer.component";
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
                <OutlineBtn onClick={signOut}>sign Out </OutlineBtn>
                <FilledBtn onClick={profile}>profile</FilledBtn>
              </>
            ) : (
              <>
                <OutlineBtn onClick={login}> login</OutlineBtn>
                <FilledBtn onClick={signUp}> signUp</FilledBtn>
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

              <FilledBtn onClick={quiz}> Create quiz</FilledBtn>
            </HomeTextInnerDiv>
            <HomeImageDiv>
              <HomeImage src={image} alt="image of boy taking test"></HomeImage>
            </HomeImageDiv>
          </HomeTextDiv>
        </HomeDiv>
      </Area>
    </>
  );
};

export default Home;
