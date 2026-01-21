import express from "express"
import {SignUP,login} from "../../controllers/auth/index"
const authRouter  = express.Router()

authRouter.post('/signup',SignUP)
authRouter.post('/login',login)
authRouter.get('/',(req:any,res:any)=>{
    res.json({message:"working"})
})
export {authRouter}