//Importando el paquete dotenv
//require('dotenv').config() // forma tradicional
import 'dotenv/config' // forma actual

//Importo la clase Servidor 

import {Servidor} from './Server/Servidor.js'

// Creo un objeto de la clase servidor. los objetos son variables

let servidor=new Servidor()

//Llamo al metodo encender servidor
servidor.encenderServidor()

