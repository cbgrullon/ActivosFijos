'use strict'
const schema = require('mongoose').Schema;
const activosFijosSchema = schema({
    descripcion:String,
    idDepartamento:String,
    idTipoActivo:String,
    fechaRegistro:String,
    valorCompra:Number,
    depreciacionAcumulada:Number
});
module.exports=exports = activosFijosSchema;