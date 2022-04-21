//Controlador tiene la logica del negocio( que tengo que hacer)
export class ControladorHabitacion{

    constructor(){}

    insertar(request,response){

        //Recibir los datos de pa peticion

        let datosPeticion=request.body//Recibo datos

        //Conectar base datos

        //Ejecutar la consulta(decirle que metodo debe utilizar)

        //Envio la respuesta
        response.status(200).json({
            mensaje:"Exito en el ingreso de datos",
            datosIngresados:datosPeticion,
            estado:true
        })
    }

    buscarTodos(request,response){
        let datosPrueba=[{nombre:"hab1",precio:300000},{nombre:"hab2",precio:400000}]//Quitar cuando tengamos base de datos
    
        response.status(200).json({
            mensaje:"Exito buscando la informacion ",
            datos:datosPrueba,
            estado:true
        })
    
    }

    buscarPorId(request,response){
        let id=request.params.id//Id que llega por la URL

        response.status(200).json({
            mensaje:"Exito buscando habitacion por ID ",
            datos:"Datos del id: "+id,
            estado:true
        })
    }

    editar(request,response){
        let id=request.params.id //id que llega por la URL
        let datosPeticion=request.body //RECIBE DEL BODY

        response.status(200).json({
            mensaje:"Exito editando la habitacion por ID ",
            datos:"Datos del id: "+id,
            estado:true
        })
    
    }

    eliminar(request,response){
        let id=request.params.id //id que llega por la URL
        
        response.status(200).json({
            mensaje:"Exito eliminando la habitacion por ID ",
            datos:"Datos del id: "+id,
            estado:true
        })
    }



}