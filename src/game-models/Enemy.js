// Враг.

class Enemy {
  constructor() {
    this.generateSkin();
    this.position = 70;
    this.score = 0;
  }

  generateSkin() {
    const skins = [
      '👾',
      '💀',
      '👹',
      '👻',
      '👽',
      '👿',
      '💩',
      '🤡',
      '🤺',
      '🧛',
      '🧟',
      '🎃',
    ];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    this.position -= 1;
  }

  die() {
    this.score += 1;
    this.position = 30;
  }
}

module.exports = Enemy;
