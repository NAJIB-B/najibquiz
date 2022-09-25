import { AnyAction } from "redux";
import { QuizFormat } from "../../utils/firebase.utils";
import {
  setQuestionNumber,
  setQuizName,
  addQuestionToQuiz,
  finishSettingQuestion,
  
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
};
const INITIAL_STATE: QuizState = {
  numberOfQuestions: 0,
  quizName: "",
  questionCount: 1,
  error: null,
  quiz: {},
  finishSettingQuestion: false,
};

export const quizReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (setQuestionNumber.match(action)) {
    return { ...state, numberOfQuestions: action.payload };
  }
  if (setQuizName.match(action)) {
    return { ...state, quizName: action.payload };
  }
  if (setQuizName.match(action)) {
    return { ...state, quizName: action.payload };
  }
  if (finishSettingQuestion.match(action)) {
    return { ...state, finishSettingQuestion: action.payload };
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
