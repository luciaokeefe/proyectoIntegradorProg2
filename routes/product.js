var express = require('express');
var router = express.Router();
var controllers = require('../controllers/product');

router.get("/productAdd", controllers.add); 
router.get("/:id", controllers.show); 




module.exports = router; 
