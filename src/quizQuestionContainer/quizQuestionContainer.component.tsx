import { EditableQuizFormat, QuizFormat } from "../utils/firebase.utils";
import { MouseEvent } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  selectCurrentArrayNumber,
  selectEditableQuizArray,
} from "../store/quizRoom/quizRoom.selector";
import {
  addCurrentArrayNumber,
  reduceCurrentArrayNumber,
} from "../store/quizRoom/quizRoom.action";
type QuizQuestionContainerPropsType = {
  qa: EditableQuizFormat;
};

const QuizQuestionContainer = ({ qa }: QuizQuestionContainerPropsType) => {
  const { question, questionNumber, option1, option2, option3, option4 } = qa;
  const dispatch = useDispatch();
  const currentArrayNumber = useSelector(selectCurrentArrayNumber);
  const editableQuizArray = useSelector(selectEditableQuizArray);

  const checkOption = (e: MouseEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
  };

  const back = () => {
    dispatch(reduceCurrentArrayNumber());
  };
  const next = () => {
    dispatch(addCurrentArrayNumber());
  };

  return (
    <>
      <h4>{question}</h4>
      <form>
        <input
          type="radio"
          value={option1}
          name="option"
          onClick={checkOption}
        />
        <label>{option1}</label>
        <br />
        <input
          type="radio"
          value={option2}
          name="option"
          onClick={checkOption}
        />
        <label>{option2}</label>
        <br />
        <input
          type="radio"
          value={option3}
          name="option"
          onClick={checkOption}
        />
        <label>{option3}</label>
        <br />
        <input
          type="radio"
          value={option4}
          name="option"
          onClick={checkOption}
        />
        <label>{option4}</label>
        <br />
        <br />
      </form>
      {currentArrayNumber < 1 ? "" : <button onClick={back}>back</button>}
      {currentArrayNumber === editableQuizArray.length - 1 ? (
        ""
      ) : (
        <button onClick={next}>next</button>
      )}
    </>
  );
};

export default QuizQuestionContainer;
