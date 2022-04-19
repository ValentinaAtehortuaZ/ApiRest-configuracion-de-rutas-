import express from 'express'

export let rutas=express.Router()

//Defino las rutas 

//Rutas para los servicios de habitaciones

//1. Servicio Agregar habitación

rutas.post('/api/v1/habitaciones/', function (req, res) {
    res.send('Hello World')
  })
  
//2. Servicio para buscar todas las habitaciones
rutas.get('/api/v1/habitaciones/', function (req, res) {
    res.send('Hello World')
  })

//3. Servicio buscar por ID
rutas.get('/api/v1/habitaciones/', function (req, res) {
    res.send('Hello World')
  })

//4. Servicio cambiar habitaciones
  rutas.put('/api/v1/habitaciones/', function (req, res) {
    res.send('Hello World')
  })

 //5.Servicio eliminar habitaciones
 rutas.delete('/api/v1/habitaciones/', function (req, res) {
    res.send('Hello World')
  })

//Rutas para los servicios de reserva

//1. Servicios ingresar reserva
rutas.post('/api/v1/habitaciones/reserva/', function (req, res) {
    res.send('Hello World')
  })