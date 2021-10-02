import Phaser from 'phaser';

export default class Preloader extends Phaser.Scene {
  constructor() {
    super('preloader');
  }

  preload() {
    this.load.image('tiles', 'tiles/SmoothdungeonTileset.png');
    this.load.tilemapTiledJSON('dungeon', 'tiles/dungeon_1.json');

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
  }

  create() {
    /* commented out for now so I can focus on the player */
    this.add.text(400, 200, 'Welcome Brave Warrior!').setOrigin(0.5, 0.5);
    this.time.addEvent({
      delay: 3000,
      loop: false,
      callback: () => {
        this.scene.start('game');
      },
    });
  }
}
