import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getQuestionsFromDbStart } from "../store/quizRoom/quizRoom.action";
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

  return <h1>questions</h1>;
};

export default QuizQuestions;
