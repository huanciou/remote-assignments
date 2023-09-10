import React from "react";

const Section = ({ isHidden, toggleHidden }) => {
  return (
    <section>
      <p>Section Title</p>
      <div className="contentBox">
        <div className="content">Content Box 1</div>
        <div className="content">Content Box 2</div>
        <div className="content">Content Box 3</div>
        <div className="content">Content Box 4</div>
      </div>
      <button id="callAction" onClick={toggleHidden}>
        {isHidden ? "Call to Action" : "Hidden"}
      </button>
    </section>
  );
};

export default Section;
