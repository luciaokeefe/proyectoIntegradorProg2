var express = require('express');
const controllers = require('../controllers/index');
var router = express.Router();
var controller = require('../controllers/index');


router.get('/', controllers.index);

module.exports = router;
