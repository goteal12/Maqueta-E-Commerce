var express = require('express');
var router = express.Router();
const productosController = require("../controllers/productosController")
/* GET users listing. */
//leer todos
router.get('/', productosController.getAll );
//leer por id
router.get('/:id', productosController.getById);
  //crear
  router.post('/',(req,res,next)=>req.app.verifyToken(req,res,next), productosController.create);
//actualizar
    router.put('/:id', productosController.update);
//eliminar
      router.delete('/:id', productosController.delete);
      
module.exports = router;
