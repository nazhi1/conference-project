const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const Presentation = sequelize.define('presentation',{
  presentationID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  userID: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  eventID: {
    type: Sequelize.STRING,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  video_url: {
    type: Sequelize.STRING,
    allowNull: true
  },
  pdf_url: {
    type: Sequelize.STRING,
    allowNull: true,
  }
});
module.exports = Presentation;
