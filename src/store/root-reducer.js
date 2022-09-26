import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { quizReducer } from "./quiz/quiz.reducer";
import { quizRoomReducer } from "./quizRoom/quizRoom.reducer";
export const rootReducer = combineReducers({
  user: userReducer,
  quiz: quizReducer,
  quizRoom: quizRoomReducer,
});
