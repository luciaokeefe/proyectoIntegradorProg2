var express = require('express');
var router = express.Router();
var controllers = require('../controllers/index');


router.get('/', controllers.indexAll);

router.get('/login', controllers.login);

router.get('/register', controllers.register);
router.post('/register', controllers.store);

router.get('/searchResults', controllers.results);



module.exports = router;
