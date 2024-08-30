/**Inicializo el servidor y hago las comfiguraciones de las rutas */
import express from "express";
/**Importo la variable del puerto */
import { environment } from "./default.js";
import router from "../routes/index.route.js";
import pgConnection from "../services/pgConnection.service.js";
import middleware from "../middlewars/index.middleware.js";

export default class Server{

    constructor(){
        /**Inicializo las variables de la clase */
        this.app = express();
        this.port = environment.port;

    }

    async connectionDB(){
        new pgConnection();
    }

    middlewares(){
        /**Configuro para que acepte objeto tipo JSON */
        this.app.use(express.json())
        /**Activo el uso de middleware personalizado */
        this.app.use(middleware);
    }

    route(){
        this.app.use(router);
    }
    runServer(){
        this.connectionDB();
        this.middlewares();
        this.route();
        this.app.listen(this.port, ()=>{
            console.log(`Hola servidor ${this.port}`)
        })
    }
}