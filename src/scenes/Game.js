import Phaser from 'phaser';
import Player from './Player.js';

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

    this.createWarrior();
    this.createEnemy();

    this.physics.add.collider(this.warrior, wallsLayer);
    // this.physics.add.collider(this.warrior, this.wizzard);

    this.cameras.main.startFollow(this.warrior, true);

    const debugGraphics = this.add.graphics().setAlpha(0.7);

    wallsLayer.renderDebug(debugGraphics, {
      tileColor: null,
      collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
      faceColor: new Phaser.Display.Color(40, 39, 37, 255), // Color of colliding face edges
    });
  }
  createWarrior() {
    this.warrior = this.physics.add.existing(
      new Player(this, 64, 128, 'warrior', 'idle-down.png')
    );
    this.warrior.displayWidth = 20;
    this.warrior.scaleY = this.warrior.scaleX;
  }
  createEnemy() {
    this.wizzard = this.add.sprite(
      64,
      356,
      'wizzard',
      'wizzard_f_idle_anim_f0.png'
    );

    // enemy animations ///

    this.anims.create({
      key: 'wizzard-idle',
      frames: this.anims.generateFrameNames('wizzard', {
        start: 0,
        end: 3,
        prefix: 'wizzard_f_idle_anim_f',
        suffix: '.png',
      }),
      repeat: -1,
      frameRate: 10,
    });
    this.anims.create({
      key: 'wizzard-run',
      frames: this.anims.generateFrameNames('wizzard', {
        start: 0,
        end: 3,
        prefix: 'wizzard_f_run_anim_f',
        suffix: '.png',
      }),
      repeat: -1,
      frameRate: 10,
    });

    this.wizzard.anims.play('wizzard-run');
  }

  update() {
    this.warrior.update();
  }
}
