import Phaser from 'phaser';
import config from './config/config';
import MainScene from './scenes/MainScene';
import Preloader from './scenes/Preloader';
import TitleScene from './scenes/TitleScene';

class Game extends Phaser.Game {
  constructor() {
    super(config);

    //add all scenes
    this.scene.add('preloader', Preloader);
    this.scene.add('title', TitleScene);
    this.scene.add('game', MainScene);
    this.scene.start('preloader');
  }
}

window.onload = function () {
  window.game = new Game();
};

// export const config = {
//   type: Phaser.AUTO,
//   backgroundColor: 'rgba(158, 42, 0, 0.5)',
//   width: 800,
//   height: 450,

//   physics: {
//     default: 'arcade',
//     arcade: {
//       debug: true,
//       gravity: { y: 0 },
//     },
//   },
//   scene: [Preloader, TitleScene, Game],
//   // scale: {
//   //   parent: 'mygame',
//   //   mode: Phaser.Scale.FIT,

//   //   // zoom: 1.5,
//   // },
// };
