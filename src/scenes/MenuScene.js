import Phaser from 'phaser';

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super('menuScene');
  }
  preload() {
    this.load.image('darkCastle', 'assets/darkCastle.png');
    this.load.image('play_button', 'assets/start.png');
  }
  create() {
    this.add.image(-500, -500, 'darkCastle').setOrigin(0).setDepth(0);
  }

  upload() {
    this.scene.start('preloader');
  }
}
