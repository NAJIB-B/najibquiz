import { takeLatest, put, all, call } from "typed-redux-saga/macro";
import { QUIZ_ACTION_TYPES } from "./quiz.types";
import { SetQuestionNumber, setQuestionNumber } from "./quiz.action";

// export function* setQuestionsNumber({ payload: { value } }: SetQuestionNumber) {
//   try {
//     yield* put(setQuestionNumber(value));
//   } catch (error) {}
// }

// export function* onSetQuestionNumber() {
//   yield* takeLatest(QUIZ_ACTION_TYPES.SET_QUESTION_NUMBER, setQuestionsNumber);
// }

export function* quizSaga() {
  yield* all([]);
}
