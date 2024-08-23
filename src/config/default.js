/**Configuración de variables de entorno (EL PUERTO DEL SERVIDOR) */
import dotenv from "dotenv";

dotenv.config()


export const environment = {
    port : process.env.PORT
};