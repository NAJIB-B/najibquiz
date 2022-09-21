import { useState, ChangeEvent } from "react";
import { setQuestionNumber } from "../store/quiz/quiz.action";
import { useDispatch } from "react-redux";
const defaultFormFields = {
  questionNumber: "",
};
const QuizSettingsPage = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { questionNumber } = formFields;

  const change = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const createQuiz = () => {
    dispatch(setQuestionNumber(+questionNumber));
  };

  return (
    <>
      <input
        type="number"
        name="questionNumber"
        placeholder="input number of questions you want to set"
        onChange={change}
        value={questionNumber}
      />
      <button onClick={createQuiz}>create quiz</button>
      <h1>QuizSettingsPage</h1>
    </>
  );
};

export default QuizSettingsPage;
