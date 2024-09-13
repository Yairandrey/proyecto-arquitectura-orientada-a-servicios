import { validationResult } from "express-validator";

// Función para validar el esquema
export const validate = (validations)=> async (req,res,next)=>{
    await  Promise.all(validations.map(   (vali)=>   vali.run(req)))
    
    const errors = validationResult(req)

    if (!errors.isEmpty()){
        return res.status(422).json({
            succes: false,
            errors: errors.array()
        });
    }
    next();
}