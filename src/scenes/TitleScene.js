import Phaser from 'phaser';
import config from '../config/config';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('title');
  }

  //want background image to show up
  // preload() {
  //   this.load.image('darkCastle', '../public/assets/darkCastle.png');
  // }

  create() {
    /************** PLAY BUTTON  *********************/
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

    /******** end of play button  ***************/

    /********** options button  ***************/

    //set interactive options button
    this.optionsButton = this.add
      .sprite(400, 200, 'blueButton1')
      .setInteractive();

    //center ui option button
    this.centerButton(this.gameButton, 1);

    this.optionsText = this.add.text(0, 0, 'Options', {
      fontSize: '32px',
      fill: '#fff',
    });

    this.centerButtonText(this.optionsText, this.optionsButton);

    this.optionsButton.on(
      'pointerdown',
      function (pointer) {
        this.scene.start('Options');
      }.bind(this)
    );

    this.input.on('pointerover', function (event, gameObjects) {
      gameObjects[0].setTexture('blueButton2');
    });

    this.input.on('pointerout', function (event, gameObjects) {
      gameObjects[0].setTexture('blueButton1');
    });

    /******** end of options button  ***************/
  } //end of create

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
