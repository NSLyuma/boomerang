// Наш герой.
const keypress = require('keypress');
const addPlayer = require('../db');
const sound = require('play-sound')((opts = {}));

class Hero {
  constructor({ position }, boomerang, enemy) {
    this.lives = ['💚', '💚', '💚'];
    this.brokenLive = '💔';
    this.skins = ['🙂', '🤠', '😎', '😺'];
    this.skin = this.skins[0]; // можете использовать любые emoji '💃'
    this.position = position;
    this.boomerang = boomerang;
    this.enemy = enemy;
  }

  moveLeft() {
    // Идём влево.
    if (this.position > 0) {
      this.position -= 1;
      this.boomerang.position -= 1;
    }
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
    this.boomerang.position += 1;
  }
  //   var audio = new Audio('audio_file.mp3');
  // 4
  // 	audio.play();

  move() {
    keypress(process.stdin);
    process.stdin.on('keypress', (ch, key) => {
      if (key.name === 'right') {
        this.moveRight();
      }
      if (key.name === 'left') {
        this.moveLeft();
      }
      if (key.name === 'space') {
        sound.play(
          '/home/anastasiya/Рабочий стол/elbrus/boomerang/src/sounds/fire.wav'
        );
        this.attack();
      }
      if (key.ctrl && key.name === 'c') {
        process.exit();
      }
    });
    process.stdin.setRawMode(true);
  }

  attack() {
    let timer = 0;
    setInterval(() => {
      if (timer < 10 && this.boomerang.position < this.enemy.position) {
        this.boomerang.position += 1;
        timer += 1;
      } else if (
        timer >= 10 &&
        timer < 20 &&
        this.boomerang.position > this.position + 1
      ) {
        this.boomerang.position -= 1;
        timer += 1;
      }
    }, 50);
  }

  async die(name, score) {
    await addPlayer(name, score);
    process.exit();
  }
}

module.exports = Hero;
