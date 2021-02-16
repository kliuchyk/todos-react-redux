import {
  Action,
  SetTodosAction,
  CREATE_TODO,
  DELETE_TODO,
  SET_TODOS,
  setTodos,
} from "./actions";
import * as Redux from "redux";

export interface State {
  todos: { id: number; title: string }[] | [];
}

// reducer with initial state
const initialState: State = {
  todos: [],
};

export const saveTodos = () => async (
  dispatch: Redux.Dispatch,
  getState: () => State
) => {
  const todos = getState().todos;

  await fetch("http://localhost:4000/todos", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todos),
  });

  alert("Success!");
};

export const loadTodos = () => async (
  dispatch: Redux.Dispatch<SetTodosAction>,
  getState: () => State
) => {
  const todos: SetTodosAction["payload"] = await fetch(
    "http://localhost:4000/todos"
  ).then((res) => res.json());

  dispatch(setTodos(todos));
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case CREATE_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case SET_TODOS:
      return { ...state, todos: action.payload };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
