import { useState, ChangeEvent } from "react";
import {
  setQuestionNumber,
  setQuizName,
  finishSettingQuestion,
} from "../store/quiz/quiz.action";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Circles,
  CirclesLi,
  Area,
  SignUpBtn,
  LogOutBtn,
} from "../home/home.style";
import {
  LoginDiv,
  FormFieldLabels,
  FormInputs,
  SignInwithgoogleTextDiv,
  Or,
  DontHaveAccout,
  GoogleIcon,
} from "../login/login.style";
const defaultFormFields = {
  questionNumber: "",
  quizName: "",
};
const QuizSettingsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { questionNumber, quizName } = formFields;
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const change = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const createQuiz = () => {
    if (!questionNumber || !quizName) {
      alert("Please fill the inputs before you proceed");
      return;
    }
    if (+questionNumber < 1) {
      alert("please input a positive number");
      return;
    }
    if (!quizName.trim()) {
      alert("You can't leave the quiz name blank");
      return;
    }
    resetFormFields();
    dispatch(finishSettingQuestion(false));
    dispatch(setQuestionNumber(+questionNumber));
    dispatch(setQuizName(quizName));
    navigate("quizFormPage");
  };

  return (
    <>
      <Area>
        <LoginDiv>
          <FormFieldLabels>Input number of questions :</FormFieldLabels>
          <FormInputs
            type="number"
            name="questionNumber"
            placeholder="e.g 20"
            onChange={change}
            value={questionNumber}
            required
          />
          <br />
          <br />
          <FormFieldLabels>Give a name for your quiz :</FormFieldLabels>
          <FormInputs
            type="text"
            name="quizName"
            placeholder="e.g grade 4 quiz"
            onChange={change}
            value={quizName}
            required
          />
          <br />
          <br />
          <SignUpBtn onClick={createQuiz}>create quiz</SignUpBtn>
        </LoginDiv>
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

export default QuizSettingsPage;
