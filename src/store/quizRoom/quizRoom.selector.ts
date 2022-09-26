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
  (num) => num.currentArrayNumber
);

