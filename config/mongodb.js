const mongoose = require("mongoose")
const mongoosePaginate= require ("mongoose-paginate-v2")

mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`)
.then(()=>{console.log("Conectado")})
.catch((error=>console.log(error)))

mongoose.mongoosePaginate= mongoosePaginate

module.exports = mongoose