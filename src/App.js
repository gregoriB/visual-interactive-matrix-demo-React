import React, { Component } from 'react';
import './styles/styles.css';
import { map, player } from './helpers/variables';
import Map from './components/Map'

class App extends Component {

  state = {
    matrix: []
  }

  handleNewGame = () => {
    map.generateMapMatrix()
    map.matrix[player.pos[1]].splice(player.pos[0], 1, 'x')
    this.setState(() => ({ matrix: map.matrix }))
  }

  handleUpdateMatrix = (newMatrix) => {
    this.setState(() => ({ matrix: newMatrix }))
  }

  componentDidMount() {
    this.handleNewGame()
  }
  
  render() {
    return (
      <div className="App">
        <Map 
          matrix={this.state.matrix}
          updateMatrix={this.handleUpdateMatrix}
        />
      </div>
    );
  }
}

export default App;
