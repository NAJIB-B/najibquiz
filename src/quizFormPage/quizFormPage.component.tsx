import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, ChangeEvent, useEffect } from "react";
import {
  selectQuestionNumber,
  selectQuizCount,
} from "../store/quiz/quiz.selector";
import { useSelector } from "react-redux";
import { addQuestionToQuiz } from "../store/quiz/quiz.action";
import { finishSettingQuestion } from "../store/quiz/quiz.action";
import { selectfinishSettingQuestion } from "../store/quiz/quiz.selector";

import CreateQuizButtonPage from "../createQuizButtonPage/createQuizButtonPage.component";
const defaultFormFields = {
  question: "",
  option1: "",
  option2: "",
  option3: "",
  option4: "",
  answer: "",
};
const QuizFormPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isfinishSettingQuestion = useSelector(selectfinishSettingQuestion);
  const questionNumber = useSelector(selectQuestionNumber);
  const quizCount = useSelector(selectQuizCount);
  useEffect(() => {
    if (questionNumber === 0) {
      dispatch(finishSettingQuestion(true));
    }
  }, [questionNumber]);

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { question, option1, option2, option3, option4, answer } = formFields;

  const change = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const addToQuestions = () => {
    if (
      answer !== option1 &&
      answer !== option2 &&
      answer !== option3 &&
      answer !== option4
    ) {
      alert(
        "Make sure the answer is the same as one of the options. Note that it's case sensitive "
      );
      return;
    }
    const number = quizCount.toString();
    dispatch(
      addQuestionToQuiz({
        [number]: {
          question,
          option1,
          option2,
          option3,
          option4,
          answer,
        },
      })
    );
  };

  return (
    <>
      {isfinishSettingQuestion ? (
        <CreateQuizButtonPage></CreateQuizButtonPage>
      ) : (
        <>
          <input
            type="text"
            name="question"
            placeholder="input question"
            onChange={change}
            value={question}
            required
          />
          <input
            type="text"
            name="option1"
            placeholder="input an option"
            onChange={change}
            value={option1}
            required
          />
          <input
            type="text"
            name="option2"
            placeholder="input an option"
            onChange={change}
            value={option2}
            required
          />
          <input
            type="text"
            name="option3"
            placeholder="input an option"
            onChange={change}
            value={option3}
            required
          />
          <input
            type="text"
            name="option4"
            placeholder="input an option"
            onChange={change}
            value={option4}
            required
          />

          <input
            type="text"
            name="answer"
            placeholder="input the correct answer"
            onChange={change}
            value={answer}
          />

          <button onClick={addToQuestions}>Add to questions</button>
          <h1>QuizSettingsPage</h1>
        </>
      )}
    </>
  );
};

export default QuizFormPage;
