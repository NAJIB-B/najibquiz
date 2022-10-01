import { useSelector } from "react-redux";
import { selectQuiz, selectQuizName } from "../store/quiz/quiz.selector";
import { selectUserUid } from "../store/user/user.selector";
import { useDispatch } from "react-redux";
import { generatePassword } from "../utils/helper";
import { uploadQuizQuestionStart } from "../store/quiz/quiz.action";
import { QuizMainObject } from "../store/quiz/quiz.reducer";
import {
  Circles,
  CirclesLi,
  Area,
  SignUpBtn,
  LogOutBtn,
} from "../home/home.style";

import { LoginDiv, DontHaveAccout } from "../login/login.style";
import {
  BringQuizToLife,
  BringQuizToLifePageDiv,
} from "./createQuizButtonPage.style";

const CreateQuizButtonPage = () => {
  const dispatch = useDispatch();
  const quizData = useSelector(selectQuiz);
  const quizName = useSelector(selectQuizName);
  const quizOwner = useSelector(selectUserUid);

  const uploadQuiz = () => {
    const id = generatePassword();
    const data: QuizMainObject = {
      id,
      quizName,
      quizOwner,
      quizData,
    };
    dispatch(uploadQuizQuestionStart(data));
  };

  return (
    <>
      <Area>
        <BringQuizToLifePageDiv>
          <BringQuizToLife>Bring your quiz to life</BringQuizToLife>
          <SignUpBtn onClick={uploadQuiz}>Create </SignUpBtn>
        </BringQuizToLifePageDiv>

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

export default CreateQuizButtonPage;
