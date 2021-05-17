import React from "react";

const Sidebar = (props) => {
  return (
    <button
      className={`sidebar-item  ${props.active ? "active" : ""}`}
      onClick={props.click}
    >
      {props.property.name}

      {/* {props.property.map((e, index) => {
        return <h1 key={index}>{e.name}</h1>;
      })} */}
    </button>
  );
};

export default Sidebar;
