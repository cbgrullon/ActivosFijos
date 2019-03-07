'use strict'
const schema = require('mongoose').Schema;
const tiposActivosSchema = Schema({
    descripcion:String,
    cuentaCompra:String,
    cuentaDepreciacion:String,
    idEstado:String
});
module.exports=exports = tiposActivosSchema;