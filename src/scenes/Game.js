import Phaser from 'phaser';

export default class Game extends Phaser.Scene {
  constructor() {
    super('game');
  }

  preload() {}

  create() {
    const map = this.make.tilemap({ key: 'dungeon' });
    const tileset = map.addTilesetImage('dungeon3', 'tiles');

    const groundLayer = map.createLayer('Ground', tileset);
    const wallsLayer = map.createLayer('Walls', tileset);
    const objectsLayer = map.createLayer('objects', tileset);

    wallsLayer.setCollisionByProperty({ collide: true });

    const debugGraphics = this.add.graphics().setAlpha(0.7);

    wallsLayer.renderDebug(debugGraphics, {
      tileColor: null,
      collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
      faceColor: new Phaser.Display.Color(40, 39, 37, 255), // Color of colliding face edges
    });

    this.createCursor();
    this.createWarrior();

    /***************  create idle animation ****************/
    this.anims.create({
      key: 'warrior-idle-down',
      frames: [{ key: 'warrior', frame: 'idle-down.png' }],
    });

    this.anims.create({
      key: 'warrior-idle-up',
      frames: [{ key: 'warrior', frame: 'idle-up.png' }],
    });

    this.anims.create({
      key: 'warrior-idle-left',
      frames: [{ key: 'warrior', frame: 'idle-left.png' }],
    });

    this.anims.create({
      key: 'warrior-idle-right',
      frames: [{ key: 'warrior', frame: 'idle-right.png' }],
    });

    /***************  create walk animation ****************/

    this.anims.create({
      key: 'warrior-walk-down',
      //generate an array of frames
      frames: this.anims.generateFrameNames('warrior', {
        start: 0,
        end: 5,
        prefix: 'walk-down-',
        suffix: '.png',
      }),
      repeat: -1,
      frameRate: 12,
    });

    this.anims.create({
      key: 'warrior-walk-up',
      frames: this.anims.generateFrameNames('warrior', {
        start: 0,
        end: 5,
        prefix: 'walk-up-',
        suffix: '.png',
      }),
      repeat: -1,
      frameRate: 12,
    });

    this.anims.create({
      key: 'warrior-walk-left',
      frames: this.anims.generateFrameNames('warrior', {
        start: 0,
        end: 5,
        prefix: 'walk-left-',
        suffix: '.png',
      }),
      repeat: -1,
      frameRate: 12,
    });

    this.anims.create({
      key: 'warrior-walk-right',
      frames: this.anims.generateFrameNames('warrior', {
        start: 0,
        end: 5,
        prefix: 'walk-right-',
        suffix: '.png',
      }),
      repeat: -1,
      frameRate: 12,
    });

    this.warrior.anims.play('warrior-idle-down');
  }
  createWarrior() {
    this.warrior = this.physics.add.sprite(64, 128, 'warrior', 'idle-down.png');
    // this.warrior.setBounce(0.2);
    // this.warrior.setCollideWorldBounds(true);
  }
  createCursor() {
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    const speed = 100;
    if (this.cursors.left.isDown) {
      this.warrior.play('warrior-walk-left');
      this.warrior.setVelocityX(-speed);
    } else if (this.cursors.right.isDown) {
      this.warrior.play('warrior-walk-right');
      this.warrior.setVelocityX(speed);
    }
    if (this.cursors.up.isDown) {
      this.warrior.play('warrior-walk-up');
      this.warrior.setVelocityY(-speed);
    } else if (this.cursors.down.isDown) {
      this.warrior.play('warrior-walk-down');
      this.warrior.setVelocityY(speed);
    }
  }
}
