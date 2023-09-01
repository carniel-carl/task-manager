import React from "react";
import "./App.scss";
import TaskForm from "./component/TaskForm";
import TaskColumn from "./component/TaskColumn";

const App = () => {
  return (
    <div className="app">
      <TaskForm />
      <main className="app-main">
        <TaskColumn title="Todo" />
        <TaskColumn title="Progress" />
        <TaskColumn title="Completed" />
      </main>
    </div>
  );
};

export default App;
