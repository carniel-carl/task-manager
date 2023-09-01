import React from "react";

import "./../../assets/styles/UI/TaskCard.scss";

import Tag from "./Tag";

import { FaTrash } from "react-icons/fa";

const TaskCard = () => {
  return (
    <article className="task-card">
      <p className="task-text">title</p>
      <div className="task-card__bottom">
        <div className="task-card__tags">
          <Tag tagName="React" />
          <Tag tagName="React" />
          <Tag tagName="React" />
        </div>
        <button type="button" className="task-card__delete">
          <FaTrash />
        </button>
      </div>
    </article>
  );
};

export default TaskCard;
