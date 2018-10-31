import React, { Component } from 'react'
import { map } from '../helpers/variables'

class Tile extends Component {

  handleTileClassName= () => {
    if (this.props.mapIndex === 0 || this.props.mapIndex === map.matrix.length - 1 ||
        this.props.index === 0 || this.props.index === map.matrix[0].length - 1) {
      return 'border';
    }
    const defaultColor = this.props.value !== 'x' ? 'empty': 'player';
    return defaultColor;
  }

  render() {
    return (
      <div className='tile'>
        <div className={this.handleTileClassName()} >
          {this.props.value}
        </div>  
      </div>
    )
  }
}

export default Tile;
