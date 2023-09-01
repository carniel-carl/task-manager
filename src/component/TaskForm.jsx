import React, { useContext, useRef, useState } from "react";

import "./../assets/styles/TaskForm.scss";
import Tag from "./UI/Tag";
import { TaskContext } from "../App";

const tags = ["HTML", "CSS", "Javascript", "React"];

const TaskForm = () => {
  const { setTasks } = useContext(TaskContext);

  const [chosenTag, setChosenTag] = useState([]);

  const inputRef = useRef("");
  const statusRef = useRef("");

  const checkTag = (tagName) => {
    return chosenTag.some((item) => item === tagName);
  };

  const selectTag = (tagName) => {
    if (chosenTag.some((item) => item === tagName)) {
      const newTags = chosenTag.filter((item) => item !== tagName);
      setChosenTag(newTags);
    } else {
      setChosenTag((prev) => [...prev, tagName]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTask = {
      task: inputRef.current.value,
      status: statusRef.current.value,
      tags: chosenTag,
    };
    if (inputRef.current.value !== "" && chosenTag.length !== 0) {
      setTasks((prev) => [...prev, newTask]);
      inputRef.current.value = "";
      statusRef.current.value = "todo";
      setChosenTag([]);
    }
  };

  return (
    <header className="app-header">
      <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          className="task-input"
          placeholder="Enter your task"
          ref={inputRef}
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
          <select name="status" className="task-status" ref={statusRef}>
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
