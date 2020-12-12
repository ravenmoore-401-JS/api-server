'use strict';

const express = require('express');
const DragonCollection = require('../models/dragons-collection');
const dragon = new DragonCollection();

const router = express.Router();


const getDragons = async(request,response)=>{
  let allDragons = await dragon.get();
  console.log('all Dragons', allDragons);
  response.status(200).json(allDragons);
};

const getOneDragon = async(request,response)=>{
  const _id = request.params.id;
  let oneDragon = await dragon.get(_id);
  console.log('one Dragon', oneDragon);
  response.status(200).json(oneDragon);
};
const createDragon = async(request,response)=>{
  const dragonInfo = request.body;
  let newDragon = await dragon.create(dragonInfo);
  console.log('dragon created', newDragon);
  await response.status(200).json(newDragon);
};
const updateDragon = async(request,response)=>{
  const _id = request.params.id;
  const dragonInfo = request.body;
  let update = await dragon.update(_id,dragonInfo);
  console.log('updated dragon', update);
  response.status(200).send(update);
};
const destroyDragon = async(request,response)=>{
  const _id = request.params.id;
  let distroy = await dragon.delete(_id);
  console.log('deleted the dragon',distroy);
  response.status(200).send('dragon deleted.');
};

router.get('/dragons', getDragons);
router.get('/dragons/:id', getOneDragon);
router.post('/dragons',createDragon);
router.put('/dragons/:id', updateDragon);
router.delete('/dragons/:id', destroyDragon);

module.exports = router;

