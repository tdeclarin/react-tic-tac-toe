import React, { Component } from "react";
import Board from "./Components/Board";

class App extends Component {
  state = {
    boxValue: Array.from({ length: 9 })
  };

  clickHandler(e) {
    console.log(e.target);
  }

  render() {
    return (
      <div>
        <div className="title">
          <h1>Tic-Tac-Toe</h1>
        </div>
        <Board
          playerMove={this.state.boxValue}
          clickHandler={this.clickHandler}
        />
      </div>
    );
  }
}
export default App;
