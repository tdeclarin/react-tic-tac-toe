import React from "react";
import styled from "styled-components";

const LogisticsContent = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 1.5rem;
`;
const Button = styled.button`
  font-size: 1.5rem;
  padding: 10px 120px 10px 120px;
  font-family: "Patrick Hand", cursive;
  border-radius: 10px;
  border: solid 1px black;
  background-color: #ff8800;
`;

const Logistics = props => {
  return (
    <div className="logistics">
      <LogisticsContent>Player Turn: {props.currentPlayer}</LogisticsContent>
      <LogisticsContent>
        Winner of the game is : {props.winner}
      </LogisticsContent>
      <Button onClick={e => props.newGame()}>Restart</Button>
    </div>
  );
};

export default Logistics;
