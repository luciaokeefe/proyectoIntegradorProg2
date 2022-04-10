var express = require('express');
var router = express.Router();
var controllers = require('../controllers/index');


router.get('/', controllers.indexAll);
router.get('/login', controllers.login);
router.get('/register', controllers.register);

module.exports = router;
