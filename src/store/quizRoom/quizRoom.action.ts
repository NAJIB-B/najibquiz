import {
  ActionWithPayload,
  createAction,
  Action,
  withMatcher,
} from "../../utils/reducer.util";
import { QUIZ_ROOM_TYPES } from "./quizRoom.types";
import { QuizResultFormat } from "./quizRoom.reducer";
import { QuizFormat } from "../../utils/firebase.utils";

export type SetQuizTakerName = ActionWithPayload<QUIZ_ROOM_TYPES.SET_QUIZ_TAKER_NAME, string>

export const setQuizTakerName = withMatcher((value:string)=>{
    return createAction(QUIZ_ROOM_TYPES.SET_QUIZ_TAKER_NAME, value)
})

export type SetCheckedValueInEditableArray = ActionWithPayload<
  QUIZ_ROOM_TYPES.EDIT_QUESTION_ARRAY_FOR_CHECKING_ANSWER,
  QuizFormat
>;

export const setCheckedValueInEditableArray = withMatcher((
  value: QuizFormat & {checked:string} & {questionArrayNumber:string}
): SetCheckedValueInEditableArray => {
  return createAction(
    QUIZ_ROOM_TYPES.EDIT_QUESTION_ARRAY_FOR_CHECKING_ANSWER,
    value
  );
});
export type SetOriginalQuestionArray = ActionWithPayload<
  QUIZ_ROOM_TYPES.SET_ORIGINAL_ARRAY,
  QuizFormat[]
>;

export const setOriginalQuestionArray =withMatcher( (
  value: QuizFormat[]
): SetOriginalQuestionArray => {
  return createAction(QUIZ_ROOM_TYPES.SET_ORIGINAL_ARRAY, value);
});

export type GetQuestionsFromDbStart =
  Action<QUIZ_ROOM_TYPES.GET_QUESTIONS_FROM_DB_START>;

export const getQuestionsFromDbStart = (): GetQuestionsFromDbStart => {
  return createAction(QUIZ_ROOM_TYPES.GET_QUESTIONS_FROM_DB_START);
};

export type GetQuestionsFromDbSuccess =
  Action<QUIZ_ROOM_TYPES.GET_QUESTIONS_FROM_DB_SUCCESS>;

export const getQuestionsFromDbSuccess = (): GetQuestionsFromDbSuccess => {
  return createAction(QUIZ_ROOM_TYPES.GET_QUESTIONS_FROM_DB_SUCCESS);
};

export type GetQuestionsFromDbFailed = ActionWithPayload<
  QUIZ_ROOM_TYPES.GET_QUESTIONS_FROM_DB_FAILED,
  Error
>;

export const getQuestionsFromDbFailed =withMatcher( (
  error: Error
): GetQuestionsFromDbFailed => {
  return createAction(QUIZ_ROOM_TYPES.GET_QUESTIONS_FROM_DB_FAILED, error);
});

export type UploadQuizResultToOwnerDbStart = ActionWithPayload<
  QUIZ_ROOM_TYPES.UPLOAD_QUIZ_RESULT_TO_OWNER_DB_START,
  QuizResultFormat
>;

export const uploadQuizResultToOwnerDbStart = (
  value: QuizResultFormat
): UploadQuizResultToOwnerDbStart => {
  return createAction(
    QUIZ_ROOM_TYPES.UPLOAD_QUIZ_RESULT_TO_OWNER_DB_START,
    value
  );
};

export type UploadQuizResultToOwnerDbSuccess =
  Action<QUIZ_ROOM_TYPES.UPLOAD_QUIZ_RESULT_TO_OWNER_DB_SUCCESS>;

export const uploadQuizResultToOwnerDbSuccess =
  (): UploadQuizResultToOwnerDbSuccess => {
    return createAction(QUIZ_ROOM_TYPES.UPLOAD_QUIZ_RESULT_TO_OWNER_DB_SUCCESS);
  };

export type UploadQuizResultToOwnerDbFailed = ActionWithPayload<
  QUIZ_ROOM_TYPES.UPLOAD_QUIZ_RESULT_TO_OWNER_DB_FAILED,
  Error
>;

export const uploadQuizResultToOwnerDbFailed = (
  error: Error
): UploadQuizResultToOwnerDbFailed => {
  return createAction(
    QUIZ_ROOM_TYPES.UPLOAD_QUIZ_RESULT_TO_OWNER_DB_FAILED,
    error
  );
};

// export enum QUIZ_ROOM_TYPES {
//     CURRENT_QUESTION = "CURRENT_QUESTION",
//     EDIT_QUESTION_ARRAY_FOR_CHECKING_ANSWER = "QUESTION_ARRAY_FOR_CHECKING_ANSWER",
//     SET_ORIGINAL_ARRAY = "SET_ORIGINAL_ARRAY",
//     SET_QUIZ_FINAL_SCORE = "SET_QUIZ_FINAL_SCORE",
//     GET_QUESTIONS_FROM_DB_START = "GET_QUESTIONS_FROM_DB_START",
//     GET_QUESTIONS_FROM_DB_SUCCESS = "GET_QUESTIONS_FROM_DB_SUCCESS",
//     GET_QUESTIONS_FROM_DB_FAILED = "GET_QUESTIONS_FROM_DB_FAILED",
//     UPLOAD_QUIZ_RESULT_TO_OWNER_DB_START = "UPLOAD_QUIZ_RESULT_TO_OWNER_DB_START",
//     UPLOAD_QUIZ_RESULT_TO_OWNER_DB_SUCCESS = "UPLOAD_QUIZ_RESULT_TO_OWNER_DB_SUCCESS",
//     UPLOAD_QUIZ_RESULT_TO_OWNER_DB_FAILED = "UPLOAD_QUIZ_RESULT_TO_OWNER_DB_FAILED",
//   }
