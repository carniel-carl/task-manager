import React, { useContext } from "react";

import "./../../assets/styles/UI/TaskCard.scss";

import Tag from "./Tag";

import { FaTrash } from "react-icons/fa";
import { TaskContext } from "../../App";

const TaskCard = ({ tags, title, id }) => {
  const { handleDelete } = useContext(TaskContext);
  return (
    <article className="task-card">
      <p className="task-text">{title}</p>
      <div className="task-card__bottom">
        <div className="task-card__tags">
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} selected={true} />
          ))}
        </div>
        <button
          type="button"
          className="task-card__delete"
          onClick={() => handleDelete(id)}
        >
          <FaTrash />
        </button>
      </div>
    </article>
  );
};

export default TaskCard;
