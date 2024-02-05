const mongoose= require("../config/mongodb")
const errorMessage= require("../utils/errorMessage")


const productsSchema= mongoose.Schema({
    name:{
        type:String,
        required:[true,errorMessage.GENERAL.campo_obligatorio],
        minLength:3,
    },
    price:{
        type:Number,
        required:[true,errorMessage.GENERAL.campo_obligatorio],
        min:[0, errorMessage.GENERAL.minLength],
       // get: function(value){
         //   return value * 1.21
        //},
        //set: function(value){
         //   return value * 1.21
//        }


    },
    description:String,
    quantity:Number,
    status:String,
    category:{
        type: mongoose.Schema.ObjectId,
        ref:"categories"
    },
    imagen:{
        type: String,
        required: [true,errorMessage.GENERAL.campo_obligatorio]
    }

})
productsSchema.virtual("price_currency").get(function(){
    return `$${this.price}`
})


productsSchema.set("toJSON",{getters:true,setters:true,virtuals:true})

productsSchema.plugin(mongoose.mongoosePaginate)

module.exports= mongoose.model("productos",productsSchema)