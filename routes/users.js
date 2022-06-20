var express = require('express');
var router = express.Router();
var controllers = require("../controllers/users")
var multer = require('multer');
const upload = multer({ dest: 'public/images/uploads' });

router.get('/me', controllers.myProfile);

router.get('/me/edit', controllers.edit);
router.post('/me/edit', upload.single('profilePhoto'), controllers.update);

router.get('/me', controllers.profile);


module.exports = router;
