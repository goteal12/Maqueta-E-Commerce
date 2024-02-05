const mongoose= require("../config/mongodb");
const bcrypt = require("bcrypt")
const errorMessage= require("../utils/errorMessage");
const validators = require("../utils/validators");

const usersSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:{
        type:String,
        validate:{
            validator:function(value){
              return  validators.isGoodPassword(value)
            },
            message: errorMessage.USERS.passwordIncorrect
        }
    }
});

usersSchema.pre("save", function(next){
    this.password =  bcrypt.hashSync(this.password,10)
    next()
})

module.exports= mongoose.model("users",usersSchema)