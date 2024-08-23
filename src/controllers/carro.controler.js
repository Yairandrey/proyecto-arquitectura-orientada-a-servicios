/**Creo las funciones que ejecuta la ruta en route */

/**Importo las funciones que me trae la datade los carros */
import carroModel from "../models/carro.model.js"
import  getModel  from "../models/modelo.modelo.js";


/**Tipo de Funciones que se pueden exportar */

export async function getAllCar(req,res){
    let data = await carroModel.getCarrosModel();
    let modelo = await getModel.getModel();
    res.status(200).json({
        "success" :true,
        "msg" : "Llegamos a la función getAllCar",
        "data" : data,
        "modelo": modelo
    })
}
export const postCar = (req,res)=>{
    res.status(200).json({
        "success" :true,
        "msg" : "Llegamos a la función postCar"
    })
}

/**Exporto por defecto todas las funciones */
export default {
    getAllCar,
    postCar
}