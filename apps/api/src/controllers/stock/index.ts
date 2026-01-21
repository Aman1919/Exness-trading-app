import {Request,Response} from "express"
import {BINANCE_URL} from "../../constant"
import axios from 'axios';

export async function getAllAssests(req:Request,res:Response) {
    try{
        const url =`${BINANCE_URL}/ticker/price`
        const response = await axios.get(url);
        const data = await response.data;

        return res.status(200).json({data,message:"List of stock from finnhub"});
    }catch(e){
        console.log("Error: ",e)
    }
}


export async function getAssetByName(req:Request,res:Response){
    try{
const {asset} = req.body
const url =     `${BINANCE_URL}/ticker/price?symbol=${asset}`
const response = await axios.get(url);
        const data = await response.data;
        return res.status(200).json({data,message:"List of stock from finnhub"});
    }catch(e){
console.log(e)
    }
}

