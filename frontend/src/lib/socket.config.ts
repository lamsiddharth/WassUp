// socketClient.ts
import { io, Socket } from "socket.io-client";
import Env from "./env";

let socket: Socket;

export const getSocket = (): Socket => {
  if (!socket) {
    socket = io(Env.BACKEND_URL, { autoConnect: false });

    // Optional: Add default connection event handlers
    socket.on("connect", () => {
      console.log("Connected to server with ID:", socket.id);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    // Optionally handle reconnection attempts
    socket.on("reconnect_attempt", (attempt) => {
      console.log(`Reconnection attempt #${attempt}`);
    });

    // Optionally handle connection errors
    socket.on("connect_error", (error) => {
      console.error("Connection error:", error);
    });
  }
  return socket;
};
