// Враг.

class Enemy {
  constructor() {
    this.generateSkin();
    this.position = 70;
    this.score = 0;
    this.killed = [];
    this.speed = 100;
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
    this.killed.push(this.skin);
    this.position = 70;
    this.score += 1;
    this.speed = 100 - (Math.floor(this.score / 10) + 1) * 20;
  }
}

module.exports = Enemy;
