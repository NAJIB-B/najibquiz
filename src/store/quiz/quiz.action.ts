import { QUIZ_ACTION_TYPES } from "./quiz.types";
import {
  createAction,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducer.util";

export type SetQuestionNumber = ActionWithPayload<
  QUIZ_ACTION_TYPES.SET_QUESTION_NUMBER,
  {value:number}
>;

export const setQuestionNumber = withMatcher(
  (value: number): SetQuestionNumber => {
    return createAction(QUIZ_ACTION_TYPES.SET_QUESTION_NUMBER, { value });
  }
);
