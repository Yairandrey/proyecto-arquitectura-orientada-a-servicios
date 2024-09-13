import jwt from "jsonwebtoken";
import { environment } from "../config/default.js";

export const verifyToken = (req,res,next) =>{
        let token =req.headers["authorization"];

        if (!token){
            return res.status(401).json({
                succes: false,
                data : 'Authorization required 1' ,
                msn: 'Authorization required'
            });
        }

        token = token.split(" ");
        if( token[0] !== "Bearer"){
            return res.status(401).json({
                succes: false,
                data : 'Authorization required 2',
                msn: 'Authorization required'
            });
        }

        jwt.verify(token[1],environment.jwt_hash, (error,decode)=>{
            if (error){
                return res.status(401).json({
                    succes: false,
                    data : 'Authorization required 3',
                    msn: 'Authorization required'
                });
            }
            console.log(decode)
            next(); //Salte al otro controlador
        });



        
}