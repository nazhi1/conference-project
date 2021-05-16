const Sequelize = require('sequelize')

const sequelize = new Sequelize('poster','root','',{
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
