import React, { forwardRef } from "react";

const Section2 = forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <div className="contentBox">
        <div className="content">Content Box 1</div>
        <div className="content">Content Box 2</div>
        <div className="content">Content Box 3</div>
        <div className="content">Content Box 4</div>
      </div>
    </section>
  );
});

export default Section2;
