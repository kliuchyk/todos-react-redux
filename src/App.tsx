import { SyntheticEvent, useState, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { State, saveTodos, loadTodos } from "./redux";
import { addTodo, DELETE_TODO } from "./actions";
import "./App.css";

function App() {
  const todos = useSelector<State, State["todos"]>((state) => state.todos);

  const dispatch = useDispatch();

  const [todoTitle, setTodoTitle] = useState("");

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (todoTitle === "") {
      alert("You need to provide a value for new todo");
      return;
    }

    dispatch(addTodo({ id: Date.now(), title: todoTitle }));

    setTodoTitle("");
  };

  const handleDelete = (id: number) => {
    dispatch({ type: DELETE_TODO, payload: id });
  };

  const renderTodos = (list: { id: number; title: string }[]) => {
    return (
      <ul>
        {list.map(({ id, title }) => (
          <li className={"todo-list-item"} key={id}>
            {title} <span onClick={() => handleDelete(id)}>x</span>
          </li>
        ))}
      </ul>
    );
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value);
  };

  const onSave = () => {
    dispatch(saveTodos());
  };

  const onLoad = () => {
    dispatch(loadTodos());
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" value={todoTitle} onChange={handleChange} />
        <button>Add todo</button>
      </form>

      {todos.length ? (
        renderTodos(todos)
      ) : (
        <div>
          <h1>You have no todos yet.</h1>
        </div>
      )}
      <hr />
      <button onClick={onSave}>Save</button>
      <button onClick={onLoad}>Load</button>
    </div>
  );
}

export default App;
