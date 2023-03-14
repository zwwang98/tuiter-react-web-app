import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./reducers/todos-reducer";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const [todo, setTodo] = useState({ do: "" });
  const dispatch = useDispatch();
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
        {todos.map((todo) => (
          <li className="list-group-item">
            <p>id: {todo._id}</p>
            <p>{todo.do}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Todos;
