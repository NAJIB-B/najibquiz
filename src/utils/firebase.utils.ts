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
  DocumentSnapshot,
} from "firebase/firestore";
import { generatePassword } from "./helper";
import { QuizObject, QuizMainObject } from "../store/quiz/quiz.reducer";
import { StringLiteralLike } from "typescript";
import { QuizResultFormat } from "../store/quizRoom/quizRoom.reducer";

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
export type InnerQuizData = {
  name: string;
  score: number;
};
export type QuizData = {
  [key: string]: InnerQuizData;
};
export type InnerUserQuiz = {
  id: string;
  quizName: string;
  quizData?: QuizData;
};
export type UserQuiz = {
  [key: string]: InnerUserQuiz;
};

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
  quiz?: UserQuiz;
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

export const uploadABatchOfQuizQuestions = async (quiz: QuizMainObject) => {
  const id = quiz.id;
  const quizDocRef = doc(db, "AllQuiz", id);

  const quizSnapshot = await getDoc(quizDocRef);
  try {
    if (!quizSnapshot.exists()) {
      setDoc(quizDocRef, quiz);
    }
  } catch (error) {
    console.log(error);
  }
  return quizSnapshot as QueryDocumentSnapshot<QuizMainObject>;
};

export type UserQuizObject = {
  id: string;
  quizName: string;
  quizOwner: string | null;
};
export const uploadQuizToUserDataBase = async (quiz: UserQuizObject) => {
  const { id, quizName, quizOwner } = quiz;
  if (!quizOwner) return;
  const userDocRef = doc(db, "users", quizOwner);
  const data = {
    quiz: {
      [id]: { id, quizName },
    },
  };
  console.log(data);
  try {
    await setDoc(userDocRef, data, { merge: true });
  } catch (error) {
    console.log(error);
  }
};

export const getAQuizFromDb = async (quizId: string) => {
  const quizDocRef = doc(db, "AllQuiz", quizId);
  const quizSnapshot = await getDoc(quizDocRef);
  return quizSnapshot as DocumentSnapshot<QuizMainObject>;
};

export const uploadQuizResultToOwner = async (quiz: QuizResultFormat) => {
  const { quizOwner, name, score, quizId } = quiz;
  const userDocRef = doc(db, "users", quizOwner);
  if (name) {
    const data = {
      quiz: {
        [quizId]: { quizData: { [name]: { name, score } } },
      },
    };
    try {
      await setDoc(userDocRef, data, { merge: true });
    } catch (error) {
      console.log(error);
    }
  }
};

export const getPorfileQuizData = async (uid: string) => {
  const userDocRef = doc(db, "users", uid);
  const userSnapshot = await getDoc(userDocRef);

  return userSnapshot as DocumentSnapshot<UserData>;
};

export type QuizFormat = {
  questionNumber: string;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  answer: string;
};
export type EditableQuizFormat = {
  questionNumber?: string;
  question?: string;
  option1?: string;
  option2?: string;
  option3?: string;
  option4?: string;
  answer?: string;
  checked?: string;
  questionArrayNumber?: number;
};
