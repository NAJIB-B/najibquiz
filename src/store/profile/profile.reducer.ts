import { AnyAction } from "redux";
import { QuizFormat } from "../../utils/firebase.utils";
import {
  getProfileQuizDataStart,
  getProfileQuizDataSuccess,
} from "./profile.action";

export type QuizState = {
  readonly isLoading: boolean;
};
const INITIAL_STATE: QuizState = {
  isLoading: false,
};

export const profileReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (getProfileQuizDataStart.match(action)) {
    return { ...state, isLoading: true };
  }
  if (getProfileQuizDataSuccess.match(action)) {
    return { ...state, isLoading: false };
  }
  return state;
};
