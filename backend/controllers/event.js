const Event = require('../models/event')

exports.addEvent = async (req,res,next)=>{
  const {title} = req.body
  const userId = req.userId
  try {
    const event = await Event.create({user_id:userId,title})
    res.json(event)
  } catch (e) {
    console.log(e)
    res.json({error:"Server error 500"})
  }
}
exports.getAllEvents = async (req,res,next)=>{
  try {
    const events = await Event.findAll()
    res.json(events)
  } catch (e) {
    res.json({error:"Server error 500"})
  }
}
exports.getUserEvents = async (req,res,next)=>{
  try {
    const events = await Event.findAll({where:{user_id:req.userId}})
    res.json(events)
  } catch (e) {
    res.json({error:"server error 500"})
  }
}
exports.getEventById = async (req,res,next)=>{
  console.log('looking for single event')
  console.log(req.params.eventId)
  try {
    const event = await Event.findByPk(req.params.eventId)
    res.json(event)
  } catch (e) {
    res.json({error:"Server error 500"})
  }
}
