// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor({ position }) {
    this.skin = '🌀';
    this.position = position;
  }
}

module.exports = Boomerang;
