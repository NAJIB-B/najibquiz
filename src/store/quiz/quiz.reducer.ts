import { AnyAction } from "redux";
import { QuizFormat } from "../../utils/firebase.utils";
import {
  setQuestionNumber,
  setQuizName,
  addQuestionToQuiz,
  finishSettingQuestion,
  uploadQuizQuestionStart,
  uploadQuizQuestionSuccess,
  quizSuccessfullyCreated,
  closeModal,
  setQuizId,
} from "./quiz.action";
export type QuizObject = {
  [key: string]: QuizFormat;
};
export type QuizMainObject = {
  id: string;
  quizName: string;
  quizOwner: string | null;
  quizData: QuizObject;
};

export type QuizState = {
  readonly numberOfQuestions: number;
  readonly quizName: string;
  readonly questionCount: number;
  readonly error: Error | null;
  readonly quiz: QuizObject;
  readonly finishSettingQuestion: boolean;
  readonly isLoading: boolean;
  readonly quizSuccess: boolean;
  readonly quizId: string;
  readonly totalQuestions: number;
};
const INITIAL_STATE: QuizState = {
  numberOfQuestions: 0,
  quizName: "",
  questionCount: 1,
  error: null,
  quiz: {},
  finishSettingQuestion: false,
  isLoading: false,
  quizSuccess: false,
  quizId: "",
  totalQuestions:0,
};

export const quizReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (setQuestionNumber.match(action)) {
    return { ...state, numberOfQuestions: action.payload ,totalQuestions:action.payload };
  }
  if (setQuizName.match(action)) {
    return { ...state, quizName: action.payload };
  }
  if (setQuizName.match(action)) {
    return { ...state, quizName: action.payload };
  }
  if (setQuizId.match(action)) {
    return { ...state, quizId: action.payload };
  }
  if (finishSettingQuestion.match(action)) {
    return { ...state, finishSettingQuestion: action.payload };
  }
  if (uploadQuizQuestionStart.match(action)) {
    return { ...state, isLoading: true };
  }
  if (uploadQuizQuestionSuccess.match(action)) {
    return { ...state, isLoading: false };
  }
  if (closeModal.match(action)) {
    return { ...state, quizSuccess: false };
  }
  if (quizSuccessfullyCreated.match(action)) {
    return {
      ...state,
      quizSuccess: true,
      numberOfQuestions: 0,
      quizName: "",
      questionCount: 1,
      quiz: {},
      finishSettingQuestion: false,
    };
  }
  if (addQuestionToQuiz.match(action)) {
    const newObject = Object.assign(state.quiz, action.payload);
    return {
      ...state,

      quiz: newObject,
      numberOfQuestions: state.numberOfQuestions - 1,
      questionCount: state.questionCount + 1,
    };
  }
  return state;
};
