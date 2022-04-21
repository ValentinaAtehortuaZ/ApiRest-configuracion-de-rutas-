import express from 'express'

//Importo el controlador habitaciones

import {ControladorHabitacion} from '../controllers/ControladorHabitacion.js'

//Importo el controlador de reserva
import {ControladorReserva} from '../controllers/ControladorReserva.js'

export let rutas=express.Router()

//Creo un objeto de la clase controladorHabitacion

let controladorHabitacion=new ControladorHabitacion()

let controladorReserva=new ControladorReserva()

//Defino las rutas 

//Rutas para los servicios de habitaciones

//1. Servicio Agregar habitación

rutas.post('/api/v1/habitaciones/', controladorHabitacion.insertar
  )
  
//2. Servicio para buscar todas las habitaciones
rutas.get('/api/v1/habitaciones/',  controladorHabitacion.buscarTodos)

//3. Servicio buscar por ID
rutas.get('/api/v1/habitaciones/:id/', controladorHabitacion.buscarPorId)

//4. Servicio cambiar habitaciones ID
  rutas.put('/api/v1/habitaciones/:id', controladorHabitacion.editar)

 //5.Servicio eliminar habitaciones ID, los dos puntos indican q lo que sigue es un elemento variable
 rutas.delete('/api/v1/habitaciones/:id', controladorHabitacion.eliminar)

//Rutas para los servicios de reserva

//1. Servicios ingresar reserva
rutas.post('/api/v1/habitaciones/reserva/', controladorReserva.insertar)

//2. Servicios buscar ReservaId
rutas.get('/api/v1/habitaciones/reserva/:id', controladorReserva.buscarPorId)

//3.Servicios Editar reserva
rutas.put('/api/v1/habitaciones/reserva/:id', controladorReserva.editar)

//4. Servicios eliminar reserva
rutas.delete('/api/v1/habitaciones/reserva/:id', controladorReserva.eliminar)

