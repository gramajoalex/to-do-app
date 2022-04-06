import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { useForm } from "../../hooks/useForm";

import "./styles.css";

const init = () => {
  return JSON.parse(localStorage.getItem("Todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    const action = {
      type: "delete",
      payload: todoId,
    };

    dispatch(action);
  };

  const handleToggle = (todoId) => {
    dispatch({
      type: "toggle",
      payload: todoId,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    const action = {
      type: "add",
      payload: newTodo,
    };

    dispatch(action);
    reset();
  };

  return (
    <div>
      <h1>
        TodoApp <small>({todos.length})</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map((todo, i) => (
              <li key={todo.id} className="list-group-item">
                <p
                  onClick={() => handleToggle(todo.id)}
                  className={`${todo.done && "complete"}`}
                >
                  {i + 1}. {todo.desc}
                </p>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="btn btn-danger"
                >
                  Borrar
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-5">
          <h4>Agregar ToDo</h4>
          <hr />

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Aprender..."
              autoComplete="off"
              value={description}
              onChange={handleInputChange}
            />

            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-outline-primary mt-1">
                Agregar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
