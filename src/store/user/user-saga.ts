import { takeLatest, put, all, call } from "typed-redux-saga/macro";
import { User } from "firebase/auth";
import { USER_ACTION_TYPES } from "./user.types";
import { AuthErrorCodes, AuthError } from "firebase/auth";
import {
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
  signUpSuccess,
  EmailSignInStart,
  SignUpStart,
  SignUpSuccess,
  userUid,
  setBackToHome,
  setisLoading,
} from "./user.action";

import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglepopup,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signOutUser,
  AdditionalInformation,
} from "../../utils/firebase.utils";

export function* getSnapshotFromUserAuth(
  userAuth: User,
  additionalDetails?: AdditionalInformation
) {
  try {
    const userSnapshot = yield* call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails
    );
    if (userSnapshot) {
      console.log(userSnapshot.data());
      yield* put(
        signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
      );

      yield* put(setBackToHome(true));
    }
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}
export function* signInWithGoogle() {
  try {
    const { user } = yield* call(signInWithGooglepopup);
    yield* call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signInWithEmail({
  payload: { email, password },
}: EmailSignInStart) {
  try {
    const userCredential = yield* call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );
    if (userCredential) {
      const { user } = userCredential;

      yield* call(getSnapshotFromUserAuth, user);
    }
  } catch (error) {
    if (AuthErrorCodes.EMAIL_EXISTS) {
      alert("cannot create user, email already in use");
    }
    switch ((error as AuthError).code) {
      case AuthErrorCodes.INVALID_PASSWORD:
        alert("incorrect password for email");
        break;
      case AuthErrorCodes.USER_DELETED:
        alert("no user associated with this email");
        break;

      default:
        console.error(`shit${error} tttt`);
    }
    yield* put(signInFailed(error as Error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser);

    if (!userAuth) return;

    yield put(userUid(userAuth.uid));
    yield* call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield* put(signInFailed(error as Error));
    alert(
      "something went wrong please check your connection refresh and try again"
    );
  }
}

export function* signUp({
  payload: { email, password, displayName },
}: SignUpStart) {
  try {
    const userCredential = yield* call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );

    if (userCredential) {
      const { user } = userCredential;
      yield* put(signUpSuccess(user, { displayName }));
      // yield* put(setBackToHome(true))
    }
  } catch (error) {
    if (AuthErrorCodes.EMAIL_EXISTS) {
      alert("cannot create user, email already in use");
    }
    switch ((error as AuthError).code) {
      case AuthErrorCodes.INVALID_PASSWORD:
        alert("incorrect password for email");
        break;
      case AuthErrorCodes.USER_DELETED:
        alert("no user associated with this email");
        break;

      default:
        console.error(`shit${error} tttt`);
    }
    yield* put(signUpFailed(error as Error));
  }
}
export function* signInAfterSignUp({
  payload: { user, additionalDetails },
}: SignUpSuccess) {
  try {
    yield* call(getSnapshotFromUserAuth, user, additionalDetails);
  } catch (error) {
    yield* put(signUpFailed(error as Error));
  }
}

export function* signOut() {
  try {
    yield* call(signOutUser);
    yield* put(signOutSuccess());
  } catch (error) {
    yield* put(signOutFailed);
  }
}

export function* onCheckUserSession() {
  yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onEmailSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}
export function* onSignUpStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}
export function* onSignUpSuccess() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}
export function* onGoogleSignIn() {
  yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}
export function* onSignOutStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}
export function* userSaga() {
  yield* all([
    call(onCheckUserSession),
    call(onGoogleSignIn),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
