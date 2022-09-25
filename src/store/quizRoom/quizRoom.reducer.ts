import { QuizFormat } from "../../utils/firebase.utils";
import {
  setQuizTakerName,
  setOriginalQuestionArray,
  setCheckedValueInEditableArray,
} from "./quizRoom.action";
import { AnyAction } from "redux";
export type QuizResultFormat = {
  name: string;
  score: number;
};
export type QuizRoomState = {
  readonly originalQuizArray: QuizFormat[];
  readonly quizTakerName: string;
  readonly editableQuizArray: QuizFormat[];
  readonly error: Error | null;
};
const INITIAL_STATE: QuizRoomState = {
  originalQuizArray: [],
  quizTakerName: "",
  error: null,
  editableQuizArray: [],
};

export const quizRoomReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (setQuizTakerName.match(action)) {
    return { ...state, quizTakerName: action.payload };
  }
  if (setOriginalQuestionArray.match(action)) {
    return {
      ...state,
      originalQuizArray: action.payload,
      editableQuizArray: action.payload,
    };
  }
  if (setCheckedValueInEditableArray.match(action)) {
    const { question, questionNumber, option1 } = action.payload;
    return { ...state, quizName: action.payload };
  }

  return state;
};
