import  jwt from "jsonwebtoken";
import { environment } from "../config/default.js";


export const login = async(req,res) =>{

    const token = jwt.sign(
        {
            exp: Math.floor(Date.now() / 100 ) + (60*60),
            data :{
                role:"admin",
                doc : "12345678",
                username : "usuario"
            }
        },
        environment.jwt_hash,{
        });
    res.status(200).json(
        {
            succes : true,
            token: token
        }
    )

}