const productosModel= require("../models/productosModel")
const categoryModel= require("../models/categoriesModel")
module.exports = {
    getAll: async function(req, res, next) {
        try{

            let queryFind= {}
            if (req.query.buscar){
                queryFind= {
                    name:{$regex:`.*${req.query.buscar}.*`,$options:"i"}
                }
            }
            const documents = await productosModel.paginate(queryFind,{
                name:req.query.buscar
            },{
                limit:req.query.limit,
                page:req.query.page || 1,
                sort:{price:+1},
                select:'name price'
            })

          //  const documents = await productosModel.find().populate("category").select("name price").sort({price:-1})
            res.status(200).json(documents)
        }catch(e){
            console.log(e)
            next(e)
        }


},
getById: async function(req, res, next) {
    try{
        const document = await productosModel.findById(req.params.id)
        res.status(200).json(document)
    }catch(e){
        console.log(e)
        next(e)
    }
},

create: async function(req, res, next) {
  try{
   const category = await categoryModel.findByIdAndValidate(req.body.category)
   if(category.error){
        return res.json(category)
   } 
   const document= new productosModel({
        name:req.body.name,
        price: req.body.price,
        imagen: req.body.imagen,
        description: req.body.description,
        quantity: req.body.quantity,
        category: req.body.category
    })
    console.log(req.body)
    const product = await document.save()
    res.status(201).json(product)
  }catch(e){
    console.log(e)
   // res.status(400).json({message:e.message})
   e.status=400
   next(e)
  }
    
    },

    update:async function(req, res, next) {
        try{
            const update = await productosModel.updateOne({_id:req.params.id},req.body)
            res.status(200).json(update)
        }catch(e){
            console.log(e)
            next(e)
        }
        },

        delete:async function(req, res, next) {
            try{
                const deleteResponse = await productosModel.deleteOne({_id:req.params.id})
                res.json(deleteResponse)
            }catch(e){
                console.log(e)
                next(e)
            }
            },

}