class View {
  render(track) {
    const yourTeamName = '🚀🚀🚀🚀';

    // Тут всё рисуем.
    console.clear();
    console.log(track.join(''));
    console.log('\n\n');
    console.log(`Created by ${yourTeamName} with love`);
  }
}

module.exports = View;
