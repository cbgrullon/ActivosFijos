'use strict'
const Schema = require('mongoose').Schema;
const tiposActivosSchema = Schema({
    descripcion:String,
    cuentaCompra:String,
    cuentaDepreciacion:String,
    idEstado:String
});
module.exports=exports = tiposActivosSchema;