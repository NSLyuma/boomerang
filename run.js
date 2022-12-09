// Основной файл.
// Запускает игру.
const Game = require('./src/Game');

const playerName = process.argv[2] || 'DEFAULT PLAYER 👽';

// Инициализация игры с настройками.
const game = new Game(
  {
    trackLength: 70,
  },
  playerName
);

// Запуск игры.
game.play();
