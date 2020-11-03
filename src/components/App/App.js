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
      tiles: createTiles(this.state.numTiles, this.handleTileClicked),
    }));
  }
  handleTileClicked(id, color) {
    this.setState((state) => {
      let { tiles, toBeCleared, previousTileIndex } = state;
      const selectedTileIndex = indexOfSelected(tiles, id, color);
      if (toBeCleared !== null) {
        [tiles[toBeCleared[0]].selected, tiles[toBeCleared[1]].selected] = [false, false];
        toBeCleared = null;
      }
      tiles[selectedTileIndex].selected = true;
      if (previousTileIndex !== null) {
        const previousTile = tiles[previousTileIndex];
        const selectedTile = tiles[selectedTileIndex];
        if (previousTile.id != selectedTile.id && previousTile.color == color) {
          selectedTile.matched = true;
          previousTile.matched = true;
          previousTileIndex = null;
        } else {
          toBeCleared = [previousTileIndex, selectedTileIndex];
          previousTileIndex = null;
        }
      } else {
        previousTileIndex = selectedTileIndex;
      }

      return {
        tiles,
        toBeCleared,
        previousTileIndex,
      };
    });
  }

  handleNumTileChange(num) {
    this.setState({
      numTiles: num,
      playing: false,
      tiles: []
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
          handleNumTileChange={this.handleNumTileChange}
        />
        <Board numTiles={this.state.numTiles} tiles={this.state.tiles} />
      </div>
    );
  }
}

export default App;
