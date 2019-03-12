'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const api = express();
const mongoose = require('mongoose');
const config = require('./config');
//Rutas
let estadoRoutes = require('./routes/estado');
api.use('/api/estado',estadoRoutes);

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({extended:false}));
api.use(cors);

let apiPort = process.env.PORT || 5151;
let mongoCString = process.env.dbString || 'mongodb://apiuser:hey123@ds123675.mlab.com:23675/activosfijosdb';
api.listen(apiPort,()=>{
    console.log(`Api is running on port: ${apiPort}`);
    mongoose.connect(mongoCString,config.DataBase.options).then(()=>{
        console.log(`Connected to MLAB`);
    })
    .catch((data)=>{
        console.log(`No se puede conectar a la base de datos: ${data}`);
    });
});