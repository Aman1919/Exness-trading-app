import {Request,Response} from "express"
import {db} from "@repo/db"
import jwt from 'jsonwebtoken';
import {JWT_SECRET} from '../../constant'

export async function SignUP(req:Request,res:Response) {
    try{
        console.log(req.body)
const {name,email,password}= req.body
const existingUser = await db.user.findUnique({where:{email}})

if(existingUser){
    res.status(505).json({message:"User already exist"})
    return
}

const user =  await db.user.create({
    data:{
        email,
        name,
        password
    }
})

const token = jwt.sign({email},JWT_SECRET)
console.log(user)
return res.status(200).json({token})
    }catch(e){
        console.log('error: ',e)
    }
} 

export async function login(req:Request,res:Response) {
    try{
const {email,password}= req.body
console.log(req.body)
const existingUser = await db.user.findUnique({where:{email}})
if(!existingUser){
    return res.status(404).json({message:"User don't already exist"})
}

if(existingUser.password!==password){
    return res.status(400).json({message:"Password is not correct"})
}
const token = jwt.sign({email},JWT_SECRET)
console.log(token)
return res.status(200).json({token})

    }catch(e){
        console.log('error: ',e)
    }
}

export async function GetUserdetails(req:Request,res:Response){
    try{
        if(req.user){
       return  res.status(200).json({user:req.user})
        }else{

        }
    }catch(e){
        console.log('error: ',e)
    }
}
