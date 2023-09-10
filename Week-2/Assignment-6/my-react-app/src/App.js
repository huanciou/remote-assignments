import React, { useRef, useState } from "react";
import Nav from "./components/Nav";
import Welcome from "./components/Welcome";
import Section from "./components/Section";
import Section2 from "./components/Section2";
import "./styles/style.css";

const App = () => {
  const [isHidden, setIsHidden] = useState(true);

  let section2Ref = useRef(null);
  let navRef = useRef(null);

  const toggleHidden = () => {
    setIsHidden(!isHidden);
    // if (section2Ref.current) {
    //   console.log(section2Ref.current);
    //   section2Ref.current.scrollIntoView({ behavior: "smooth" });
    // } else {
    //   section2Ref.current.scrollIntoView({
    //     behavior: "smooth",
    //   });
    // }
  };

  return (
    <div>
      <Nav ref={navRef} />
      <Welcome />
      <Section isHidden={isHidden} toggleHidden={toggleHidden} />
      {!isHidden && <Section2 ref={section2Ref} />}
    </div>
  );
};

export default App;
