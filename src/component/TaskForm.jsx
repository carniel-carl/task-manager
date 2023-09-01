import React, { useContext, useState } from "react";

import "./../assets/styles/TaskForm.scss";
import Tag from "./UI/Tag";
import { TaskContext } from "../App";

const tags = ["HTML", "CSS", "Javascript", "React"];

const TaskForm = () => {
  const { setTasks } = useContext(TaskContext);

  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setTaskData((prev) => ({ ...prev, [name]: value }));
  };

  const checkTag = (tagName) => {
    return taskData.tags.some((item) => item === tagName);
  };

  const selectTag = (tagName) => {
    if (taskData.tags.some((item) => item === tagName)) {
      const newTags = taskData.tags.filter((item) => item !== tagName);
      setTaskData((prev) => ({ ...prev, tags: newTags }));
    } else {
      setTaskData((prev) => ({ ...prev, tags: [...prev.tags, tagName] }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prev) => [...prev, taskData]);
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };

  return (
    <header className="app-header">
      <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={taskData.task}
          className="task-input"
          placeholder="Enter your task"
          onChange={handleChange}
        />
        <div className="form-bottom">
          <div className="form-bottom__buttons">
            {tags.map((tag) => (
              <Tag
                tagName={tag}
                key={tag}
                selectTag={selectTag}
                selected={checkTag(tag)}
              />
            ))}
          </div>
          <select
            name="status"
            className="task-status"
            onChange={handleChange}
            value={taskData.status}
          >
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
