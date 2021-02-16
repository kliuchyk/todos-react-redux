import { takeLatest, call, put } from "redux-saga/effects";
import { LOAD_TODOS, SetTodosAction, setTodos } from "../actions";
import { loadTodos } from '../api';

function* loadTodosRunnerSaga() {
  const todos: SetTodosAction["payload"] = yield call(loadTodos);
  yield put(setTodos(todos));
}

function* loadTodosWatcher() {
  yield takeLatest(LOAD_TODOS, loadTodosRunnerSaga);
}

export default loadTodosWatcher;
