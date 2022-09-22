import { takeLatest, put, all, call } from "typed-redux-saga/macro";
import { QUIZ_ACTION_TYPES } from "./quiz.types";
import { SetQuestionNumber, setQuestionNumber, UploadQuizQuestionStart } from "./quiz.action";

// export function* uploadQuestions({ payload }: UploadQuizQuestionStart) {
//   try {
//     yield* put(setQuestionNumber(value));
//   } catch (error) {}
// }

// export function* onUploadQuizQuestionStart() {
//   yield* takeLatest(QUIZ_ACTION_TYPES.UPLOAD_QUIZ_QUESTIONS_START, uploadQuestions);
// }

export function* quizSaga() {
  yield* all([]);
}
