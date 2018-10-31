import uuid from 'uuid';

export let canMove = {
  left: true,
  right: true,
  up: true,
  down: true
}

export const  player = {
  isReady: true,
  pos: [1,1],
  moveleft: '',
  moveRight: '',
  moveUp: '',
  moveDown: '',
  speed: 50, // larger is slower, 10 is the fastest.
  stride: 1 // how far the player moves with each move input. Also affects the movement speed.
}

export const map = {
  height: 600,
  width: 1200,
  keys: [],
  matrix: [],
  generateMapMatrix: () => {
    let X = [];
    let keys = [];
    for (let y = 0; y < 25; y++) {
      for (let x = 0; x < 40; x++) {
        X.push('.');
        keys.push(uuid());
      }
      map.matrix.push(X);
      map.keys.push(keys);
      keys = [];
      X = [];
    }
  }
}