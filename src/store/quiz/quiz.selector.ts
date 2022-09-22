import { createSelector } from "reselect";
import { QuizState } from "./quiz.reducer";
import { RootState } from "../store";
const selectQuizReducers = (state: RootState): QuizState => state.quiz;

export const selectQuizCount = createSelector(
  [selectQuizReducers],
  (quizCount) => quizCount.questionCount
);
export const selectQuestionNumber = createSelector(
  [selectQuizReducers],
  (questionNumber) => questionNumber.numberOfQuestions
);
export const selectfinishSettingQuestion = createSelector(
  [selectQuizReducers],
  (finishSettingQuestion) => finishSettingQuestion.finishSettingQuestion
);

// export const selectCategoriesMap = createSelector(
//   [selectCategories],
//   (categories) => {
//     return categories.reduce((acc, category) => {
//       const { title, items } = category;
//       acc[title.toLowerCase()] = items;
//       return acc;
//     }, {} as CategoryMap);
//   }
// );
