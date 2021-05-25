const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const Presentation = sequelize.define('presentation',{
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
  event_id: {
    type: Sequelize.INTEGER,
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
