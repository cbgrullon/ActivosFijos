'use strict'
let db = require('../schemas/models');
let estado = require('../schemas/estado');
let responseModel =require('../returnResult');
class EstadosController{
    constructor(){}
    getEstados() {
        return new Promise((resolve,reject)=>{
            try {
                estado.find({},(error,items)=>{
                    if(error){
                        console.log(error);
                        return resolve(new responseModel(500,error));
                    }
                    return resolve(new responseModel(200,items));
                });    
            } catch (err) {
                console.log(err);
                return resolve(new responseModel(500,err));
            }
        });
    }
    getEstado(id){
        return new Promise((resolve,reject)=>{
            try {
                estado.findById(id,(err,estado)=>{
                    if(err){
                        console.log(err);
                        return resolve(new responseModel(500,err));
                    }
                    return resolve(new responseModel(200,estado));
                });
            } catch (error) {
                console.log(error);
                return resolve(new responseModel(500,error));
            }
        });
    }
    insertEstado(req){
        return new Promise((resolve,reject)=>{
            try {
                if(!isValidEstado(req))
                {
                    return resolve(new responseModel(400,"Parametros invalidos"));
                }
                estado.find({abreviatura:req.abreviatura},(err,collection)=>{
                    if(err){
                        console.log(err);
                        return resolve(new responseModel(500,err));
                    }
                    if(collection.length!=0){
                        return resolve(new responseModel(400,'Estado ya existe'));
                    }
                    let estado = new estado();
                    estado.abreviatura= req.abreviatura;
                    estado.descripcion= req.descripcion;
                    estado.save((err)=>{
                        if(err){
                            console.log(err);
                            return resolve(new responseModel(500,err));
                        }
                        return resolve(new responseModel(200,estado));
                    });
                });
            } catch (error) {
                console.log(err);
                return resolve(new responseModel(500,error));
            }
        });
    }
    updateEstado(req){
        return new Promise((resolve,reject)=>{
            try {
                if(!isValidEstado(req)){
                    return resolve(new responseModel(403,"Parametros invalidos"));
                }
                estado.findById(req.id,(err,response)=>{
                    if(err){
                        console.log(err);
                        return resolve(new responseModel(500,err));
                    }
                    if(!response){
                        return resolve(new responseModel(404,"Estado no existe."));
                    }
                    estado.findByIdAndUpdate(req.id,{descripcion:req.descripcion},(err1)=>{
                        if(err1){
                            console.log(err1);
                            return resolve(new responseModel(500,err1));
                        }
                        return resolve(new responseModel(200,"Completado"));
                    });
                });
            } catch (error) {
                console.log(error);
                return resolve(new responseModel(500,error));
            }
        });
    }
}
function isValidEstado(req){
    if(!req.abreviatura ||!req.descripcion){
        return false;
    }
    if(req.descripcion=="" ||req.abreviatura==""){
        return false;
    }
    return true;
}
module.exports= exports= new EstadosController();