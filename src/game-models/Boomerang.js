// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor({ position }) {
    this.skin = '🌀';
    this.position = position;
  }

//   fly(heroPosition, enemyPosition) {
//     let timer = 0;
//     setInterval(() => {
//       if (timer < 10 && this.position < enemyPosition) {
//         this.moveRight();
//         timer += 1;
//       } else if (
//         timer >= 10 &&
//         timer < 20 &&
//         this.position > heroPosition + 1
//       ) {
//         this.moveLeft();
//         timer += 1;
//       }
//     }, 50);
//   }

//   moveLeft() {
//     // Идём влево.
//     this.position -= 1;
//   }

//   moveRight() {
//     // Идём вправо.
//     this.position += 1;
//   }
 }

module.exports = Boomerang;
