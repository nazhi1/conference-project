const express = require('express')
const userController = require('../controllers/user')
const eventController = require('../controllers/event')
const presentationController = require('../controllers/presentation')
const isAuth = require('../middleware/is-auth')

const router = express.Router()

router.post('/auth/register',userController.registerUser);
router.post('/auth/login', userController.login)
router.get('/users',isAuth,userController.getUsers)

router.post('/event/add-event',isAuth,eventController.addEvent)
router.get('/event/{eventId}',isAuth,eventController.getEventById)
router.get('/event/events',isAuth,eventController.getAllEvents)
router.get('/event/user-events',isAuth,eventController.getUserEvents)


router.post('/presentation/add-presentation',isAuth,presentationController.addPresentation)
router.get('/presentation/presentations',isAuth,presentationController.getAllPresentation)
module.exports = router;
