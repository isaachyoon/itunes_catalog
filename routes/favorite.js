var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var favorite = require('../db/models');

router.get('/getItems', async function getItem(req, res, next) {
  var favoriteItems = await favorite.find({});
  console.log('12', favoriteItems)
  res.json(favoriteItems);
});

router.post('/addItem', async function addItem(req,res, next) {
  var log = new favorite(req.body);
  log.save(async function(err, item) {
    var favoriteItems = await favorite.find({});
    res.json(favoriteItems);
  })
})

router.post('/removeItem', async function removeItem(req,res, next) {
  var log = favorite.deleteOne(req.body, async function (err, item) {
    if (err) {
      console.log('something happened', err)
    } else {
      var favoriteItems = await favorite.find({});
      res.json(favoriteItems);
    }
  });
})

module.exports = router;
