'use strict';

require('dotenv').config();
const server = require('./src/server');
const mongoose = require('mongoose');

const mongoOptions = {useNewUrlParser: true, useUnifiedTopology: true};
mongoose.connect(process.env.MONGOOSE_URI, mongoOptions);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('I am connected');
});

server.start(process.env.PORT);
