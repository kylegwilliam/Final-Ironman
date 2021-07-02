const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();

// Configure multer so that it will upload to '/public/images'
const multer = require('multer')
const upload = multer({
  dest: '../front-end/public/images/',
  limits: {
    fileSize: 50000000
  }
});

const users = require("./users.js");
const User = users.model;
const validUser = users.valid;

const workoutSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },

  distance: String,
  energy: String,
  type: String,

  created: {
    type: Date,
    default: Date.now
  },
});



const Workout = mongoose.model('workout', workoutSchema);

//create the endpoints for the api
//edit
//delete

router.get('/', async (req, res) => {
  try {
    res.send({
      workout: req.workout
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});





router.post('/', async (req, res) => {

    const activity = new Activity ({
      distance: req.body.distance,
      energy: req.body.energy,
      type: req.body.type
    });

  try {

    await activity.save();
    req.send(activity);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }

});

router.post('/insert', async (req, res) => {

  try {

    const workout = await User.findOne({
      type: req.body.type
    });
    if (!type)
      return res.status(403).sent({
        message: "this isnt working"
      });

    req.session.userID = user._id;

    return res.send({
      workout: workout
    });

  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }

});



router.post('/update', async (req,res) => {


});

router.post('/delete', async (req,res) => {

});



/*
router.post('/', async (req, res) => {
  // Make sure that the form coming from the browser includes all required fields,
  // otherwise return an error. A 400 error means the request was
  // malformed.
  if (!req.body.distance || !req.body.energy || !req.body.type )
    return res.status(400).send({
      message: "Workout type, distance, and how you feel are required"
    });

  try {

    //  Check to see if username already exists and if not send a 403 error. A 403
    // error means permission denied.


    // create a new user and save it to the database
    const activity = new Activity({
      distance: req.body.distance,
      energy: req.body.energy,
      type: req.body.type,

    });
    await activity.save();
    // set user session info
    req.session.userID = user._id;

    // send back a 200 OK response, along with the user that was created
    return res.send({
      user: user
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

// get logged in user
router.get('/', validUser, async (req, res) => {
  try {
    res.send({
      workout: req.workout
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});
*/

module.exports = {
  routes: router,
  model: Workout,
  valid: validUser,
};
