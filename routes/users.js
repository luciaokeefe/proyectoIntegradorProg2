var express = require('express');
var router = express.Router();
var controllers = require("../controllers/users")

router.get('/me', controllers.users);
router.get('/me/edit', controllers.edit);


module.exports = router;
