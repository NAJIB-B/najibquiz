import { useState, ChangeEvent } from "react";
import { setQuestionNumber, setQuizName , finishSettingQuestion} from "../store/quiz/quiz.action";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const defaultFormFields = {
  questionNumber: "",
  quizName: "",
};
const QuizSettingsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { questionNumber, quizName } = formFields;

  const change = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const createQuiz = () => {
    dispatch(finishSettingQuestion(false))
    dispatch(setQuestionNumber(+questionNumber));
    dispatch(setQuizName(quizName));
    navigate("quizFormPage");
  };

  return (
    <>
      <input
        type="number"
        name="questionNumber"
        placeholder="input number of questions you want to set"
        onChange={change}
        value={questionNumber}
        required
      />
      <input
        type="text"
        name="quizName"
        placeholder="give a name for your quiz"
        onChange={change}
        value={quizName}
        required
      />
      <button onClick={createQuiz}>create quiz</button>
      <h1>QuizSettingsPage</h1>
    </>
  );
};

export default QuizSettingsPage;
