import { all, call } from "typed-redux-saga/macro";
import { userSaga } from "./user/user-saga";
import { quizSaga } from "./quiz/quiz-saga";

export function* rootSaga() {
  yield* all([call(userSaga), call(quizSaga)]);
}
