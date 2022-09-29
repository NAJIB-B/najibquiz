import { takeLatest, put, all, call } from "typed-redux-saga/macro";
import { getPorfileQuizData } from "../../utils/firebase.utils";
import {
  GetProfileQuizDataStart,
  getProfileQuizDataSuccess,
} from "./profile.action";

import { USER_PROFILE_TYPES } from "./profile.types";

export function* getProfileQuizDataInSaga({
  payload,
}: GetProfileQuizDataStart) {
  try {
    const user = yield* call(getPorfileQuizData, payload);
    console.log(user.data()?.quiz);
    yield* put(getProfileQuizDataSuccess("yes"));
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
