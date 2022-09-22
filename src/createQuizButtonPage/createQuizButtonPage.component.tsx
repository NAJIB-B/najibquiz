import { useSelector } from "react-redux";
import { selectQuiz } from "../store/quiz/quiz.selector";
import { useDispatch } from "react-redux";
import { uploadQuizQuestionStart } from "../store/quiz/quiz.action";

const CreateQuizButtonPage = () => {
  const dispatch = useDispatch();
  const quiz = useSelector(selectQuiz);

  const uploadQuiz = () => {
    dispatch(uploadQuizQuestionStart(quiz));
  };

  return (
    <>
      <h1>Create quiz button page</h1>
      <button onClick={uploadQuiz}>upload quiz</button>
    </>
  );
};

export default CreateQuizButtonPage;
