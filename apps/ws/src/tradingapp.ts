import axios from 'axios';

export async function getAllAssests() {
    try{
        const url =`https://api.binance.com/api/v3/ticker/price`
        const response = await axios.get(url);
        const data = await response.data;
 
        return {data,message:"List of all assests"}
    }catch(e){
        console.log("Error: ",e)
    }
}