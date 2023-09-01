import React from "react";

import "./../../assets/styles/UI/Tag.scss";

const Tag = ({ tagName }) => {
  return (
    <button type="button" className="tag">
      {tagName}
    </button>
  );
};

export default Tag;
