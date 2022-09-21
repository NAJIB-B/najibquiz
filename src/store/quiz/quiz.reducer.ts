import { AnyAction } from "redux";
import { QuizFormat } from "../../utils/firebase.utils";
import { setQuestionNumber } from "./quiz.action";
export type QuizState = {
  readonly numberOfQuestions: number;
  readonly questionCount: number;
  readonly error: Error | null;
  readonly quiz: QuizFormat[];
};
const INITIAL_STATE: QuizState = {
  numberOfQuestions: 0,
  questionCount: 0,
  error: null,
  quiz: [],
};

export const quizReducer = (state = INITIAL_STATE, action: AnyAction) => {
    if(setQuestionNumber.match(action)){
      return{...state, numberOfQuestions: action.payload.value}
    }
  return state;
};
