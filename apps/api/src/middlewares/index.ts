import {Request,Response,NextFunction} from "express"
import {db} from "@repo/db"
import {JWT_SECRET} from '../constant'
import jwt ,{JwtPayload}from 'jsonwebtoken';

export async function authMiddleware(req:Request,res:Response,next:NextFunction) {
    try{
const {token} = req.body;
const decoded = jwt.verify(token,JWT_SECRET) as JwtPayload
 if (!decoded || !decoded.email) {
      return res.status(401).json({ message: "Invalid token" });
}
const existingUser = await db.user.findUnique({where:{email:decoded.email}})

if(!existingUser){
    return res.status(404).json({message:"User don't already exist"})
}

req.user = existingUser;
next()
    }catch(e){
console.log("error: ",e)
    }
}