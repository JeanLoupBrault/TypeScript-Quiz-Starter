import { combineReducers } from "redux";
import { QuizReducer } from "./quiz";

const rootReducer = combineReducers({
  quiz: QuizReducer,
});

export type IStore = ReturnType<typeof rootReducer>;
export default rootReducer;
