const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('players', 'anastasiya', 'kaizokuou', {
  host: 'localhost',
  dialect: 'postgres',
});

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection successful');
  } catch (error) {
    console.log("Error: can't authorize. ", error.message);
  }
};

// testConnection();

const addPlayer = async (name, score) => {
  const sql = `insert into players (name, score) values ('${name}', ${score});`;
  const options = { logging: false };

  try {
    await sequelize.query(sql, options);
  } catch (error) {
    console.log("Can't add data to the table");
  }
};

module.exports = addPlayer;
