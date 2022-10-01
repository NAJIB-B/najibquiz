import { takeLatest, put, all, call } from "typed-redux-saga/macro";
import { QUIZ_ACTION_TYPES } from "./quiz.types";
import {
  quizSuccessfullyCreated,
  SetQuestionNumber,
  setQuestionNumber,
  setQuizId,
  UploadQuizQuestionStart,
  uploadQuizQuestionSuccess,
} from "./quiz.action";
import { generatePassword } from "../../utils/helper";
import {
  uploadABatchOfQuizQuestions,
  uploadQuizToUserDataBase,
} from "../../utils/firebase.utils";

export function* uploadQuestions({ payload }: UploadQuizQuestionStart) {
  const { id, quizName, quizOwner } = payload;
  const quiz = { id, quizName, quizOwner };
  try {
    const uploadedQuiz = yield* call(uploadABatchOfQuizQuestions, payload);
    yield* put(setQuizId(id));
    yield* call(uploadQuizToUserDataBase, quiz);
    yield* put(uploadQuizQuestionSuccess());
    yield* put(quizSuccessfullyCreated());
  } catch (error) {
    alert("something went wrong please refresh and try again");
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
