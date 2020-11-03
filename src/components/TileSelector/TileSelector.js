import React from "react";
import "./TileSelector.css";
import useHover from '../../hooks';

const TileSelector = (props) => {
  const [ref, hovered] = useHover();
  const dropdown = hovered ? (
    <div className="tileSelectorContent">
      <div className="number">4</div>
      <div className="number">16</div>
      <div className="number">36</div>
    </div>
  ) : null;

  return (
    <div className="tileSelector">
      <div>Number of Tiles</div>
      <div className="tileSelectorDropdown" ref={ref}>
        {props.numTiles}
        {dropdown}
      </div>
    </div>
  );
};

export default TileSelector;
