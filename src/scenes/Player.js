import Phaser from 'phaser';

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);

    this.scene = scene;
    this.x = x;
    this.y = y;
    this.texture = texture;

    this.scene.add.existing(this);
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
      frames: this.anims.generateFrameNames(this.texture, {
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
      frames: this.anims.generateFrameNames(this.texture, {
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
      frames: this.anims.generateFrameNames(this.texture, {
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
      frames: this.anims.generateFrameNames(this.texture, {
        start: 0,
        end: 5,
        prefix: 'walk-right-',
        suffix: '.png',
      }),
      repeat: -1,
      frameRate: 12,
    });
  }

  // inputKeys() {
  //   const { LEFT, RIGHT, UP, DOWN, W, A, S, D } =
  //     Phaser.Input.Keyboard.KeyCodes;
  //   (this.keys = this),
  //     this.scene.input.keyboard.addKeys({
  //       left: LEFT,
  //       right: RIGHT,
  //       up: UP,
  //       down: DOWN,
  //       w: W,
  //       a: A,
  //       s: S,
  //       d: D,
  //     });

  //   const { keys } = this; //output: this.keys
  //   console.log('keys', keys); //undefned
  //   const speed = 100;

  //   let currentDirection = '';
  //   if (keys.left.isDown || keys.a.isDown) {
  //     if (!this.facingLeft) {
  //       this.flipX = !this.flipX;
  //       this.facingLeft = true;
  //     }
  //     this.warrior.body.setVelocityX(-speed);
  //     this.warrior.play('warrior-walk-left', true);
  //     currentDirection = 'warrior-idle-left';
  //   } else if (this.cursors.right.isDown) {
  //     if (!this.facingLeft) {
  //       this.flipX = !this.flipX;
  //       this.facingLeft = false;
  //     }
  //     this.warrior.body.setVelocityX(speed);
  //     currentDirection = 'warrior-idle-right';
  //     this.warrior.play('warrior-walk-right', true);
  //   } else if (this.cursors.up.isDown) {
  //     this.warrior.body.setVelocityY(-speed);
  //     currentDirection = 'warrior-idle-up';
  //     this.warrior.play('warrior-walk-up', true);
  //   } else if (this.cursors.down.isDown) {
  //     this.warrior.body.setVelocityY(speed);
  //     currentDirection = 'warrior-idle-down';
  //     this.warrior.play('warrior-walk-down', true);
  //   } else {
  //     this.warrior.play(currentDirection);
  //     this.warrior.body.setVelocity(0, 0);
  //   }
  }

  update(time, delta) {
    this.inputKeys();
    
  }
}
