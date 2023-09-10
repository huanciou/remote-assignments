import React, { forwardRef } from "react";

const Nav = forwardRef((props, ref) => {
  return (
    <nav ref={ref}>
      <div className="Nav">
        <div className="navLeft">
          <p>Welcome Tittle / Logo</p>
        </div>
        <div className="navRight">
          <p>item 1</p>
          <p>item 2</p>
          <p>item 3</p>
          <p>item 4</p>
        </div>
      </div>
    </nav>
  );
});

export default Nav;
