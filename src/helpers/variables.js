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
  size: 10,
  speed: 60, // larger is slower, 10 is the fastest.
  stride: 1 // how far the player moves with each move input. Also affects the movement speed.
}

export const map = {
  height: player.size * 40,
  width: player.size * 80,
  keys: [],
  matrix: [],
  generateMapMatrix: () => {
    let X = [];
    for (let y = 0; y < 20; y++) {
      for (let x = 0; x < 40; x++) {
        X.push('.');
      }
      map.matrix.push(X);
      X = [];
    }
  },
  generateKeys: () => {
      let keys = [];
      for (let y = 0; y < 20; y++) {
        for (let x = 0; x < 40; x++) {
          keys.push(uuid());
        }
        map.keys.push(keys);
        keys = [];
      }
    }
}