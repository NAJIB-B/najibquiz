import { useSelector } from "react-redux";
import { selectQuiz, selectQuizName } from "../../store/quiz/quiz.selector";
import { selectUserUid } from "../../store/user/user.selector";
import { useDispatch } from "react-redux";
import { generatePassword } from "../../utils/helper";
import { uploadQuizQuestionStart } from "../../store/quiz/quiz.action";
import { QuizMainObject } from "../../store/quiz/quiz.reducer";
import { Area, FilledBtn } from "../../routes/home/home.style";

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
          <FilledBtn onClick={uploadQuiz}>Create </FilledBtn>
        </BringQuizToLifePageDiv>
      </Area>
    </>
  );
};

export default CreateQuizButtonPage;
