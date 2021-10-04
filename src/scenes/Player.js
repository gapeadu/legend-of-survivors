// @ts-nocheck
import Phaser from 'phaser';

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);

    this.scene = scene;
    this.x = x;
    this.y = y;
    this.texture = texture;

    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this, 0);

    const { LEFT, RIGHT, UP, DOWN, W, A, S, D } =
      Phaser.Input.Keyboard.KeyCodes;
    this.keys = this.scene.input.keyboard.addKeys({
      left: LEFT,
      right: RIGHT,
      up: UP,
      down: DOWN,
      w: W,
      a: A,
      s: S,
      d: D,
    });
  } //end of constructor

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
  } //end of create animations

  update(time, delta) {
    this.createAnimations();

    const { keys } = this; //output: this.keys
    const speed = 100;
    this.body.setVelocity(0);

    //animations
    if (keys.left.isDown || keys.a.isDown) {
      this.body.setVelocityX(-speed);
      this.play('warrior-walk-left', true);
    } else if (keys.right.isDown || keys.d.isDown) {
      this.body.setVelocityX(speed);
      this.play('warrior-walk-right', true);
    } else if (keys.up.isDown || keys.w.isDown) {
      this.body.setVelocityY(-speed);
      this.play('warrior-walk-up', true);
    } else if (keys.down.isDown || keys.s.isDown) {
      this.body.setVelocityY(speed);
      this.play('warrior-walk-down', true);
    } else {
      this.anims.stop();
    }
  }
}
