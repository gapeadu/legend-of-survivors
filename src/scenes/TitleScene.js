import Phaser from 'phaser';
import config from '../config/config';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('title');
  }

  create() {
    // create new sprite and set Interactive
    this.gameButton = this.add.sprite(100, 200, 'blueButton1').setInteractive();

    //center ui buttons
    this.centerButton(this.gameButton, 1);

    this.gameText = this.add.text(0, 0, 'Play', {
      fontSize: '32px',
      fill: '#fff',
    });

    //center text inside of button
    this.centerButtonText(this.gameText, this.gameButton);

    this.gameButton.on(
      'pointerdown',
      function (pointer) {
        this.scene.start('game');
      }.bind(this)
    );

    this.input.on('pointerover', function (event, gameObjects) {
      gameObjects[0].setTexture('blueButton2');
    });

    this.input.on('pointerout', function (event, gameObjects) {
      gameObjects[0].setTexture('blueButton1');
    });
  }

  centerButton(gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(
        config.width / 2,
        config.height / 2 - offset * 100,
        config.width,
        config.height
      )
    );
  }

  centerButtonText(gameText, gameButton) {
    Phaser.Display.Align.In.Center(gameText, gameButton);
  }
}
