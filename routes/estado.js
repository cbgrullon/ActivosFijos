'use strict'
let controller = require('../controllers/estados');
let Router = require('express').Router();
Router.get('/',(req,resp)=>{
    controller.getEstados().then((data)=>{
        return resp.status(data.status).send(data.response);
    });
});
Router.get('/:id',(req,res)=>{
    controller.getEstado(req.params.id).then((data)=>{
        return res.status(data.status).send(data.response);
    });
});
Router.post('/',(req,res)=>{
    controller.insertEstado(req).then((data)=>{
        return res.status(data.status).send(data.response);
    });;
});
Router.put('/',(req,res)=>{
    controller.updateEstado(req).then((data)=>{
        return res.status(data.status).send(data.response);
    });
});
module.exports=  exports= Router;