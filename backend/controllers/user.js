
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const uuid = require('uuid')

async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}

async function validatePassword(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}

exports.registerUser = async (req,res,next)=>{
  const {first_name,last_name,email,password} = req.body
  const hashedPassword = await hashPassword(password)
  try {
    const user = await User.create({first_name, last_name, email, password: hashedPassword

    })
    const token = jwt.sign({ userId: user.id}, process.env.JWT_SECRET, {
      expiresIn: "1d"
    })
    res.json({first_name:user.first_name,last_name:user.last_name,email:user.email,token})
  } catch(err){
    console.log(err)
  }
}

exports.login = async (req,res,next)=>{
  const {email,password}=req.body
  try {
    const user = await User.findOne({ where: {email: email }});
    console.log(user);
    if (!user) return next(new Error('Email does not exist'));
    const validPassword = await validatePassword(password, user.password);
    if (!validPassword) return next(new Error('Password is not correct'))
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1d"
    });
    res.json({first_name:user.first_name,last_name:user.last_name,email:user.email,token})
  } catch (err){
    console.log(err)
  }
}
exports.getUsers = async (req,res,next)=>{
  try {
    const users= await User.findAll({attributes: ['first_name','last_name','email']})
    res.json(users);
  } catch (err){
    return next(new Error('Error retrieving users'))
  }
}
