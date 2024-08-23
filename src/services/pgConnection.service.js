/**Conexión con la DB */
import pgPromise from "pg-promise";

export default class pgConnection{
     static instance;
     connection;
     constructor(){
          /**Confuguración para que no entre dos veces a la misma petición */
          if (pgConnection.instance){
               return pgConnection.instance
          }
          pgConnection.instance = this;
          const pgp = pgPromise({})
          /**Conexión con base de datos */
          /** driver: // nombre_de_usuario : contraseña @ dirección de DB : puerto/ nombre DB*/
          this.connection = pgp("postgres://postgres:admin@127.0.0.1:5432/postgres");
          this.connection.connect()
               .then(obj =>{
                    console.log("Me conecté " + obj.client.serverVersion);
                    obj.done();
               })
               .catch(error =>{
                    console.log("error " + error.message || error)
               })
     }
}