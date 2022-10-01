import { createSelector } from "reselect";
import { UserState } from "./user.reducer";
import { RootState } from "../store";
export const selectUserReducer = (state: RootState) => state.user;

export const selectUserUid = createSelector(
  [selectUserReducer],
  (user) => user.userUid
);
export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (user) => user.currentUser
);
export const selectBackToHome = createSelector(
  [selectUserReducer],
  (value) => value.backToHome
);
export const selectIsLoading = createSelector(
  [selectUserReducer],
  (value) => value.isLoading
);
