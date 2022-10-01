import { AnyAction } from "redux";
import { QuizFormat, UserQuiz } from "../../utils/firebase.utils";
import {
  getProfileQuizDataStart,
  getProfileQuizDataSuccess,
  setQuiz,
} from "./profile.action";

export type QuizState = {
  readonly isLoading: boolean;
  readonly quiz: UserQuiz;
};
const INITIAL_STATE: QuizState = {
  isLoading: false,
  quiz: {},
};

export const profileReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (getProfileQuizDataStart.match(action)) {
    return { ...state, isLoading: true };
  }
  if (getProfileQuizDataSuccess.match(action)) {
    return { ...state, isLoading: false };
  }
  if (setQuiz.match(action)) {
    return { ...state, quiz: action.payload };
  }
  return state;
};
