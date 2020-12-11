'use strict';

require('@code-fellows/supergoose');

const Dragon = require('../src/models/dragons-collection.js');

const dragon = new Dragon();

describe('Dragon Model', () => {
  it('can create() a new dragon', () =>{
    let testDragon = {name:'George The Dragon',age: 400, color: 'green'};
    let expected = {name:'George The Dragon',age: 400, color: 'Green'};
    return dragon.create(testDragon)
      .then(dragonInfo => {
        Object.keys(testDragon).forEach(key => {
          expect(dragonInfo[key].toEqual(expected[key]));
        });
      });
  });
  
  it('can get() a Dragon from storage', ()=>{
    let testDragon = {name:'Ragnor',age: 250, color: 'Red'};
    let expected = {name:'Ragnor',age: 250, color: 'Red'};
    return dragon.create(testDragon)
      .then(dragonInfo => {
        return dragon.get(dragonInfo._id)
          .then(dragonItem =>{
            Object.keys(testDragon).forEach(key =>{
              expect(dragonItem[key]).toEqual(expected[key]);
            });
          });
      });
  });
});