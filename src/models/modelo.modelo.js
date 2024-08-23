import pgConnection from "../services/pgConnection.service.js";


export const getModel = async () =>{
    const pg = new pgConnection();
    /**Hago la consulta */
    return await pg.connection.query("SELECT * FROM MODELO");
    
}
export default {
    getModel
}