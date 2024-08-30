import pgConnection from "../services/pgConnection.service.js"

export const getCarrosModel = async () =>{
    const pg = new pgConnection();
    /**Hago la consulta para obtener los datos de mi DB*/
    return await pg.connection.query("SELECT * FROM CARRO");
    
}

/**Función para obtener  el carro por un id*/
export const getCarUniModel = async (id_carro)=>{
    try {
        const pg = new pgConnection();
        /**Hago la consulta para obtener los datos de mi DB*/
        return await pg.connection.query("SELECT * FROM CARRO where id_carro = $1 ", [id_carro]);
    } catch(error){
        return "Fuera de rango";
    }
}


/**Función para hacer post (nsertar) de un carro */
export const postCarrosModel = async(nombre,anyo,empresa)=>{
    const pg = new pgConnection();
    return await pg.connection.query("INSERT INTO CARRO(NOMBRE,ANYO,EMPRESA) VALUES($1,$2,$3) returning *",[nombre,anyo,empresa])
}

/** */
export const putCarroModel = async(id_carro, nombre,anyo,empresa)=>{
    const pg = new pgConnection();
    return await pg.connection.query(" UPDATE CARRO SET NOMBRE = ${nom}, ANYO = ${an}, EMPRESA = ${em} WHERE ID_CARRO = ${id} returning *",
    {
        nom : nombre,
        an : anyo,
        em : empresa,
        id : id_carro
    }
        
    );
}

export const deleteCarroModel = async(id_carro)=>{
    try{
        const pg = new pgConnection();
        return await pg.connection.query("DELETE FROM CARRO WHERE ID_CARRO =$1 ", [id_carro]);
    } catch(error){
        return 'Error'
    }
}

export default{
    getCarrosModel,
    postCarrosModel,
    getCarUniModel,
    putCarroModel,
    deleteCarroModel
}