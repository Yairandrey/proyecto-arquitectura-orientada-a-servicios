/**Genero las rutas que necesito */
import { Router } from "express";
/**Importo las funciones desde el controler a través de un objeto que le asigno un nombre*/
import carroControler from "../controllers/carro.controler.js";

const routerCarros = Router()

routerCarros.get("/carros", carroControler.getAllCar);
routerCarros.get("/carro/:id_carro", carroControler.getCarUni);
routerCarros.post("/carros", carroControler.postCar);
routerCarros.delete("/carros/:id_carro", carroControler.deleteCar);
routerCarros.put("/carros/:id_carro", carroControler.putCar);

export default routerCarros;