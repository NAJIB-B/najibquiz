import { UserQuiz } from "../../utils/firebase.utils";
import {
  Action,
  ActionWithPayload,
  createAction,
  withMatcher,
} from "../../utils/reducer.util";
import { USER_PROFILE_TYPES } from "./profile.types";

export type GetProfileQuizDataStart = ActionWithPayload<
  USER_PROFILE_TYPES.GET_USER_PROFILE_QUIZ_DATA_START,
  string
>;
export const getProfileQuizDataStart = withMatcher(
  (uid: string): GetProfileQuizDataStart => {
    return createAction(
      USER_PROFILE_TYPES.GET_USER_PROFILE_QUIZ_DATA_START,
      uid
    );
  }
);
export type GetProfileQuizDataSuccess =
  Action<USER_PROFILE_TYPES.GET_USER_PROFILE_QUIZ_DATA_SUCCESS>;
export const getProfileQuizDataSuccess = withMatcher(
  (): GetProfileQuizDataSuccess => {
    return createAction(USER_PROFILE_TYPES.GET_USER_PROFILE_QUIZ_DATA_SUCCESS);
  }
);
export type GetProfileQuizDataFailed = ActionWithPayload<
  USER_PROFILE_TYPES.GET_USER_PROFILE_QUIZ_DATA_FAILED,
  Error
>;
export const getProfileQuizDataFailed = withMatcher(
  (error: Error): GetProfileQuizDataFailed => {
    return createAction(
      USER_PROFILE_TYPES.GET_USER_PROFILE_QUIZ_DATA_FAILED,
      error
    );
  }
);
export type SetQuiz = ActionWithPayload<
  USER_PROFILE_TYPES.SET_MAIN_OBJECT,
  UserQuiz
>;
export const setQuiz = withMatcher((value: UserQuiz): SetQuiz => {
  return createAction(USER_PROFILE_TYPES.SET_MAIN_OBJECT, value);
});
