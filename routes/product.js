
var express = require('express');
var router = express.Router();
var controllers = require('../controllers/product');
var multer = require('multer');
const upload = multer({ dest: 'public/images/uploads' });

router.get("/productAdd", controllers.add);
router.post('/productAdd', upload.single('IMG'), controllers.store);

router.get("/:id", controllers.show); 

router.get('/:id/edit', controllers.edit);
router.post('/:id/edit', upload.single('IMG'), controllers.update);






module.exports = router; 
