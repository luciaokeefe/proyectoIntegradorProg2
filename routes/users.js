var express = require('express');
var router = express.Router();
var controllers = require("../controllers/users")

router.get('/me', controllers.myProfile);

router.get('/me/edit', controllers.edit);
router.post('/me/edit', controllers.edit);

router.get('/me', controllers.profile);


module.exports = router;
