var express = require('express');
var router = express.Router();
const categoriesController = require("../controllers/categoriesController")
/* GET users listing. */
//leer todos
router.get('/', categoriesController.getAll );
  //crear
  router.post('/', categoriesController.create);

      
module.exports = router;
