// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Boomerang = require('./game-models/Boomerang');
const View = require('./View');

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.boomerang = new Boomerang({ position: 1 });
    this.enemy = new Enemy();
    this.hero = new Hero({ position: 0 }, this.boomerang, this.enemy);
    this.view = new View();
    this.track = [];
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = new Array(this.trackLength).fill(' ');
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.boomerang.position] = this.boomerang.skin;
    this.track[this.enemy.position] = this.enemy.skin;
  }

  check() {
    if (this.enemy.position - this.hero.position <= 1) {
      this.hero.skin = '💀YOU ARE DEAD!💀';
      this.boomerang.skin = '';
      this.enemy.skin = '';
      this.track[this.enemy.position] = this.enemy.skin;
      setTimeout(() => {
        this.hero.die();
      });
    }
    if (
      this.enemy.position === this.boomerang.position &&
      this.enemy.position - this.hero.position !== 1
    ) {
      this.enemy.die();
      this.enemy.generateSkin();
    }
  }

  play() {
    this.hero.move();
    setInterval(() => {
      // Let's play!
      this.check();
      this.regenerateTrack();
      this.view.render(this.track);
      this.enemy.moveLeft();
    }, 200);
  }
}

module.exports = Game;
