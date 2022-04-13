var express = require('express');
var router = express.Router();
var controllers = require('../controllers/product');


router.get("/:id", controllers.show);

module.exports = router;
