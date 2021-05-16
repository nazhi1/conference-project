const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const Event = sequelize.define('event',{
  eventID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  userID: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
module.exports = Event;
