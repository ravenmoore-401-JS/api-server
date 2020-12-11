'use sterict';

const logger = require('../src/middleware/logger');

describe('logger middleware', () => {
  let consoleSpy;
  let request = {};
  let response = {};
  let next = jest.fn(); // spy on the next method

  beforeEach(() => {
    // Attach to the console
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() =>{
    // put the console back
    consoleSpy.mockRestore();
  });

  it('shows us the method and path of output', ()=>{
    logger(request,response,next);
    expect(consoleSpy).toHaveBeenCalled();
  });
  
})