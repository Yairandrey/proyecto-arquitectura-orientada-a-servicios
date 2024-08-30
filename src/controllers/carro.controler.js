/**Creo las funciones que ejecuta la ruta en route */

/**Importo las funciones que me trae la datade los carros */
import carroModel from "../models/carro.model.js"
import  getModel  from "../models/modelo.modelo.js";


/**Tipo de Funciones que se pueden exportar */

export async function getAllCar(req,res){
    let data = await carroModel.getCarrosModel();
    /*let modelo = await getModel.getModel();*/
    res.status(200).json({
        "success" :true,
        "msg" : "Llegamos a la función getAllCar",
        "data" : data,
    })
}

export async function getCarUni(req,res){
    let {id_carro} = req.params;
    let data = await carroModel.getCarUniModel(id_carro);
    res.status(200).json({
        "succes": true,
        "data" :data
    })
}


/**unción para post de un carro */
export const postCar = async (req,res)=>{
    let {nombre,anyo,empresa} = req.body;
    let data = await carroModel.postCarrosModel(nombre,anyo,empresa);
    res.status(200).json({
        "success" :true,
        "msg" : "Llegamos a la función postCar",
        "data_insertada": data   
     })
}

export const putCar = async (req,res)=>{
    let {id_carro} = req.params; 
    let {anyo,nombre,empresa} = req.body;


    let data = await carroModel.putCarroModel(id_carro,nombre,anyo,empresa);
    res.status(200).json({
        succes: true,
        data: data
    })
}

export const deleteCar = async (req,res)=>{
    let {id_carro} = req.params;
    let data = await carroModel.deleteCarroModel(id_carro);
    res.status(200).json({
        succes: true,
        data: data
    })

}
/**Exporto por defecto todas las funciones */
export default {
    getAllCar,
    postCar,
    getCarUni,
    putCar,
    deleteCar
}