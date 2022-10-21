import { EditableQuizFormat, QuizFormat } from "../../utils/firebase.utils";
import { MouseEvent, ChangeEvent, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  setCheckedValue,
  setCheckedValueInEditableArray,
  uploadQuizResultToOwnerDbStart,
} from "../../store/quizRoom/quizRoom.action";
import { useNavigate } from "react-router-dom";
import {
  selectCheckedValue,
  selectCurrentArrayNumber,
  selectDoneWithQuiz,
  selectEditableQuizArray,
  selectQuizId,
  selectQuizOwner,
  selectQuizTakerName,
} from "../../store/quizRoom/quizRoom.selector";
import {
  addCurrentArrayNumber,
  reduceCurrentArrayNumber,
} from "../../store/quizRoom/quizRoom.action";
import { QuizResultFormat } from "../../store/quizRoom/quizRoom.reducer";
import {
  Body,
  BtnDiv,
  Main,
  Next,
  Prev,
  Question,
  QuestionsPage,
  Radiocontainer,
  SubmitBtn,
} from "./quizQuestionContainer.styles";
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
  const navigate = useNavigate();
  const currentArrayNumber = useSelector(selectCurrentArrayNumber);
  const editableQuizArray = useSelector(selectEditableQuizArray);
  const quizOwner = useSelector(selectQuizOwner);
  const doneWithQuiz = useSelector(selectDoneWithQuiz);
  const quizId = useSelector(selectQuizId);
  const quizTakerName = useSelector(selectQuizTakerName);
  useEffect(() => {
    if (!doneWithQuiz) return;
    navigate("/");
  }, []);

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

  const clicked = (e: MouseEvent<HTMLDivElement>) => {
    const value = (e.currentTarget.firstChild as HTMLInputElement).value;
    dispatch(
      setCheckedValueInEditableArray({
        checked: value,
        questionArrayNumber: currentArrayNumber,
      })
    );
  };
  return (
    <>
      <Main>
        <Body>
          <h3>Good luck!</h3>
          {/* <button class="startBtn">Start quiz</button> */}
          {/* <h3 class="">
          your got <span>1</span> out of <span>20</span>
        </h3> --> */}
          {/* <h2 class="progress">Question <span>1</span> of <span>20</span>:</h2> */}
          <Question>{question}</Question>
          <form>
            <Radiocontainer onClick={clicked}>
              <input
                type="radio"
                value={option1}
                name="option"
                onChange={checkOption}
                checked={checked === option1}
              />
              <label>{option1}</label>
            </Radiocontainer>
            <Radiocontainer onClick={clicked}>
              <input
                type="radio"
                value={option2}
                name="option"
                onChange={checkOption}
                checked={checked === option2}
              />
              <label>{option2}</label>
            </Radiocontainer>
            <Radiocontainer onClick={clicked}>
              <input
                type="radio"
                value={option3}
                name="option"
                onChange={checkOption}
                checked={checked === option3}
              />
              <label>{option3}</label>
            </Radiocontainer>
            <Radiocontainer onClick={clicked}>
              <input
                type="radio"
                value={option4}
                name="option"
                onChange={checkOption}
                checked={checked === option4}
              />
              <label>{option4}</label>
            </Radiocontainer>

            <br />
          </form>
          <SubmitBtn onClick={submit}>submit</SubmitBtn>
          <BtnDiv>
            {currentArrayNumber < 1 ? "" : <Prev onClick={back}>←back</Prev>}
            {currentArrayNumber === editableQuizArray.length - 1 ? (
              ""
            ) : (
              <Next onClick={next}>next→</Next>
            )}
          </BtnDiv>
        </Body>
      </Main>
    </>
  );
};

export default QuizQuestionContainer;
