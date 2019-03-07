'use strict'
const schema = require('mongoose').Schema;
const empleadoSchema = schema({
    nombre:String,
    cedula:String,
    idDepartamento:String,
    tipoPersona:String,
    fechaIngreso:Date,
    idEstado:String
});
module.exports = exports= empleadoSchema;