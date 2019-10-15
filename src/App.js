import React, { Component } from "react";
import Board from "./Components/Board";
import Logistics from "./Components/Logistics";
import styled from "styled-components";
// Expand to 10 x 10
const noop = () => {};
const Title = styled.h1`
  font-family: "Permanent Marker", cursive;
  color: #ff8800;
`;
class App extends Component {
  state = {
    // Sets an array with 9 null items
    boxValue: Array.from({ length: 9 }),
    gameWinner: null,
    player: "X"
  };

  clickHandler(index) {
    let updatedBoxValue = this.state.boxValue;
    console.log("called click handler");
    // if the boxValue state is undefined and the gameWinner state is not empty run this code
    if (this.state.boxValue[index] === undefined && !this.state.gameWinner) {
      //Sets the updated boxValue value as the current player ("X" or "O")
      updatedBoxValue[index] = this.state.player;
      // Alternates the player when clicked. If player state = "X" then set player State as "O" vice versa.
      let nextPlayer = this.state.player === "X" ? "O" : "X";
      // Update state with the new Values, Update player state to alternate turns
      this.setState({
        boxValue: updatedBoxValue,
        player: nextPlayer
      });
      // Checks if there is a winner
      this.checkForWin();
    }
  }
  checkForWin() {
    //Winning Combinations
    let winningCombos = [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],
      ["0", "3", "6"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["0", "4", "8"],
      ["2", "4", "6"]
    ];
    console.log(this.state.boxValue);
    // loop through winning combination array
    for (let i = 0; i < winningCombos.length; i++) {
      // Array Destructuring grabs the values from each index in winningCombos and assigns them to x,y,z   it to boxValue
      const [x, y, z] = winningCombos[i];
      // Compares first row to the next two
      if (
        this.state.boxValue[x] &&
        this.state.boxValue[x] === this.state.boxValue[y] &&
        this.state.boxValue[x] === this.state.boxValue[z]
      ) {
        //Set the game winner as the last player that had a turn
        this.setState({
          gameWinner: this.state.player
        });
      }
    }
  }

  // Clears the board and restores original state
  newGame() {
    this.setState({
      boxValue: Array.from({ length: 9 }),
      player: "X",
      gameWinner: null
    });
  }

  render() {
    return (
      <div className="container">
        <Title>Tic-Tac-Toe</Title>
        <Board
          playerMove={this.state.boxValue}
          clickHandler={
            this.state.gameWinner ? noop : this.clickHandler.bind(this)
          }
        />
        <Logistics
          currentPlayer={this.state.player}
          winner={this.state.gameWinner}
          newGame={this.newGame.bind(this)}
        />
      </div>
    );
  }
}
export default App;
