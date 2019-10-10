import React from "react";

const Box = props => {
  return (
    <div className="box" onClick={e => props.clickHandler(props.index)}>
      <h1>{props.value}</h1>
    </div>
  );
};

export default Box;
