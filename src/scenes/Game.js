import Phaser, { Display } from 'phaser';

export default class Game extends Phaser.Scene {
  constructor() {
    super('game'); //key is game
  }

  preload() {}

  create() {
    const map = this.make.tilemap({ key: 'dungeon' }); //make the titlemap
    const tileset = map.addTilesetImage('dungeon3', 'tiles'); // adds the tileset image

    //create layers from bottom up
    const groundLayer = map.createLayer('Ground', tileset); //creates the gound layer
    const wallLayer = map.createLayer('Walls', tileset); //creates the wall layer
    const objectsLayer = map.createLayer('objects', tileset); //creats the bottom layer

    wallLayer.setCollisionByProperty({ collides: true });

    const debugGraphics = this.add.graphics().setAlpha(0.7);
    wallLayer.renderDebug(debugGraphics, {
      tileColor: null,
      collidingTileColor: new Phaser.Display.Color(243, 234, 48, 255),
      faceColor: new Phaser.Display.Color(40, 39, 37, 255),
    });
  }
}
