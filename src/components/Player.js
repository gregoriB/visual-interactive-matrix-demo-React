import React, { Component } from 'react';
import { canMove, player, map } from '../helpers/variables';

class Player extends Component {
  
  handlePlayerMove = (axis, stride) => {
    this.handleAxisCheck(axis, stride);
    if (this.handleBoundaryCheck()) {

      return;
    }
    this.handleCleanUpPreviousPos(axis, stride);
    map.matrix[player.pos[1]].splice(player.pos[0], 1, 'x');
    return this.props.updateMatrix(map.matrix);
  }

  handleAxisCheck = (axis, stride) => {
    switch(axis) {
      case 0:
        player.pos[0] = player.pos[0] + stride;
        break;
      case 1:
        player.pos[1] = player.pos[1] + stride;
        break;
      default:
    }
  }

  handleBoundaryCheck = () => {
    if (player.pos[0] <= 0) {
      return player.pos[0] = 1;
    }
    if (player.pos[0] >= map.matrix[0].length - 1) {
      return player.pos[0] = map.matrix[0].length - 2;
    }
    if (player.pos[1] <= 0) {
      return player.pos[1] = 1;
    }
    if (player.pos[1] >= map.matrix.length - 1) {
      return player.pos[1] = map.matrix.length -  2;
    }
  }

  handleCleanUpPreviousPos = (axis, stride) => {
    if ((stride > 0 && axis === 0) || (stride < 0 && axis === 0)) {
      map.matrix[player.pos[1]].splice(player.pos[0]-stride, 1, 'O')
    }
    if ((stride > 0 && axis === 1) || (stride < 0 && axis === 1)) {
      map.matrix[player.pos[1]-stride].splice(player.pos[0], 1, 'O')
    }
  }


   // using intervals for continous movement as a workaround to avoid key repeat from the operating system.
   // only the first keypress is registered and the interval continues until the key registers a 'keyup'.
  handleDirections = (e) => {
    e.preventDefault();
    switch(e.key) {
      case 'ArrowLeft':
      case 'a':
        if (canMove.left) {
          player.moveLeft = (
            setInterval(() => {this.handlePlayerMove(0, -player.stride)}, player.speed) 
          )
          canMove.left = false;
        }
        break;
      case 'ArrowUp':
      case 'w':
        if (canMove.up) {
          player.moveUp = (
            setInterval(() => {this.handlePlayerMove(1, -player.stride)}, player.speed)
          )
          canMove.up = false;
        }
        break;
      case 'ArrowRight':
      case 'd':
        if (canMove.right) {
          player.moveRight = (
            setInterval(() => {this.handlePlayerMove(0, player.stride)}, player.speed)
          )
          canMove.right = false;
        }
        break;
      case 'ArrowDown':
      case 's':
        if (canMove.down) {
          player.moveDown = (
            setInterval(() => {this.handlePlayerMove(1, player.stride)}, player.speed)
          )
          canMove.down = false;
        }
        break;
      default:
        break;
    }
  }
  
  handleKeydown = (e) => {
    e.preventDefault();
    if (!player.isReady) {
      this.handleClearMovement();
      return;
    }
    this.handleDirections(e);
  }
  
  handleClearMovement = () => {
    clearInterval(player.moveRight);
    clearInterval(player.moveLeft);
    clearInterval(player.moveUp);
    clearInterval(player.moveDown);
  }

   //removes the interval set to a key to stop movement and allows the key input to register again.
  handleKeyup = (e) => {
    e.preventDefault();
    switch(e.key) {
      case 'ArrowRight':
      case 'd':
        canMove.right = true;
        clearInterval(player.moveRight);
        break
      case 'ArrowLeft':
      case 'a':
        canMove.left = true;
        clearInterval(player.moveLeft);
        break;
      case 'ArrowUp':
      case 'w':
        canMove.up = true;
        clearInterval(player.moveUp);
        break;
      case 'ArrowDown':
      case 's':
        canMove.down = true;
        clearInterval(player.moveDown);
        break;
      default:
        break;
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', (e) => this.handleKeydown(e));
    document.addEventListener('keyup', (e) => this.handleKeyup(e));
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', (e) => this.handleKeydown(e));
    document.removeEventListener('keyup', (e) => this.handleKeyup(e));
  }

  render() {
    return (
      <>
        <div />
      </>
    )
  }
}

export default Player;