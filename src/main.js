import Phaser from 'phaser';

import Game from './scenes/Game';
import Preloader from './scenes/Preloader';

const config = {
  type: Phaser.AUTO,
  width: 1000,
  height: 500,

  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
      gravity: { y: 0 },
    },
  },
  scene: [Preloader, Game],
  scale: {
    zoom: 2,
  },
};

export default new Phaser.Game(config);
