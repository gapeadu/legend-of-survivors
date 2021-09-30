import Phaser from 'phaser';
//purpose of this file is to load before the game

export default class Preloader extends Phaser.Scene {
  constructor() {
    super('preloader'); // key = preloader
  }
  preload() {
    // load the assets needed for the game. Phaser looks for this first
    this.load.image('tiles', '../tiles/SmoothdungeonTileset.png');
    this.load.tilemapTiledJSON('dungeon', '../tiles/dungeon_1.json');
  }

  create() {
    // create assets by loaded by preload
    this.add.text(400, 250, 'Welcome Brave Warrior!').setOrigin(0.5, 0.5); // Welcoming messagge before game loads
    this.time.addEvent({
      delay: 3000, // happens after 3 seconds
      loop: false, // text doesn't repeat
      callback: () => {
        this.scene.start('game'); //starts game from Game.js after msg shows for 3 secs
      },
    });
  }
}
