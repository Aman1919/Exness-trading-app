import {Request,Response,NextFunction} from "express"
import {db} from "@repo/db"
import {JWT_SECRET} from '../constant'
import jwt ,{JwtPayload}from 'jsonwebtoken';

export async function authMiddleware(req:Request,res:Response,next:NextFunction) {
    try{
const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1]; // Bearer <token>

const decoded = jwt.verify(token,JWT_SECRET) as JwtPayload
 if (!decoded || !decoded.email) {
      return res.status(401).json({ message: "Invalid token" });
}
console.log(decoded)
const existingUser = await db.user.findUnique({where:{email:decoded.email}})

if(!existingUser){
    return res.status(404).json({message:"User don't already exist"})
}

req.user = {name:existingUser.name,email:existingUser.email};
next()
    }catch(e){
console.log("error: ",e)
    }
}