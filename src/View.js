const playerName = process.argv[2] || 'DEFAULT PLAYER 👽';

class View {
  render(track) {
    const yourTeamName = '🚀🚀🚀🚀';

    // Тут всё рисуем.
    console.clear();
    console.log(`Player: ${playerName}`);
    console.log();
    console.log(track.join(''));
    console.log('\n\n');
    console.log(`Created by ${yourTeamName} with love`);
  }
}

module.exports = View;
