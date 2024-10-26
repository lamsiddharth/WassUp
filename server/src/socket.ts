import { Server } from "socket.io";

export function setupSocket(io:Server){
    io.on("connection", (socket) => {
        console.log("socket connected", socket.id);

        socket.on("disconnect", ()=> {
            console.log("a user disconnected", socket.id);
        })
    })

}