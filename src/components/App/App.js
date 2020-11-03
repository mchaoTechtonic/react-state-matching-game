import React, { Component } from "react";
import OptionsPanel from "../OptionsPanel";
import Board from "../Board";
import { createTiles, indexOfSelected } from "../../misc/utils";

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
  startGame(numTiles) {
    this.setState((state) => ({
      playing: true,
      previousTileIndex: null,
      toBeCleared: null,
      tiles: createTiles(this.state.numTiles),
    }));
  }
  handleTileClicked(id, color) {
    this.setState((state) => {
      const selectedTileIndex = indexOfSelected(state.tiles, id, color);
      let previousTileIndex = state.previousTileIndex;
      if (previousTileIndex !== null) {
      } else {
        previousTileIndex = selectedTileIndex;
      }
      return {
        tiles: state.tiles,
        toBeCleared: state.toBeCleared,
        previousTileIndex,
      };
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">Turbo-Matcher</header>
        <OptionsPanel
          playing={this.state.playing}
          numTiles={this.state.numTiles}
          startGame={this.startGame}
        />
        <Board numTiles={this.state.numTiles} tiles={this.state.tiles} />
      </div>
    );
  }
}

export default App;
