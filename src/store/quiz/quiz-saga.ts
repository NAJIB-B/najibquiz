import { takeLatest, put, all, call } from "typed-redux-saga/macro";
import { QUIZ_ACTION_TYPES } from "./quiz.types";
import {
  SetQuestionNumber,
  setQuestionNumber,
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
    console.log(quiz);
    yield* call(uploadQuizToUserDataBase, quiz);
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
// type People={
// name:string;
// age:number;
// height:string;
// }
// const peopleArray:People[] = [{
//   name: "john doe",
//   age: 16,
//   height: "1.7m"
// },
// {
//   name: "mohn moe",
//   age: 18,
//   height: "1.9m"
// }]
