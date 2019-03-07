'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const departamentoSchema= Schema({
    descripcion:String,
    idEstado:String
});
module.exports=exports=departamentoSchema;