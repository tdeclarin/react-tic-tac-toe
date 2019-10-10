import React, { Component } from "react";
import Board from "./Components/Board";
import Logistics from "./Components/Logistics";

class App extends Component {
  state = {
    boxValue: Array.from({ length: 9 }),
    player: "X"
  };

  clickHandler(index) {
    let updatedBoard = this.state.boxValue;
    if (this.state.boxValue[index] === undefined) {
      updatedBoard[index] = this.state.player;
      let nextPlayer = this.state.player === "X" ? "O" : "X";
      this.setState({
        boxValue: updatedBoard,
        player: nextPlayer
      });
      this.checkForWin();
    }
  }
  checkForWin() {}
  newGame() {
    this.setState({
      boxValue: Array.from({ length: 9 }),
      player: "X"
    });
  }
  render() {
    return (
      <div>
        <div className="title">
          <h1>Tic-Tac-Toe</h1>
        </div>
        <Board
          playerMove={this.state.boxValue}
          clickHandler={this.clickHandler.bind(this)}
        />
        <Logistics currentPlayer={this.state.player} />
      </div>
    );
  }
}
export default App;
