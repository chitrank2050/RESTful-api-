var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '-Api-',author: 'Chitrank Agnihotri',demo:'/api/chitrank/demo'});
});

module.exports = router;
