// purpose of config is to configure Phaser game
import Phaser from 'phaser';

import Game from './scenes/Game';
import Preloader from './scenes/Preloader';

const config = {
  type: Phaser.AUTO, //underlying browser rendering engine, AUTO will attempt to use WEBGL
  width: 1000, // Game width in pixels
  height: 500, //Game heighti in pixels

  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
      gravity: { y: 0 }, //moving up/down motion, no jump
    },
  },
  scene: [Preloader, Game],
  scale: {
    zoom: 2,
  },
};

export default new Phaser.Game(config);
