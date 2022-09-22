import { takeLatest, put, all, call } from "typed-redux-saga/macro";
import { QUIZ_ACTION_TYPES } from "./quiz.types";
import {
  SetQuestionNumber,
  setQuestionNumber,
  UploadQuizQuestionStart,
  uploadQuizQuestionSuccess,
} from "./quiz.action";
import { uploadABatchOfQuizQuestions } from "../../utils/firebase.utils";

export function* uploadQuestions({ payload }: UploadQuizQuestionStart) {
  const uploadedQuiz = yield* call(uploadABatchOfQuizQuestions, payload);
  console.log(uploadedQuiz);
  //   try {
  //     yield* put(uploadQuizQuestionSuccess);
  //   } catch (error) {
  //     console.log(error)
  //   }
}

export function* onUploadQuizQuestionStart() {
  yield* takeLatest(
    QUIZ_ACTION_TYPES.UPLOAD_QUIZ_QUESTIONS_START,
    uploadQuestions
  );
}

export function* quizSaga() {
  yield* all([call(onUploadQuizQuestionStart)]);
}
