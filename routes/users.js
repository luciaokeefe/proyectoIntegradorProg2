var express = require('express');
var router = express.Router();
var controllers = require("../controllers/users")

router.get('/', controllers.users);
router.get('/edit', controllers.edit);


module.exports = router;
