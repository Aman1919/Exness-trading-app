import express from 'express'
import {authRouter} from './routes/auth/index'
import {stockRouter} from './routes/stock/index'
import cors from 'cors'
require('dotenv').config()

const app = express()



const PORT =  5000
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth',authRouter)
app.use('/api/stock',stockRouter)


app.listen(PORT, () => {
  console.log("Listening at port:", PORT);
}).on("error", (err) => {
  console.error("Server error:", err);
});