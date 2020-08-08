import { TYPES } from "../actions/action-types";
// import { IQuizList } from "../models";
import { IQuizListItem, Action } from "../models/index";
import { AnyAction } from "redux";

export interface IQuizInitialState {
  quizListItem: IQuizListItem[];
  currentQuizItemIndex: number;
  score: number;
}
const quizInitialState: IQuizInitialState = {
  quizListItem: [],
  currentQuizItemIndex: 0,
  score: 0,
};
export const QuizReducer = (
  state = quizInitialState,
  action: AnyAction
): IQuizInitialState => {
  switch (action.type) {
    case TYPES.getQuizListItems:
      return {
        ...state,
        quizListItem: (action as Action<IQuizListItem[]>).payload,
      };
    case TYPES.incrementScore:
      return {
        ...state,
        score: state.score + 1,
      };
    case TYPES.setNextQuestion:
      return {
        ...state,
        currentQuizItemIndex: state.currentQuizItemIndex + 1,
      };
    case TYPES.restart:
      return {
        ...state,
        currentQuizItemIndex: 0,
        score: 0,
      };
    default:
      return state;
  }
};
