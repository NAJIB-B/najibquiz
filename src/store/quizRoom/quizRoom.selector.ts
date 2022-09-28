import { createSelector } from "reselect";
import { RootState } from "../store";
import { QuizRoomState } from "./quizRoom.reducer";
const selectQuizRoomReducers = (state: RootState): QuizRoomState =>
  state.quizRoom;

export const selectQuizTakerName = createSelector(
  [selectQuizRoomReducers],
  (name) => name.quizTakerName
);
export const selectEditableQuizArray = createSelector(
  [selectQuizRoomReducers],
  (array) => array.editableQuizArray
);
export const selectIsLoading = createSelector(
  [selectQuizRoomReducers],
  (load) => load.isLoading
);
export const selectCurrentArrayNumber = createSelector(
  [selectQuizRoomReducers],
  (num):number => num.currentArrayNumber
);
export const selectCheckedValue = createSelector(
  [selectQuizRoomReducers],
  (value) => value.checkedValue
);

export const selectQuizOwner = createSelector(
  [selectQuizRoomReducers],
  (value) => value.quizOwner
);

export const selectQuizId = createSelector(
  [selectQuizRoomReducers],
  (value) => value.quizId
);

