//Importo el paquete express
//const express = require('express') //forma vieja

import express from 'express' // forma actual

//iMPORTAR LAS RUTAS DEL API

import {rutas} from '../routes/rutas.js'

export class Servidor{

    constructor(){

        this.app = express()
        this.atenderServicios()
    }

    encenderServidor(){
        this.app.listen(process.env.PORT,function(){
            console.log(`Servidor encendido en ${process.env.PORT}`)
        })
    }

    atenderServicios(){
       this.app.use('/',rutas)    
    }

    conectarconBD(){}
}

   