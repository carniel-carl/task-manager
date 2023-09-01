import React, { useContext } from "react";

import "./../assets/styles/TaskColumn.scss";

import TaskCard from "./UI/TaskCard";
import { TaskContext } from "../App";

const TaskColumn = ({ title, status }) => {
  const { tasks } = useContext(TaskContext);

  return (
    <section className="task-column">
      <h2>{title}</h2>

      {tasks.map(
        (task, index) =>
          task.status === status && (
            <TaskCard
              key={index}
              tags={task.tags}
              title={task.task}
              id={index}
            />
          )
      )}
    </section>
  );
};

export default TaskColumn;
