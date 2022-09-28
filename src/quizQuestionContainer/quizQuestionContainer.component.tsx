import { EditableQuizFormat, QuizFormat } from "../utils/firebase.utils";
import { MouseEvent, ChangeEvent } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  setCheckedValue,
  setCheckedValueInEditableArray,
  uploadQuizResultToOwnerDbStart,
} from "../store/quizRoom/quizRoom.action";
import {
  selectCheckedValue,
  selectCurrentArrayNumber,
  selectEditableQuizArray,
  selectQuizId,
  selectQuizOwner,
  selectQuizTakerName,
} from "../store/quizRoom/quizRoom.selector";
import {
  addCurrentArrayNumber,
  reduceCurrentArrayNumber,
} from "../store/quizRoom/quizRoom.action";
import { QuizResultFormat } from "../store/quizRoom/quizRoom.reducer";
type QuizQuestionContainerPropsType = {
  qa: EditableQuizFormat;
};

const QuizQuestionContainer = ({ qa }: QuizQuestionContainerPropsType) => {
  const {
    question,
    questionNumber,
    option1,
    option2,
    option3,
    option4,
    checked,
  } = qa;
  const dispatch = useDispatch();
  const currentArrayNumber = useSelector(selectCurrentArrayNumber);
  const editableQuizArray = useSelector(selectEditableQuizArray);
  const quizOwner = useSelector(selectQuizOwner);
  const quizId = useSelector(selectQuizId);
  const quizTakerName = useSelector(selectQuizTakerName);

  const checkOption = (e: ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    dispatch(
      setCheckedValueInEditableArray({
        checked: value,
        questionArrayNumber: currentArrayNumber,
      })
    );
  };

  const back = () => {
    dispatch(reduceCurrentArrayNumber());
  };
  const next = () => {
    dispatch(addCurrentArrayNumber());
  };
  const submit = () => {
    let score = 0;
    editableQuizArray.forEach((item) => {
      if (item.answer === item.checked) return (score += 1);
    });
    console.log(score);
    const data: QuizResultFormat = {
      name: quizTakerName,
      score,
      quizOwner,
      quizId,
    };
    dispatch(uploadQuizResultToOwnerDbStart(data));
  };

  return (
    <>
      <h4>{question}</h4>
      <form>
        <input
          type="radio"
          value={option1}
          name="option"
          onChange={checkOption}
          checked={checked === option1}
        />
        <label>{option1}</label>
        <br />
        <input
          type="radio"
          value={option2}
          name="option"
          onChange={checkOption}
          checked={checked === option2}
        />
        <label>{option2}</label>
        <br />
        <input
          type="radio"
          value={option3}
          name="option"
          onChange={checkOption}
          checked={checked === option3}
        />
        <label>{option3}</label>
        <br />
        <input
          type="radio"
          value={option4}
          name="option"
          onChange={checkOption}
          checked={checked === option4}
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
      <button onClick={submit}>submit</button>
    </>
  );
};

export default QuizQuestionContainer;
