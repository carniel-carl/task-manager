import React, { useEffect, useState } from "react";
import "./App.scss";
import TaskForm from "./component/TaskForm";
import TaskColumn from "./component/TaskColumn";

export const TaskContext = React.createContext();

const oldTasks = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskID) => {
    const newTask = tasks.filter((_, index) => taskID !== index);
    setTasks(newTask);
  };

  return (
    <TaskContext.Provider value={{ tasks, setTasks, handleDelete }}>
      <div className="app">
        <TaskForm />
        <main className="app-main">
          <TaskColumn title="Todo" status="todo" />
          <TaskColumn title="Progress" status="progress" />
          <TaskColumn title="Completed" status="complete" />
        </main>
      </div>
    </TaskContext.Provider>
  );
};

export default App;
