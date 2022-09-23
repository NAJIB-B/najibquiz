import { takeLatest, put, all, call } from "typed-redux-saga/macro";
import { QUIZ_ACTION_TYPES } from "./quiz.types";
import {
  SetQuestionNumber,
  setQuestionNumber,
  UploadQuizQuestionStart,
  uploadQuizQuestionSuccess,
} from "./quiz.action";
import { generatePassword } from "../../utils/helper";
import { uploadABatchOfQuizQuestions } from "../../utils/firebase.utils";

export function* uploadQuestions({ payload }: UploadQuizQuestionStart) {
  try {
    const uploadedQuiz = yield* call(uploadABatchOfQuizQuestions, payload);
    yield* put(uploadQuizQuestionSuccess);
  } catch (error) {
    console.log(error);
  }
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
