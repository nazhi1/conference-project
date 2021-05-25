const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const Event = sequelize.define('event',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
module.exports = Event;
