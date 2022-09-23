import { QUIZ_ACTION_TYPES } from "./quiz.types";
import { QuizObject , QuizMainObject} from "./quiz.reducer";
import {
  createAction,
  ActionWithPayload,
  withMatcher,
  Action,
} from "../../utils/reducer.util";

export type SetQuestionNumber = ActionWithPayload<
  QUIZ_ACTION_TYPES.SET_QUESTION_NUMBER,
  number
>;

export type SetQuizName = ActionWithPayload<
  QUIZ_ACTION_TYPES.SET_QUIZ_NAME,
  string
>;
export type AddQuestionToQuiz = ActionWithPayload<
  QUIZ_ACTION_TYPES.ADD_TO_QUIZ,
  QuizObject
>;
export type FinishSettingQuestion = ActionWithPayload<
  QUIZ_ACTION_TYPES.FINISH_SETTING_QUESTION,
  boolean
>;
export type UploadQuizQuestionStart = ActionWithPayload<
  QUIZ_ACTION_TYPES.UPLOAD_QUIZ_QUESTIONS_START,
  QuizMainObject
>;
export type UploadQuizQuestionSuccess =
  Action<QUIZ_ACTION_TYPES.UPLOAD_QUIZ_QUESTIONS_SUCCESS>;

export const setQuestionNumber = withMatcher(
  (value: number): SetQuestionNumber => {
    return createAction(QUIZ_ACTION_TYPES.SET_QUESTION_NUMBER, value);
  }
);

export const setQuizName = withMatcher((value: string): SetQuizName => {
  return createAction(QUIZ_ACTION_TYPES.SET_QUIZ_NAME, value);
});

export const addQuestionToQuiz = withMatcher(
  (value: QuizObject): AddQuestionToQuiz => {
    return createAction(QUIZ_ACTION_TYPES.ADD_TO_QUIZ, value);
  }
);

export const finishSettingQuestion = withMatcher(
  (value: boolean): FinishSettingQuestion => {
    return createAction(QUIZ_ACTION_TYPES.FINISH_SETTING_QUESTION, value);
  }
);

export const uploadQuizQuestionStart = withMatcher(
  (value: QuizMainObject): UploadQuizQuestionStart => {
    return createAction(QUIZ_ACTION_TYPES.UPLOAD_QUIZ_QUESTIONS_START, value);
  }
);

export const uploadQuizQuestionSuccess = withMatcher(
  (): UploadQuizQuestionSuccess => {
    return createAction(QUIZ_ACTION_TYPES.UPLOAD_QUIZ_QUESTIONS_SUCCESS);
  }
);
