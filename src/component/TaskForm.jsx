import React from "react";

import "./../assets/styles/TaskForm.scss";
import Tag from "./UI/Tag";

const tags = ["HTML", "CSS", "Javascript", "React"];

const TaskForm = () => {
  return (
    <header className="app-header">
      <form className="task-form">
        <input
          type="text"
          className="task-input"
          placeholder="Enter your task"
        />
        <div className="form-bottom">
          <div className="form-bottom__buttons">
            {tags.map((tag) => (
              <Tag tagName={tag} key={tag} />
            ))}
          </div>
          <select name="status" className="task-status">
            <option value="todo">Todo</option>
            <option value="progress">In Progess</option>
            <option value="complete">Completed</option>
          </select>

          <button type="submit" className="task-submit-btn">
            + Add Task
          </button>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
