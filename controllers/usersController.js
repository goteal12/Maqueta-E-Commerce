const usersModel= require("../models/usersModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

module.exports = {
    getAll: async function(req, res, next) {
        try{
            const documents = await usersModel.find(req.body.name)
            res.json(documents)
        }catch(e){
            next(e)
        }


},

validate:  async function(req, res, next) {
    try{
        const users = await usersModel.findOne({email:req.body.email}) 
        if(!users){
            res.json({message:"El email y/o contraseña es invalido"})
            return
        }  

        if(bcrypt.compareSync(req.body.password, users.password )){
            const token= jwt.sign({userId:users._id},req.app.get("secretKey"),{expiresIn:'1h'})
            res.json({token})
        }else{
            res.json({message:"El email y/o contraseña es invalido"})
            return
        }

    }catch(e){
        next(e)
    }


},

create: async function(req, res, next) {
  try{
    console.log(req.body)
    console.log(req.body.name)
    const document = new usersModel({

        name:req.body.name,
        email:req.body.email,
        password:req.body.password

    })
    const response = await document.save()

    res.json(response)
  }
catch(e){
    next(e)
}},
}
  

