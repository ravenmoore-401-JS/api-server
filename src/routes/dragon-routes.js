'use strict';

const express = require('express');
const DragonCollection = require('../models/dragons-collection');
const dragonModel = require('../models/dragons-model');
const dragon = new DragonCollection(dragonModel);

const mongoose = require('mongoose');

const router = express.Router();



const createDragon = async(request,response)=>{
  let newDragon = await dragon.create(dragon);
  console.log('dragon created', newDragon);
  mongoose.disconnect();
};
const getOneDragon = async(request,response)=>{
  let oneDragon = await dragon.get(dragon._id);
  console.log('one Dragon', oneDragon);
  mongoose.disconnect();
};
const getDragons = async(request,response)=>{
  let allDragons = await dragon.get();
  console.log('all Dragons', allDragons);
  mongoose.disconnect();
};
const updateDragon = async(request,response)=>{
  let update = await dragon.update(dragon._id,dragon);
  console.log('updated dragon', update);
  mongoose.disconnect();
};
const destroyDragon = async(request,response)=>{
  let distroy = await dragon.delete(dragon._id);
  console.log('deleted the dragon',distroy);
  mongoose.disconnect();
};

router.get('/dragons', getDragons);
router.get('/dragons/:id', getOneDragon);
router.post('/dragons',createDragon);
router.put('/dragons/:id', updateDragon);
router.delete('/dragons/:id', destroyDragon);

module.exports = router;

