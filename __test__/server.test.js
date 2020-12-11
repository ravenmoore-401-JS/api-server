'use strict';

const {server} = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('web server', () =>{
  it('should respond with a 404 on bad routes', () => {
    return mockRequest
      .get('/thyme')
      .then(results =>{
        expect(results.status).toBe(404);
      });
  });
  it('should respond with a 404 on bad methods', () => {
    return mockRequest
      .put('/')
      .then(results =>{
        expect(results.status).toBe(404);
      });
  });

});
