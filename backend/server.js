// "includes" the dotenv module to manage environment variables
require('dotenv').config();

// "includes" the express module
const express = require('express');
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts');

// creates the express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use('/api/workouts', workoutRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to db');
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('listening of port 4000!')
    });
  })
  .catch((error) => {
    console.log(error);
  })
