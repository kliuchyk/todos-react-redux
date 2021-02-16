import { SetTodosAction } from "./actions";

export const loadTodos = async () => {
  const todos: SetTodosAction["payload"] = await fetch(
    "http://localhost:4000/todos"
  ).then((res) => res.json());

  return todos;
};

export const saveTodosToDb = async (
  todos:
    | {
        id: number;
        title: string;
      }[]
    | []
) => {
  await fetch("http://localhost:4000/todos", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todos),
  });
};
