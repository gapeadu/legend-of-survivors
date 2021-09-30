import Phaser from 'phaser';

export default class Game extends Phaser.Scene {
  constructor() {
    super('game');
  }

  preload() {
    //this.load.spritesheet('warrior', 'spriteSheet/warrior.png', 20, 48);
  }

  create() {
    const map = this.make.tilemap({ key: 'dungeon' });
    const tileset = map.addTilesetImage('dungeon3', 'tiles');

    const groundLayer = map.createLayer('Ground', tileset);
    const wallsLayer = map.createLayer('Walls', tileset);
    const objectsLayer = map.createLayer('objects', tileset);

    // wallsLayer.setCollisionByProperty({ collide: true });

    // const debugGraphics = this.add.graphics().setAlpha(0.7);

    // wallsLayer.renderDebug(debugGraphics, {
    //   tileColor: null,
    //   collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
    //   faceColor: new Phaser.Display.Color(40, 39, 37, 255), // Color of colliding face edges
    // });

    const warrior = this.add.sprite(64, 64, 'warrior', 'warrior-idle-down.png');

    // this.anims.create({
    //   key: 'warrior-idle-down',
    //   frames: this.anims.generateFrameNumbers('warrior', {
    //     start: 24,
    //     end: 25,
    //   }),
    //   repeat: -1,
    // });
  }
}
