import Phaser from 'phaser';

import Game from './scenes/Game';
import Preloader from './scenes/Preloader';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 400,

  physics: {
    default: 'arcade',
    arcade: {
      // debug: true,
      gravity: { y: 0 },
    },
  },
  scene: [Preloader, Game],
  scale: {
    zoom: 2.5,
  },
};

export default new Phaser.Game(config);
