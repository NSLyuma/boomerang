const addPlayer = require('./db');

class View {
  render(track, score, killedEnemies) {
    const yourTeamName = '🚀🚀🚀🚀';

    // Тут всё рисуем.
    console.clear();
    console.log(`Player: ${playerName} | score: ${score}`);
    console.log('\n\n');
    console.log(track.join(''));
    console.log('\n\n');
    console.log(
      'Как хорошо, что все мы здесь сегодня собрались ',
      killedEnemies
    );
    console.log(`Created by ${yourTeamName} with love`);
  }
}

module.exports = View;
