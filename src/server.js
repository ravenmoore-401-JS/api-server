'use strict';

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const logger = require('./middleware/logger');
const lostHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const dragonRoutes = require('./routes/dragon-routes');

const mongoOptions = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose.connect(process.env.MONGOOSE_URI, mongoOptions);


app.use(express.json());
app.use(logger);


app.get('/', (request, response) => {
  response.status(200).send('WE ARE DRAGONSS');
});
app.use(dragonRoutes);


app.use('*',lostHandler);
app.use(errorHandler);


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('I am connected');
});


module.exports = {
  server: app,
  start: port =>{
    if(!port){throw new Error('You have Missed the Space Port');}
    app.listen(port, () => {
      console.log(`waking up on ${port}`);
    });
  }};
