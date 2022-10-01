import { takeLatest, put, all, call } from "typed-redux-saga/macro";
import { getPorfileQuizData } from "../../utils/firebase.utils";
import {
  GetProfileQuizDataStart,
  getProfileQuizDataSuccess,
  setQuiz,
} from "./profile.action";

import { USER_PROFILE_TYPES } from "./profile.types";

export function* getProfileQuizDataInSaga({
  payload,
}: GetProfileQuizDataStart) {
  try {
    const user = yield* call(getPorfileQuizData, payload);
    const mainObject = user.data()?.quiz;
    console.log(mainObject);
    yield* put(getProfileQuizDataSuccess());
    if (mainObject) {
      yield* put(setQuiz(mainObject));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* onGetProfileQuizDataStart() {
  yield* takeLatest(
    USER_PROFILE_TYPES.GET_USER_PROFILE_QUIZ_DATA_START,
    getProfileQuizDataInSaga
  );
}

export function* profileSaga() {
  yield* all([call(onGetProfileQuizDataStart)]);
}
