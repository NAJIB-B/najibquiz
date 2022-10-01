import { createSelector } from "reselect";

import { RootState } from "../store";
export const selectProfileReducer = (state: RootState) => state.profile;

export const selectIsLoading = createSelector(
  [selectProfileReducer],
  (user) => user.isLoading
);

export const selectQuizesData = createSelector(
  [selectProfileReducer],
  (value) =>value.quiz
  
);
