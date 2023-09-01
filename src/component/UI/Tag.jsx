import React from "react";

import "./../../assets/styles/UI/Tag.scss";

const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    HTML: { backgroundColor: "#bae1ff" },
    CSS: { backgroundColor: "#ffb3ba" },
    Javascript: { backgroundColor: "#ffdfba" },
    React: { backgroundColor: "#baffc9" },
    default: { backgroundColor: "#f9f9f9" },
  };

  return (
    <button
      type="button"
      className="tag"
      onClick={() => selectTag(tagName)}
      style={selected ? tagStyle[tagName] : tagStyle.default}
    >
      {tagName}
    </button>
  );
};

export default Tag;
