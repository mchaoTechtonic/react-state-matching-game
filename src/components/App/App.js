import React, { Component } from "react";
import OptionsPanel from "../OptionsPanel";
import Board from "../Board";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.numTiles = 36;
    this.state.playing = false;
    this.state.previousTileIndex = null;
    this.state.tiles = [];
    this.state.toBeCleared = null;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">Turbo-Matcher</header>
        <OptionsPanel
          playing={this.state.playing}
          numTiles={this.state.numTiles}
        />
        <Board />}
      </div>
    );
  }
}

export default App;
