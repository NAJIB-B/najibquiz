import { QuizFormat, EditableQuizFormat } from "../../utils/firebase.utils";
import { cloneDeep } from "lodash-es";
import {
  setQuizTakerName,
  setOriginalQuestionArray,
  setCheckedValueInEditableArray,
  getQuestionsFromDbStart,
} from "./quizRoom.action";
import { AnyAction } from "redux";
export type QuizResultFormat = {
  name: string;
  score: number;
};
export type QuizRoomState = {
  readonly originalQuizArray: QuizFormat[];
  readonly quizTakerName: string | null;
  readonly editableQuizArray: EditableQuizFormat[];
  readonly error: Error | null;
  readonly isLoading: boolean;
};
const INITIAL_STATE: QuizRoomState = {
  originalQuizArray: [],
  quizTakerName: null,
  error: null,
  editableQuizArray: [],
  isLoading: false,
};

export const quizRoomReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (setQuizTakerName.match(action)) {
    return { ...state, quizTakerName: action.payload };
  }
  if (getQuestionsFromDbStart.match(action)) {
    return { ...state, isLoading: true };
  }
  if (setOriginalQuestionArray.match(action)) {
    return {
      ...state,
      originalQuizArray: action.payload,
      editableQuizArray: action.payload,
    };
  }
  if (setCheckedValueInEditableArray.match(action)) {
    const { questionArrayNumber, checked } = action.payload;
    const newArray = cloneDeep(state.editableQuizArray);
    if (questionArrayNumber) {
      newArray[questionArrayNumber].checked = checked;
    }

    return { ...state, editableQuizArray: newArray };
  }

  return state;
};
