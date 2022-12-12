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
  constructor({ trackLength }, playerName) {
    this.trackLength = trackLength;
    this.boomerang = new Boomerang({ position: 1 });
    this.enemy = new Enemy();
    this.hero = new Hero({ position: 0 }, this.boomerang, this.enemy);
    this.view = new View();
    this.track = [];
    this.regenerateTrack();
    this.totalScore = 0;
    this.playerName = playerName;
    this.counter = 0;
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
    if (this.enemy.position - this.hero.position === 2) {
      this.hero.lives[this.counter] = this.hero.brokenLive;
      this.counter += 1;
      if (this.counter === 3) {
        this.enemy.die();
        this.hero.skin = '💀YOU ARE DEAD!💀';
        this.boomerang.skin = '';
        this.enemy.skin = '';
        this.track[this.enemy.position] = this.enemy.skin;
        this.totalScore = this.enemy.score;
        setTimeout(() => {
          this.hero.die(this.playerName, this.totalScore);
        });
      }
    }
    if (
      this.enemy.position <= this.boomerang.position &&
      this.enemy.position - this.hero.position !== 1
    ) {
      this.enemy.die();
      this.enemy.generateSkin();
      if (Math.floor(this.enemy.score / 10) < this.hero.skins.length) {
        this.hero.skin = this.hero.skins[Math.floor(this.enemy.score / 10)];
      } else {
        this.hero.skin = this.hero.skins[this.hero.skins.length - 1];
      }
    }
  }

  play() {
    this.hero.move();
    setInterval(() => {
      // Let's play!
      this.check();
      this.regenerateTrack();
      this.view.render(
        this.track,
        this.enemy.score,
        this.enemy.killed.join(''),
        this.playerName,
        this.hero.lives.join(''),
        this.enemy.speed
      );
      this.enemy.moveLeft();
    }, 80);
  }
}

module.exports = Game;
