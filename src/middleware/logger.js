'use strict';

module.exports = (request, response,next)=>{
  console.log(`METHOD: ${request.method}, PATH: ${request.path}`);
  next();
};