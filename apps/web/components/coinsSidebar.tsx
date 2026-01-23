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
    const [data,setData] = useState<any>([]);
    useEffect(()=>{
     const ws = new WebSocket("ws://localhost:8080")
     console.log("connection:",ws.CONNECTING)
     ws.addEventListener("open", (event) => {
  ws.send("Hello Server!");
});

// Listen for messages
ws.addEventListener("message", (event) => {
    const data = JSON.parse(event.data)
  console.log("Message from server ", data.data.data  );
  setData(event.data.data)
});

    },[data])
    return (
        <div className="h-screen bg-[#0f1a1f] border-r border-zinc-800  text-white" style={{width:'400px'}}>
  
  {/* Header */}
  <div className="p-4 border-b border-zinc-800">
    <h2 className="text-sm font-semibold tracking-wide text-zinc-300">
      Instruments
    </h2>
  </div>

  {/* Search */}
  <div className="p-4">
    <input
      type="text"
      placeholder="Search instruments"
      className="w-full bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* List */}
  <div className="flex-1 overflow-y-auto px-2 space-y-1">
  </div>
  <ul>

{data&&data.forEach((coin:any) => {
  return <li>Symbol: {coin.symbol} price: {coin.price}</li>
})}
</ul>
</div>

    )
}