import React, { Component } from 'react';
import { map } from '../helpers/variables';
import Player from './Player';
import Tile from './Tile';
import uuid from 'uuid';

class Map extends Component {

  tiles;

  handleMapTiles = () => {
    this.tiles = map.matrix.map((row, mapIndex) => {
      return row.map((tile, index) => {
        return (
          <Tile 
            mapIndex={mapIndex}
            index={index}
            matrix={map.matrix}
            key={uuid()}
            value={tile}
            x={map.matrix[mapIndex]}
          />
        )
      });
    });
  }

  componentWillUpdate() {
    this.handleMapTiles();
  }
  
  render() {

  return (
    <div
        className='map'
        style={{
          height: map.height,
          width: map.width
        }}
    >
      <Player
        updateMatrix={this.props.updateMatrix}
        matrix={this.props.matrix}
        />
      <div className='container' >{this.tiles}</div>
    </div>
  )
}
}

export default Map;
