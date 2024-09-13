import { checkSchema } from "express-validator";

//Esquema de validación
export const getCarroValidator = checkSchema(
    {
        id_carro: {
            isNumeric: true,
            errorMessage :"only numbers"
        }
    },["params"]
);