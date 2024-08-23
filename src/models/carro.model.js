import pgConnection from "../services/pgConnection.service.js"

export const getCarrosModel = async () =>{
    const pg = new pgConnection();
    /**Hago la consulta */
    return await pg.connection.query("SELECT * FROM CARRO");
    
}

export const postCarrosModel = ()=>{

}

export default{
    getCarrosModel,
    postCarrosModel
}