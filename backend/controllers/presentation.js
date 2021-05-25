const Presentation = require('../models/presentation')

exports.addPresentation = async (req,res,next)=>{
  const {event_id,title,video_url,pdf_url} = req.body
  try {
    const presentation = await Presentation.create({user_id:req.userId,event_id,title,video_url,pdf_url})
    res.json(presentation)
  } catch (e) {
    res.json({error:'Server error 500'})
  }
}
exports.getAllPresentation = async (req,res,next)=>{
  try {
    const presentations = await Presentation.findAll()
    res.json(presentations)
  } catch (e) {
    res.json({error:'server error 500'})
  }
}
