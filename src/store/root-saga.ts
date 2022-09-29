import { all, call } from "typed-redux-saga/macro";
import { userSaga } from "./user/user-saga";
import { quizSaga } from "./quiz/quiz-saga";
import { quizRoomSaga } from "./quizRoom/quizRoom-saga";
import { profileSaga } from "./profile/profile-saga";

export function* rootSaga() {
  yield* all([
    call(userSaga),
    call(quizSaga),
    call(quizRoomSaga),
    call(profileSaga),
  ]);
}
