var express = require('express');
var router = express.Router();
const httpRequest = require('../http_request/itunes_request');

/* GET home page. */
router.get('/', function(req, res, next) {
  let response = {}
  if (req.query.term) {
    httpRequest.request(req.query.term, res);
  } else {
    return res.status(400).send('Please provide search term in a correct format');
  }
});

module.exports = router;
