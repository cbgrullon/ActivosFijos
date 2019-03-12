'use strict'
const mongoose = require('mongoose');
const schema=mongoose.Schema;
const estadoSchema = schema({
    descripcion:String,
    abreviatura:String
});
module.exports=exports=mongoose.model('estado',estadoSchema);