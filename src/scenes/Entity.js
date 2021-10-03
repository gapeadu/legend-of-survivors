import Phaser from 'phaser';

export default class Entity extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, textureKey, frame) {
    super(scene, x, y, textureKey, frame);

    this.scene = scene;
    this.scene.add.existing(this);
    this.x = x;
    this.y = y;
    this.scene.physics.world.enable(this);
    this.textureKey = textureKey;
    this.frame = frame;
  }
}
