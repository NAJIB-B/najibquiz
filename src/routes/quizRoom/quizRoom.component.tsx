import { Routes, Route } from "react-router-dom";
import QuizQuestions from "../../components/quizQuestions/quizQuestions.component";
const QuizRoom = () => {
  return (
    <Routes>
      <Route
        path=":quizRoomId"
        element={<QuizQuestions></QuizQuestions>}
      ></Route>
    </Routes>
  );
};

export default QuizRoom;
