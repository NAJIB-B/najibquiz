import {
  ActionWithPayload,
  createAction,
  Action,
  withMatcher,
} from "../../utils/reducer.util";
import { QUIZ_ROOM_TYPES } from "./quizRoom.types";
import { QuizResultFormat } from "./quizRoom.reducer";
import { QuizFormat, EditableQuizFormat } from "../../utils/firebase.utils";

export type SetQuizTakerName = ActionWithPayload<
  QUIZ_ROOM_TYPES.SET_QUIZ_TAKER_NAME,
  string
>;

export const setQuizTakerName = withMatcher((value: string) => {
  return createAction(QUIZ_ROOM_TYPES.SET_QUIZ_TAKER_NAME, value);
});

export type SetCheckedValueInEditableArray = ActionWithPayload<
  QUIZ_ROOM_TYPES.EDIT_QUESTION_ARRAY_FOR_CHECKING_ANSWER,
  EditableQuizFormat
>;

export const setCheckedValueInEditableArray = withMatcher(
  (value: EditableQuizFormat): SetCheckedValueInEditableArray => {
    return createAction(
      QUIZ_ROOM_TYPES.EDIT_QUESTION_ARRAY_FOR_CHECKING_ANSWER,
      value
    );
  }
);
export type SetOriginalQuestionArray = ActionWithPayload<
  QUIZ_ROOM_TYPES.SET_ORIGINAL_ARRAY,
  QuizFormat[]
>;

export const setOriginalQuestionArray = withMatcher(
  (value: QuizFormat[]): SetOriginalQuestionArray => {
    return createAction(QUIZ_ROOM_TYPES.SET_ORIGINAL_ARRAY, value);
  }
);
export type AddCurrentArrayNumber =
  Action<QUIZ_ROOM_TYPES.ADD_CURRENT_ARRAY_NUMBER>;

export const addCurrentArrayNumber = withMatcher((): AddCurrentArrayNumber => {
  return createAction(QUIZ_ROOM_TYPES.ADD_CURRENT_ARRAY_NUMBER);
});
export type ReduceCurrentArrayNumber =
  Action<QUIZ_ROOM_TYPES.REDUCE_CURRENT_ARRAY_NUMBER>;

export const reduceCurrentArrayNumber = withMatcher(
  (): ReduceCurrentArrayNumber => {
    return createAction(QUIZ_ROOM_TYPES.REDUCE_CURRENT_ARRAY_NUMBER);
  }
);
export type SetCheckedValue = ActionWithPayload<
  QUIZ_ROOM_TYPES.SET_CHECKED_VALUE,
  string
>;

export const setCheckedValue = withMatcher((value: string): SetCheckedValue => {
  return createAction(QUIZ_ROOM_TYPES.SET_CHECKED_VALUE, value);
});
export type SetQuizOwner = ActionWithPayload<
  QUIZ_ROOM_TYPES.SET_QUIZ_OWNER,
  string
>;

export const setQuizOwner = withMatcher((value: string): SetQuizOwner => {
  return createAction(QUIZ_ROOM_TYPES.SET_QUIZ_OWNER, value);
});
export type SetQuizId = ActionWithPayload<QUIZ_ROOM_TYPES.SET_QUIZ_ID, string>;

export const setQuizId = withMatcher((value: string): SetQuizId => {
  return createAction(QUIZ_ROOM_TYPES.SET_QUIZ_ID, value);
});

export type GetQuestionsFromDbStart = ActionWithPayload<
  QUIZ_ROOM_TYPES.GET_QUESTIONS_FROM_DB_START,
  string
>;

export const getQuestionsFromDbStart = withMatcher(
  (value: string): GetQuestionsFromDbStart => {
    return createAction(QUIZ_ROOM_TYPES.GET_QUESTIONS_FROM_DB_START, value);
  }
);

export type GetQuestionsFromDbSuccess =
  Action<QUIZ_ROOM_TYPES.GET_QUESTIONS_FROM_DB_SUCCESS>;

export const getQuestionsFromDbSuccess = withMatcher(
  (): GetQuestionsFromDbSuccess => {
    return createAction(QUIZ_ROOM_TYPES.GET_QUESTIONS_FROM_DB_SUCCESS);
  }
);

export type GetQuestionsFromDbFailed = ActionWithPayload<
  QUIZ_ROOM_TYPES.GET_QUESTIONS_FROM_DB_FAILED,
  Error
>;

export const getQuestionsFromDbFailed = withMatcher(
  (error: Error): GetQuestionsFromDbFailed => {
    return createAction(QUIZ_ROOM_TYPES.GET_QUESTIONS_FROM_DB_FAILED, error);
  }
);

export type UploadQuizResultToOwnerDbStart = ActionWithPayload<
  QUIZ_ROOM_TYPES.UPLOAD_QUIZ_RESULT_TO_OWNER_DB_START,
  QuizResultFormat
>;

export const uploadQuizResultToOwnerDbStart = withMatcher((
  value: QuizResultFormat
): UploadQuizResultToOwnerDbStart => {
  return createAction(
    QUIZ_ROOM_TYPES.UPLOAD_QUIZ_RESULT_TO_OWNER_DB_START,
    value
  );
});

export type UploadQuizResultToOwnerDbSuccess =
  Action<QUIZ_ROOM_TYPES.UPLOAD_QUIZ_RESULT_TO_OWNER_DB_SUCCESS>;

export const uploadQuizResultToOwnerDbSuccess =withMatcher(
  (): UploadQuizResultToOwnerDbSuccess => {
    return createAction(QUIZ_ROOM_TYPES.UPLOAD_QUIZ_RESULT_TO_OWNER_DB_SUCCESS);
  });

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
  export type ResetQuizRoom = Action<
    QUIZ_ROOM_TYPES.RESET_QUIZ_ROOM_STATE
  >;
export const resetQuizRoom =withMatcher( (
): ResetQuizRoom => {
  return createAction(
    QUIZ_ROOM_TYPES.RESET_QUIZ_ROOM_STATE
    
  );
});
