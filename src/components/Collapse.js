import React, { useState } from "react";
import ChevronUp from "../img/chevron2.png";
import ChevronDown from "../img/chevron.png";

const Collapse = ({ title, desc }) => {
  const [open, setOPen] = useState(false);

  const toggle = () => {
    setOPen(!open);
  };

  if (desc.constructor === Array) {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4 className="panel-title" href="#" onClick={toggle}>
            {title}
            {open && <img src={ChevronDown} alt="" />}
            {!open && <img src={ChevronUp} alt="" />}
          </h4>
        </div>
        {open && (
          <div className="panel-collapse">
            <div className="collapse-content">
              <ul>
                {desc.map((equipment) => (
                  <li>{equipment}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4 className="panel-title" href="#" onClick={toggle}>
            {title}
            {open && <img src={ChevronDown} alt="" />}
            {!open && <img src={ChevronUp} alt="" />}
          </h4>
        </div>
        {open && (
          <div className="panel-collapse">
            <div className="collapse-content">
              <p>{desc}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default Collapse;
