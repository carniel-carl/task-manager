import React from "react";

import TaskCard from "./UI/TaskCard";

const TaskColumn = ({ title }) => {
  return (
    <section className="task-column">
      <h2>{title}</h2>

      <TaskCard />
      <TaskCard />
    </section>
  );
};

export default TaskColumn;
