import { SAVE_TODOS } from "./../actions";
import { takeLatest, call } from "redux-saga/effects";
import { saveTodosToDb } from '../api';

interface Props {
  type: string;
  payload:
    | {
        id: number;
        title: string;
      }[]
    | [];
}

function* saveTodosRunner({ payload }: Props) {
  yield call(saveTodosToDb, payload);
}

function* saveTodosWatcher() {
  yield takeLatest(SAVE_TODOS, saveTodosRunner);
}

export default saveTodosWatcher;
