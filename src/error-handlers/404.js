'use strict';

function lostHandler(request,response,next){
  response.status(404);
  response.statusMessage = 'You seem to be Lost';
  response.send(`error page not found. ${response.statusMessage}`);
}

module.exports = lostHandler;