import { useParams } from "react-router-dom";
import { useEffect, useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../spinner/spinner.component";
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
              <input
                type="text"
                name="quizTakerName"
                placeholder="what's your name"
                onChange={change}
                value={quizTakerName}
                required
              />
              <button onClick={startQuiz}>Start quiz</button>
              <h1>QuizSettingsPage</h1>
            </>
          )}
        </>
      )}
    </>
  );
};

export default QuizQuestions;
