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
        font: '30px monospace',
      },
    });

    loadingText.setOrigin(0.5, 0.5);

    let percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '20px monospace',
      },
    });

    percentText.setOrigin(0.5, 0.5);

    let assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
      },
    });

    assetText.setOrigin(0.5, 0.5);

    // update progress bar
    this.load.on('progress', function (value) {
      percentText.setText(parseInt(value) * 100 + '%');
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    // remove progress bar when loading has completed
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

    //assets needed in game
    this.load.image('tiles', 'assets/SmoothdungeonTileset.png');
    this.load.tilemapTiledJSON('dungeon', 'assets/dungeon_1.json');

    this.load.image('blueButton1', 'assets/ui/blue_button02.png');
    this.load.image('blueButton2', 'assets/ui/blue_button03.png');
    this.load.image('box', 'assets/ui/grey_box.png');
    this.load.image('checkedBox', 'assets/ui/blue_boxCheckmark.png');

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

  // create() {
  //   /* commented out for now so I can focus on the player */
  //   this.add.text(400, 200, 'Welcome Brave Warrior!').setOrigin(0.5, 0.5);
  //   this.time.addEvent({
  //     delay: 3000,
  //     loop: false,
  //     callback: () => {
  //       this.scene.start('title');
  //     },
  //   });
  // }

  ready() {
    this.readyCount++;
    if (this.readyCount === 2) {
      this.scene.start('title');
    }
  }
}
