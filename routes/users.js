var express = require('express');
var router = express.Router();
const usersController = require("../controllers/usersController")
/* GET users listing. */
//leer todos
router.get('/', usersController.getAll );
  //crear
  router.post('/', usersController.create);
  
  router.post('/login', usersController.validate);

      
module.exports = router;
