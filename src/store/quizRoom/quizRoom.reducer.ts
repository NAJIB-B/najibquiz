import { QuizFormat, EditableQuizFormat } from "../../utils/firebase.utils";
import { cloneDeep } from "lodash-es";
import {
  setQuizTakerName,
  setOriginalQuestionArray,
  setCheckedValueInEditableArray,
  getQuestionsFromDbStart,
  getQuestionsFromDbSuccess,
  addCurrentArrayNumber,
  reduceCurrentArrayNumber,
  setCheckedValue,
  uploadQuizResultToOwnerDbStart,
  setQuizOwner,
  setQuizId,
  uploadQuizResultToOwnerDbSuccess,
  resetQuizRoom,
} from "./quizRoom.action";
import { AnyAction } from "redux";
export type QuizResultFormat = {
  name: string | null;
  score: number;
  quizOwner: string;
  quizId: string;
};
export type QuizRoomState = {
  readonly originalQuizArray: QuizFormat[];
  readonly quizTakerName: string | null;
  readonly editableQuizArray: EditableQuizFormat[];
  readonly error: Error | null;
  readonly isLoading: boolean;
  readonly currentArrayNumber: number;
  readonly checkedValue: string;
  readonly quizOwner: string;
  readonly quizId: string;
  readonly doneWithQuiz: boolean;
};
const INITIAL_STATE: QuizRoomState = {
  originalQuizArray: [],
  quizTakerName: null,
  error: null,
  editableQuizArray: [],
  isLoading: false,
  currentArrayNumber: 0,
  checkedValue: "",
  quizOwner: "",
  quizId: "",
  doneWithQuiz: false,
};

export const quizRoomReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (setQuizTakerName.match(action)) {
    return { ...state, quizTakerName: action.payload };
  }
  if (getQuestionsFromDbStart.match(action)) {
    return { ...state, isLoading: true };
  }
  if (uploadQuizResultToOwnerDbStart.match(action)) {
    return { ...state, isLoading: true };
  }
  if (setCheckedValue.match(action)) {
    return { ...state, checkedValue: action.payload };
  }
  if (setQuizOwner.match(action)) {
    return { ...state, quizOwner: action.payload };
  }
  if (setQuizId.match(action)) {
    return { ...state, quizId: action.payload };
  }
  if (getQuestionsFromDbSuccess.match(action)) {
    return { ...state, isLoading: false };
  }
  if (uploadQuizResultToOwnerDbSuccess.match(action)) {
    console.log('done')
    return { ...state, isLoading: false,   doneWithQuiz: true};
  }
 
  if (addCurrentArrayNumber.match(action)) {
    return { ...state, currentArrayNumber: state.currentArrayNumber + 1 };
  }
  if (reduceCurrentArrayNumber.match(action)) {
    return { ...state, currentArrayNumber: state.currentArrayNumber - 1 };
  }
  if (resetQuizRoom.match(action)) {
    return {
      ...state,
      originalQuizArray: [],
      quizTakerName: null,
      error: null,
      editableQuizArray: [],
      isLoading: false,
      currentArrayNumber: 0,
      checkedValue: "",
      quizOwner: "",
      quizId: "",
      doneWithQuiz: false,
    };
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

    return {
      ...state,
      editableQuizArray: state.editableQuizArray.map((item, i) =>
        i === questionArrayNumber ? { ...item, checked: checked } : item
      ),
    };
  }

  return state;
};
