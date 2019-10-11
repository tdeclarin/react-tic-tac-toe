import React from "react";

const Logistics = props => {
  return (
    <div className="logistics">
      <h1>Player Turn: {props.currentPlayer}</h1>
      <h1>Winner of the game is : {props.winner}</h1>
      <button className="new-game-btn" onClick={e => props.newGame()}>
        Restart
      </button>
    </div>
  );
};

export default Logistics;
