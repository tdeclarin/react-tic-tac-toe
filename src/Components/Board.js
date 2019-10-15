import React from "react";
import Box from "./Box";
import styled from "styled-components";

const Board = props => {
  const boxes = props.playerMove.map((move, index) => (
    <Box
      value={move}
      key={index}
      index={index}
      clickHandler={props.clickHandler}
    />
  ));

  const BoardWrapper = styled.div`
    border: solid 3px black;
    height: 312px;
    width: 312px;
    text-align: center;
    /* margin: 0 auto; */
    display: inline-flex;
    flex-wrap: wrap;
  `;

  return <BoardWrapper>{boxes}</BoardWrapper>;
};

export default Board;
