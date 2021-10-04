import Phaser from 'phaser';

export default class Preloader extends Phaser.Scene {
  constructor() {
    super('preloader');
  }

  init() {
    this.readyCount = 0;
  }

  preload() {
    // progress bar
    let progressBar = this.add.graphics();
    let progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    let width = this.cameras.main.width;
    let height = this.cameras.main.height;
    let loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Game Loading...',
      style: {
        font: '30px Inconsolata',
        color: '#ffffff',
      },
    });

    loadingText.setOrigin(0.5, 0.5);

    //percentage bar
    let percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '20px Inconsolata',
        color: '#ffffff',
      },
    });

    percentText.setOrigin(0.5, 0.5);

    // update progress bar
    this.load.on('progress', function (value) {
      percentText.setText(parseInt(value) * 100 + '%');
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    // remove loading screen when loading has completed
    this.load.on(
      'complete',
      function () {
        progressBar.destroy();
        progressBox.destroy();
        loadingText.destroy();
        percentText.destroy();
        this.ready();
      }.bind(this)
    );

    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);

    //load assets needed in game
    this.load.image('tiles', './public/assets/SmoothdungeonTileset.png');
    this.load.tilemapTiledJSON('dungeon', 'assets/dungeon_1.json');

    this.load.image('blueButton1', './public/assets/ui/blue_button01.png');
    this.load.image('blueButton2', './public/assets/ui/blue_button02.png');
    this.load.image('box', './public/assets/ui/grey_box.png');
    this.load.image('checkedBox', './public/assets/ui/blue_boxCheckmark.png');

    this.load.image('darkCastle', './public/assets/darkCastle.png');

    //load textured spritesheet
    this.load.atlas(
      'warrior',
      'spriteSheet/warrior.png',
      'spriteSheet/warrior.json'
    );

    this.load.atlas(
      'wizzard',
      'spriteSheet/enemy/wizzard.png',
      'spriteSheet/enemy/wizzard.json'
    );
  } //end of preload

  ready() {
    this.readyCount++;
    if (this.readyCount === 2) {
      this.scene.start('title');
    }
  }
}
