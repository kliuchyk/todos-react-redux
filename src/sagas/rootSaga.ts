import { fork } from "redux-saga/effects";
import saveTodosWatcher from "./saveTodosSaga";
import loadTodosWatcher from "./loadTodosSaga";

export function* rootSaga() {
  yield fork(loadTodosWatcher);
  yield fork(saveTodosWatcher);
}

export default rootSaga;
