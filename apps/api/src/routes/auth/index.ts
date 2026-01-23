import express from "express"
import {SignUP,login,GetUserdetails} from "../../controllers/auth/index"
import {authMiddleware} from "../../middlewares"
const authRouter  = express.Router()

authRouter.post('/signup',SignUP)
authRouter.post('/signin',login)
authRouter.get('/getuserdetails',authMiddleware,GetUserdetails)
export {authRouter}