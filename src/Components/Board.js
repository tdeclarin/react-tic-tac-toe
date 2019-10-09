import React from "react";
import Box from "./Box";

const Board = props => {
  const boxes = props.playerMove.map((move, index) => (
    <Box value={move} key={index} clickHandler={props.clickHandler} />
  ));

  return <div className="board">{boxes}</div>;
};

export default Board;
