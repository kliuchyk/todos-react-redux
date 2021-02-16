import { Action, CREATE_TODO, DELETE_TODO, SET_TODOS } from "./actions";

export interface State {
  todos: { id: number; title: string }[] | [];
}

const initialState: State = {
  todos: [],
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
