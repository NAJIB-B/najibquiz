import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, ChangeEvent, useEffect } from "react";
import {
  selectIsLoading,
  selectQuestionNumber,
  selectQuizCount,
  selectQuizSuccess,
} from "../store/quiz/quiz.selector";
import { useSelector } from "react-redux";
import { SignUpPageDiv, SignUpDiv } from "../sign-up/sign-up.style";
import { Circles, CirclesLi, SignUpBtn } from "../home/home.style";
import { addQuestionToQuiz } from "../store/quiz/quiz.action";
import { FormInputs, FormFieldLabels } from "../login/login.style";
import { finishSettingQuestion } from "../store/quiz/quiz.action";
import { selectfinishSettingQuestion } from "../store/quiz/quiz.selector";
import React from "react";
import ReactDOM from "react-dom";
import CreateQuizButtonPage from "../createQuizButtonPage/createQuizButtonPage.component";
import Spinner from "../spinner/spinner.component";
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
  const isLoading = useSelector(selectIsLoading);
  const isfinishSettingQuestion = useSelector(selectfinishSettingQuestion);
  const questionNumber = useSelector(selectQuestionNumber);
  const quizCount = useSelector(selectQuizCount);
  const quizSuccess = useSelector(selectQuizSuccess);
  useEffect(() => {
    if (quizSuccess) {
      navigate("/");
    }
  }, [quizSuccess]);
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
  const resetFormfields = () => {
    setFormFields(defaultFormFields);
  };
  const addToQuestions = () => {
   
    if (
      !question.trim() ||
      !answer.trim() ||
      !option1.trim() ||
      !option2.trim() ||
      !option3.trim() ||
      !option4.trim()
    ) {
      alert(" You can't leave any of the inputs blank. Please fill all the input fields before you proceed");
      return;
    }
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
          questionNumber: number,
          question,
          option1,
          option2,
          option3,
          option4,
          answer,
        },
      })
    );

    resetFormfields();
  };

  return (
    <>
      {isLoading ? (
        <Spinner></Spinner>
      ) : (
        <>
          {isfinishSettingQuestion ? (
            <CreateQuizButtonPage></CreateQuizButtonPage>
          ) : (
            <SignUpPageDiv>
              <SignUpDiv>
                <FormFieldLabels>Input Your question here :</FormFieldLabels>
                <FormInputs
                  type="text"
                  name="question"
                  placeholder="How many moon does earth have"
                  onChange={change}
                  value={question}
                  required
                />
                <br />
                <br />
                <FormFieldLabels>Input an option :</FormFieldLabels>
                <FormInputs
                  type="text"
                  name="option1"
                  placeholder="e.g 3"
                  onChange={change}
                  value={option1}
                  required
                />
                <br />
                <FormFieldLabels>Input an option :</FormFieldLabels>
                <FormInputs
                  type="text"
                  name="option2"
                  placeholder="e.g 2"
                  onChange={change}
                  value={option2}
                  required
                />
                <br />
                <FormFieldLabels>Input an option :</FormFieldLabels>
                <FormInputs
                  type="text"
                  name="option3"
                  placeholder="e.g 4"
                  onChange={change}
                  value={option3}
                  required
                />
                <br />
                <FormFieldLabels>Input an option :</FormFieldLabels>
                <FormInputs
                  type="text"
                  name="option4"
                  placeholder="e.g 1"
                  onChange={change}
                  value={option4}
                  required
                />
                <br />
                <FormFieldLabels>
                  Input the answer to the question :
                </FormFieldLabels>
                <FormInputs
                  type="text"
                  name="answer"
                  placeholder="input correct answer e.g 1"
                  onChange={change}
                  value={answer}
                />
                <br />
                <br />
                <SignUpBtn onClick={addToQuestions}>Add to questions</SignUpBtn>
              </SignUpDiv>
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
            </SignUpPageDiv>
          )}
        </>
      )}
    </>
  );
};

export default QuizFormPage;
