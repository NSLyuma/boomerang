const addPlayer = require('./db');

class View {
  render(track, score, totalScore, playerName) {
    const yourTeamName = '🚀🚀🚀🚀';

    // Тут всё рисуем.
    console.clear();
    console.log(`Player: ${playerName} | score: ${score}`);
    console.log('\n\n');
    console.log(track.join(''));
    console.log('\n\n');
    console.log(`Total score ${totalScore}`);
    console.log(`Created by ${yourTeamName} with love`);
  }
}

module.exports = View;
