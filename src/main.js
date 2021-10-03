import Phaser from 'phaser';

import Game from './scenes/Game';
import Preloader from './scenes/Preloader';
import TitleScene from './scenes/TitleScene';

const config = {
  type: Phaser.AUTO,
  backgroundColor: 'rgba(158, 42, 0, 0.5)',
  width: 800,
  height: 450,

  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
      gravity: { y: 0 },
    },
  },
  scene: [Preloader, Game],
  // scale: {
  //   parent: 'mygame',
  //   mode: Phaser.Scale.FIT,

  //   // zoom: 1.5,
  // },
};

export default new Phaser.Game(config);
