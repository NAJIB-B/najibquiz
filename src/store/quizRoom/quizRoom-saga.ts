import { takeLatest, put, all, call } from "typed-redux-saga/macro";
import { getAQuizFromDb } from "../../utils/firebase.utils";
import { QUIZ_ROOM_TYPES } from "./quizRoom.types";
import {
  GetQuestionsFromDbStart,
  setOriginalQuestionArray,
  getQuestionsFromDbSuccess,
} from "./quizRoom.action";

export function* getQuestionsFromDbStart({ payload }: GetQuestionsFromDbStart) {
  const rawQuizFromDb = yield* call(getAQuizFromDb, payload);
  const id = rawQuizFromDb.data()?.id;
  const quizData = rawQuizFromDb.data()?.quizData;
  const quizName = rawQuizFromDb.data()?.quizName;
  const quizOwner = rawQuizFromDb.data()?.quizOwner;
  try {
    if (quizData) {
      const entries = Object.entries(quizData);
      const sortedData = entries.map((item) => item[1]);

      yield* put(setOriginalQuestionArray(sortedData));
      yield* put(getQuestionsFromDbSuccess())
    }
  } catch (error) {
    console.log(error);
  }
}
export function* onGetQuestionsFromDbStart() {
  yield* takeLatest(
    QUIZ_ROOM_TYPES.GET_QUESTIONS_FROM_DB_START,
    getQuestionsFromDbStart
  );
}

export function* quizRoomSaga() {
  yield* all([call(onGetQuestionsFromDbStart)]);
}
