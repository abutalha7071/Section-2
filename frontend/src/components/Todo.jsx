import React, { useState } from "react";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (e) => {
    // console.log(e.code);
    if (e.code === "Enter") {
      console.log("task added");
      let task = e.target.value;
      if (!task.trim()) return;

      e.target.value = "";

      // adding a new todo to the List
      setTodoList([...todoList, { task: task, completed: false }]);
      console.log(todoList);
    }
  };

  const completeTodo = (index) => {
    const temp = todoList;
    temp[index].completed = true;
    setTodoList([...temp]);
  };

  const deleteTodo = (index) => {
    const temp = todoList;
    temp.splice(index, 1);
    setTodoList([...temp]);
  };

  return (
    <div>
      <h1 className="text-center display-4 fw-bold my-5">ToDo App</h1>
      <div className="container">
        <div className="card">
          <div className="card-header">
            <input type="text" className="form-control" onKeyDown={addTodo} />
          </div>
          <div className="card-body">
            <ul className="list-group">
              {todoList.map((todo, index) => (
                <li className="list-group-item" key={index}>
                  <h3>{todo.task}</h3>
                  <input type="checkbox" checked={todo.completed} />
                  <button
                    className={`ms-3 btn ${
                      todo.completed ? "btn-success" : "btn-warning"
                    }`}
                    onClick={() => {
                      completeTodo(index);
                    }}
                  >
                    {todo.completed ? "Completed" : "Pending"}
                  </button>
                  <button
                    className="ms-3 btn btn-danger"
                    onClick={() => {
                      deleteTodo(index);
                    }}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
