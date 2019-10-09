import React from "react";
import Box from "./Box";

const Board = props => {
  return (
    <div class="board">
      <div class="box-row">
        <Box value={"x"} />
        <Box value={"x"} />
        <Box value={"x"} />
      </div>
      <div class="box-row">
        <Box value={"x"} />
        <Box value={"x"} />
        <Box value={"x"} />
      </div>
      <div class="box-row">
        <Box value={"x"} />
        <Box value={"x"} />
        <Box value={"x"} />
      </div>
    </div>
  );
};

export default Board;
