export type Action = { type: string; payload: any };

export const CREATE_TODO = "CREATE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const SET_TODOS = "SET_TODOS";

export interface SetTodosAction {
  type: typeof SET_TODOS;
  payload: { id: number; title: string }[] | [];
}

export const addTodo = (payload: { id: number; title: string }): Action => ({
  type: CREATE_TODO,
  payload,
});

export const setTodos = (
  payload: SetTodosAction["payload"]
): SetTodosAction => ({
  type: SET_TODOS,
  payload,
});
