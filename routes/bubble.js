//jshint esversion:6
const express = require('express');
const router = express('router');
const bubbleSort = require('../bubbleSort');

router.get('/', (req, res) =>{
  res.render('index');
});

router.post('/', (req, res) =>{
  console.log(req.body);
  
  res.send(req.body);



});


module.exports = router;