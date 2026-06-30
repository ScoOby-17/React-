import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TodoList.css";

export default function TodoList() {
  let [tasks, setTasks] = useState([]); //store objects inside a array
  let [input, setInput] = useState("");

  let addTask = (event) => {
    setTasks([...tasks, { task: input, ID: uuidv4(), done: false }]); //add object in array
    setInput("");
  };

  let resetTask = () => {
    setTasks([]);
  };

  let deleteTask = (id) => {
    let tasksAfterDelete = tasks.filter((todo) => {
      return todo.ID != id;
    });
    setTasks(tasksAfterDelete);
  };

  let updateTaskStatus = (id) => {
    let updatedTaskStatus = tasks.map((todo) => {
      if (todo.ID === id) {
        return {
          ...todo,
          done: !todo.done,
        };
      }
      return todo;
    });

    setTasks(updatedTaskStatus);
  };

  return (
    <div className="todo-container">
      <h3>Todo list</h3>
      <br />
      <br />
      <br />

      <label htmlFor="">Write Tasks</label>
      <input
        type="text"
        placeholder="Task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" onClick={addTask}>
        Add
      </button>
      <br />
      <br />

      <h3>All Tasks</h3>
      <ul>
        {tasks.map((todo) => (
          <li key={todo.ID}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => updateTaskStatus(todo.ID)}
            />
            {todo.task}
            <button onClick={() => deleteTask(todo.ID)}>Delete</button>
          </li>
        ))}
      </ul>

      <button onClick={resetTask}>Reset</button>
    </div>
  );
}