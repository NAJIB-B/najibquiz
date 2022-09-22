import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
  User,
  onAuthStateChanged,
  signOut,
  NextOrObserver,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { generatePassword } from "./helper";
import { QuizObject } from "../store/quiz/quiz.reducer";

const firebaseConfig = {
  apiKey: "AIzaSyBpkwaI02ylEJU63fP1YWi1gdg2uaLCQZ8",
  authDomain: "najibquiz.firebaseapp.com",
  projectId: "najibquiz",
  storageBucket: "najibquiz.appspot.com",
  messagingSenderId: "939128025338",
  appId: "1:939128025338:web:d807e841cef228f1c65943",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGooglepopup = (): Promise<UserCredential> => {
  return signInWithPopup(auth, googleProvider);
};
export const db = getFirestore();

export const signOutUser = () => {
  signOut(auth);
};

export type AdditionalInformation = {
  displayName?: string;
};

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
};

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation = {} as AdditionalInformation
): Promise<void | QueryDocumentSnapshot<UserData>> => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  // if user data does not exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    const quiz = {};
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        quiz,
        ...additionalInformation,
      });
    } catch (error) {
      console.log(`error creating user ${error}`);
    }
  }
  // if user data exist
  return userSnapshot as QueryDocumentSnapshot<UserData>;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<UserCredential | undefined> => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = (
  email: string,
  password: string
) => {
  return signInWithEmailAndPassword(auth, email, password);
};
export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscibe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscibe();
        resolve(userAuth);
      },
      reject
    );
  });
};

type Data = {
  name: string;
};

// const addData = async () => {
//   const userdocref = doc(db, "quizes", "12345678");

//   const usersnapshot = await getDoc(userdocref);

//   try {
//     if (usersnapshot.exists()) {
//       setDoc(userdocref, { name: "najib" });
//     }
//   } catch (error) {
//     console.log(error);
//   }
//   return userdocref;
// };

export const uploadABatchOfQuizQuestions = async (quiz: QuizObject) => {
  const id = generatePassword();
  console.log(id);
  const userDocRef = doc(db, "AllQuiz", id);

  const userSnapshot = await getDoc(userDocRef);
  try {
    if (!userSnapshot.exists()) {
      setDoc(userDocRef, quiz);
    }
  } catch (error) {
    console.log(error);
  }
  return userSnapshot as QueryDocumentSnapshot<QuizObject>;
};

export type QuizFormat = {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  answer: string;
};
