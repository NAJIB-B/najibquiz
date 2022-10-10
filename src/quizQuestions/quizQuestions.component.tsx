import { useParams } from "react-router-dom";
import { useEffect, useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../spinner/spinner.component";
import { LoginDiv, FormFieldLabels, FormInputs } from "../login/login.style";
import { Area, FilledBtn, OutlineBtn } from "../home/home.style";
import {
  selectCurrentArrayNumber,
  selectEditableQuizArray,
  selectIsLoading,
  selectQuizTakerName,
} from "../store/quizRoom/quizRoom.selector";
import QuizQuestionContainer from "../quizQuestionContainer/quizQuestionContainer.component";
import {
  getQuestionsFromDbStart,
  setQuizTakerName,
} from "../store/quizRoom/quizRoom.action";
import { EditableQuizFormat } from "../utils/firebase.utils";

const defaultFormFields = {
  quizTakerName: "",
};
const QuizQuestions = () => {
  type QuestionsRouteParams = {
    quizRoomId: string;
  };
  const { quizRoomId } = useParams<
    keyof QuestionsRouteParams
  >() as QuestionsRouteParams;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuestionsFromDbStart(quizRoomId));
  }, []);
  const takerName = useSelector(selectQuizTakerName);
  const isloading = useSelector(selectIsLoading);
  const currnetArrayNumber = useSelector(selectCurrentArrayNumber);
  const editableQuestionsArray = useSelector(selectEditableQuizArray);

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { quizTakerName } = formFields;

  const change = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const questionToShow = editableQuestionsArray[currnetArrayNumber];

  const startQuiz = () => {
    if (!quizTakerName.trim()) {
      alert("Please input your name before you proceed");
      return;
    }
    dispatch(setQuizTakerName(quizTakerName));
  };

  return (
    <>
      {isloading ? (
        <Spinner></Spinner>
      ) : (
        <>
          {takerName ? (
            <QuizQuestionContainer qa={questionToShow}></QuizQuestionContainer>
          ) : (
            <>
              <Area>
                <LoginDiv>
                  <FormFieldLabels>What's your name :</FormFieldLabels>
                  <br />
                  <FormInputs
                    type="text"
                    name="quizTakerName"
                    placeholder="e.g john doe"
                    onChange={change}
                    value={quizTakerName}
                    required
                  />
                  <br />
                  <br />
                  <FilledBtn onClick={startQuiz}>Start quiz</FilledBtn>
                </LoginDiv>
              </Area>
            </>
          )}
        </>
      )}
    </>
  );
};

export default QuizQuestions;
