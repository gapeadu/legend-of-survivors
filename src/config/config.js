import Phaser from 'phaser';

export default {
  type: Phaser.AUTO,
  backgroundColor: 'rgba(158, 42, 0, 0.5)',
  width: 800,
  height: 450,

  physics: {
    default: 'arcade',
    arcade: {
      // debug: true,
      gravity: { y: 0 },
    },
  },
  scale: {
    // mode: Phaser.Scale.Fit,
    zoom: 1.5,
  },
};
