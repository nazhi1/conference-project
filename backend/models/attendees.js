const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const Attendee= sequelize.define('attendee',{
  eventID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  userID: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});
module.exports = Attendee;
