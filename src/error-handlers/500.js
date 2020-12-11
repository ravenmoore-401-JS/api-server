'use strict';

function woopsHandler(error,request,response,next){
  response.status(500);
  response.statusMessage = 'We seem to have created a hole in the fabric of space and time! we will get right on that';
  response.json({ error: error });
}

module.exports = woopsHandler;