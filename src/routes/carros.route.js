/**Genero las rutas que necesito */
import { Router } from "express";
/**Importo las funciones desde el controler a través de un objeto que le asigno un nombre*/
import carroControler from "../controllers/carro.controler.js";

const routerCarros = Router()

routerCarros.get("/carros", carroControler.getAllCar);
routerCarros.post("/carros", carroControler.postCar);
routerCarros.delete("/carros");
routerCarros.put("/carros");

export default routerCarros;