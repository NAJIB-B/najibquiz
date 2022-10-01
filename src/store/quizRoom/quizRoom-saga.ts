import { takeLatest, put, all, call } from "typed-redux-saga/macro";
import {
  getAQuizFromDb,
  uploadQuizResultToOwner,
} from "../../utils/firebase.utils";
import { QUIZ_ROOM_TYPES } from "./quizRoom.types";
import {
  GetQuestionsFromDbStart,
  setOriginalQuestionArray,
  getQuestionsFromDbSuccess,
  UploadQuizResultToOwnerDbStart,
  setQuizId,
  setQuizOwner,
  uploadQuizResultToOwnerDbSuccess,
} from "./quizRoom.action";

export function* getQuestionsFromDbStart({ payload }: GetQuestionsFromDbStart) {
  try {
    const rawQuizFromDb = yield* call(getAQuizFromDb, payload);
    const id = rawQuizFromDb.data()?.id;
    const quizData = rawQuizFromDb.data()?.quizData;
    const quizName = rawQuizFromDb.data()?.quizName;
    const quizOwner = rawQuizFromDb.data()?.quizOwner;
    if (id) {
      yield* put(setQuizId(id));
    }
    if (quizOwner) {
      yield* put(setQuizOwner(quizOwner));
    }
    if (quizData) {
      const entries = Object.entries(quizData);
      const sortedData = entries.map((item) => item[1]);

      yield* put(setOriginalQuestionArray(sortedData));
      yield* put(getQuestionsFromDbSuccess());
    }
  } catch (error) {
    console.log(error);
    alert("please check your connection and try again");
  }
}
export function* uploadQuizResultToOwnerDb({
  payload,
}: UploadQuizResultToOwnerDbStart) {
  try {
    yield* call(uploadQuizResultToOwner, payload);
    yield* put(uploadQuizResultToOwnerDbSuccess());
  } catch (error) {
    alert("please check your connection and try again");
  }
}
export function* onGetQuestionsFromDbStart() {
  yield* takeLatest(
    QUIZ_ROOM_TYPES.GET_QUESTIONS_FROM_DB_START,
    getQuestionsFromDbStart
  );
}

export function* onUploadQuizResultToOwnerDbStart() {
  yield* takeLatest(
    QUIZ_ROOM_TYPES.UPLOAD_QUIZ_RESULT_TO_OWNER_DB_START,
    uploadQuizResultToOwnerDb
  );
}
export function* quizRoomSaga() {
  yield* all([
    call(onGetQuestionsFromDbStart),
    call(onUploadQuizResultToOwnerDbStart),
  ]);
}
