require('dotenv').config()
const express = require('express');
const cors = require('cors')
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const route = require('./routes/route')
const sequelize = require('./util/database')
const User = require('./models/user')
const Event = require('./models/event')
const Presentation = require('./models/presentation')

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use('/',route)

User.hasMany(Event,{ foreignKey: 'user_id'})
User.hasMany(Presentation, {foreignKey: 'user_id'})
Event.hasMany(Presentation, {foreignKey: 'event_id'})
sequelize.sync({alter: true})
  .then(result=>{
    app.listen(port,()=>console.log('server running at port 30001'))
  })
  .catch(err=> console.log(err))




