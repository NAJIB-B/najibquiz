import { UserData } from "../../utils/firebase.utils";
import {
  signUpFailed,
  signInFailed,
  signOutFailed,
  signOutSuccess,
  signInSuccess,
  userUid,
  setBackToHome,
} from "./user.action";
import { AnyAction } from "redux";
export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: Boolean;
  readonly error: Error | null;
  readonly userUid: string | null;
  readonly backToHome: boolean;
};
const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
  userUid: null,
  backToHome:false,
};

export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (signInSuccess.match(action)) {
    return {
      ...state,
      currentUser: action.payload,
    };
  }
  if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null };
  }
  if (setBackToHome.match(action)) {
    return { ...state, backToHome: action.payload };
  }
  if (userUid.match(action)) {
    return { ...state, userUid: action.payload };
  }
  if (
    signInFailed.match(action) ||
    signOutFailed.match(action) ||
    signUpFailed.match(action)
  ) {
    return {
      ...state,
      error: action.payload,
    };
  }

  return state;
};
