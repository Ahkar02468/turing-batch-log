var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //next is used as middleware to rouet adjecent case
  res.render('index', { title: 'Express' });
});

module.exports = router;
