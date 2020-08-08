import { IStore } from "../reducers";
import { IQuizListItem } from "../models/index";

export function getCurrentQuizListItem(
  state: IStore
): IQuizListItem | undefined {
  if (state.quiz.quizListItem.length > 0) {
    return state.quiz.quizListItem[state.quiz.currentQuizItemIndex];
  }
}
