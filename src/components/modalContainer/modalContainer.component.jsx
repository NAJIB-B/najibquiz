import { FilledBtn } from "../../routes/home/home.style";

import {
  Overlay,
  ModalContainerDiv,
  Message,
  QuizLink,
  CloseBtn,
} from "./modalContainer.style";
import { useDispatch } from "react-redux";
import { closeModal, setQuizId } from "../../store/quiz/quiz.action";
import { useSelector } from "react-redux";
import { selectQuizId } from "../../store/quiz/quiz.selector";

const ModalContainer = () => {
  const dispatch = useDispatch();
  const quizId = useSelector(selectQuizId);
  const close = () => {
    dispatch(closeModal());
    dispatch(setQuizId(""));
  };
  const url = window.location.href + "quizRoom/" + quizId;
  const copy = () => {
    navigator.clipboard.writeText(url).then(
      function () {},
      function (err) {
        alert("something went wrong try again");
      }
    );
  };

  return (
    <div className="modal">
      <ModalContainerDiv>
        <CloseBtn onClick={close}>X</CloseBtn>
        <Message>Quiz successfully created </Message>

        <QuizLink>{url}</QuizLink>
        <FilledBtn onClick={copy}>copy link to quiz</FilledBtn>
      </ModalContainerDiv>
      <Overlay onClick={close}></Overlay>
    </div>
  );
};

export default ModalContainer;
