import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, todoDoneToggle } from "./reducers/todos-reducer";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const [todo, setTodo] = useState({ do: "" });
  const dispatch = useDispatch();

  // handle delete button click, accepts todo index
  // dispatch event to deleteTodo reducer function
  // passing index of todo we want to delete
  const deleteTodoClickHandler = (index) => {
    dispatch(deleteTodo(index));
  };

  const toggleTodoDone = (todo) => {
    dispatch(todoDoneToggle(todo));
  };

  const createTodoClickHandler = () => {
    dispatch(addTodo(todo));
  };

  const todoChangeHandler = (event) => {
    const doValue = event.target.value;
    const newTodo = {
      do: doValue,
    };
    setTodo(newTodo);
  };

  return (
    <>
      <h3>Todos</h3>
      <ul className="list-group">
        <li className="list-group-item">
          <button
            onClick={createTodoClickHandler}
            className="btn btn-primary w-25 
                          float-end"
          >
            Create
          </button>
          <input
            onChange={todoChangeHandler}
            value={todo.do}
            className="form-control"
          />
        </li>
        {todos.map((todo, index) => (
          <li className="list-group-item" key={todo._id}>
            <p>id: {todo._id}</p>
            <button
              onClick={() => deleteTodoClickHandler(index)}
              className="btn btn-danger 
                      float-end ms-2"
            >
              Delete
            </button>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleTodoDone(todo)}
              className="me-2"
            />
            <p>{todo.do}</p>
            <p>{todo.done ? "Done" : "Todo"}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Todos;
