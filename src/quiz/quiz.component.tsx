import { Routes, Route } from "react-router-dom";
import QuizFormPage from "../quizFormPage/quizFormPage.component";
import QuizSettingsPage from "../quizSettingsPage/quizSettingsPage.component";
const Quiz = () => {
  return (
    <Routes>
      <Route index element={<QuizSettingsPage></QuizSettingsPage>}></Route>
      <Route
        path="/quizFormPage"
        element={<QuizFormPage></QuizFormPage>}
      ></Route>
    </Routes>
  );
};

export default Quiz;
