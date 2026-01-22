import Websocket,{WebSocketServer} from "ws"
import {getAllAssests} from "./tradingapp"
console.log("Starting WS server...");

const wss = new WebSocketServer({ port: 8080 });

console.log("WS server running on ws://localhost:8080");

wss.on("connection", (ws:Websocket) => {
  console.log("Client connected");

  ws.on("message", async (data:any) => {
    console.log("data from the client:", data.toString());
    const d = await getAllAssests();
    console.log(d)
    ws.send(
      JSON.stringify({
        type: "test",
        message: "hello world",
        data:d
      })
    );
  });

  ws.on("close", () => {
    console.log("connection has closed");
  });

  ws.on("error", (err:any) => {
    console.error("socket error:", err);
  });
});
