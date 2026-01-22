"use client"
import {useState,useEffect} from 'react'
/**
 * list the coin
 * able to search the coins
 * see the real time price of the coins
 * atom - 
 *    
 */

export function SideBar() {
    const [data,setData] = useState(null);
    useEffect(()=>{
     const ws = new WebSocket("ws://localhost:8080")
     console.log("connection:",ws.CONNECTING)
     ws.addEventListener("open", (event) => {
  ws.send("Hello Server!");
});

// Listen for messages
ws.addEventListener("message", (event) => {
  console.log("Message from server ", event.data);
});

    },[data])
    return (
        <div className="w-36 h-screen bg-slate-400">
        <input type="text" />
        <div className="list"> 
            msg{data}
        </div>
        </div>
    )
}