import Phaser from 'phaser';

export default class Game extends Phaser.Scene {
  constructor() {
    super('game');

    this.facingLeft = false;
  }

  preload() {}

  create() {
    const map = this.make.tilemap({ key: 'dungeon' });
    const tileset = map.addTilesetImage('dungeon3', 'tiles');

    const groundLayer = map.createLayer('Ground', tileset);
    const wallsLayer = map.createLayer('Walls', tileset);
    const objectsLayer = map.createLayer('objects', tileset);

    wallsLayer.setCollisionByProperty({ collide: true });

    this.createCursor();
    this.createWarrior();
    this.createAnimations();
    this.createEnemy();

    this.physics.add.collider(this.warrior, wallsLayer);

    this.cameras.main.startFollow(this.warrior, true);
  }
  createWarrior() {
    this.warrior = this.physics.add.sprite(64, 128, 'warrior', 'idle-down.png');
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
        prefix: 'wizzard_f_idle_anim_',
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

    /***************  create animations ****************/
  }

  createCursor() {
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  createAnimations() {
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
  }

  update() {
    const speed = 100;

    if (this.cursors.left.isDown) {
      if (!this.facingLeft) {
        this.flipX = !this.flipX;
        this.facingLeft = true;
      }
      this.warrior.setVelocityX(-speed);
      this.warrior.play('warrior-walk-left', true); // including true shows character movement
    } else if (this.cursors.right.isDown) {
      if (!this.facingLeft) {
        this.flipX = !this.flipX;
        this.facingLeft = false;
      }
      this.warrior.play('warrior-walk-right', true);
      this.warrior.setVelocityX(speed);
    } else if (this.cursors.up.isDown) {
      this.warrior.play('warrior-walk-up', true);
      this.warrior.setVelocityY(-speed);
    } else if (this.cursors.down.isDown) {
      this.warrior.play('warrior-walk-down', true);
      this.warrior.setVelocityY(speed);
    } else {
      // const parts = this.warrior.anims.currentAnim.key.split('-');
      // parts[1] = 'idle';
      // this.warrior.play(parts.join('-'));
      this.warrior.anims.play('warrior-idle-down');
      this.warrior.setVelocity(0, 0);
    }
  }
}
