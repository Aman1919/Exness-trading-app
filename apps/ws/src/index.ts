import WebSocket, { WebSocketServer } from 'ws';


const wss = new WebSocket.Server({ port: 5000 });

wss.on("connection", (ws:any) => {
  console.log("Client connected");

  ws.on("message", (data:any) => {
    console.log("data from the client:", data.toString());

    ws.send(
      JSON.stringify({
        type: "test",
        message: "hello world",
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
