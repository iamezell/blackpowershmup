export default class Level extends Phaser.State {
  create(game) {
    console.debug('level started');
    this.background = this.add.tileSprite(0, 0, game.world.width, game.world.height, 'space');
    this.background.autoScroll(0, 30);
  }
}
