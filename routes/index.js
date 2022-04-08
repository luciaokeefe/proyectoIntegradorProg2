var express = require('express');
var router = express.Router();
var controllers = require('../controllers/index');


router.get('/', controllers.indexAll);

module.exports = router;
