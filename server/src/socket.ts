import { Socket } from "socket.io";
import { Server } from "socket.io";

interface CustomSocket extends Socket {
    room?:string
}
export function setupSocket(io:Server){

    io.use((socket: CustomSocket, next) => {
        const room = socket.handshake.auth.room || socket.handshake.headers.room;       
        if(!room){
            return next(new Error("invalid room"))
        }
        socket.room = room
        next()
    })


    io.on("connection", (socket: CustomSocket) => {
        //join the room 
        socket.join(socket.room)

        console.log("socket connected", socket.id);

        socket.on("message", (data) => {
            console.log("server side message", data)
            //socket.broadcast.emit("message", data)
            io.to(socket.room).emit("message", data)
        })
        socket.on("disconnect", ()=> {
            console.log("a user disconnected", socket.id);
        })
    })

}