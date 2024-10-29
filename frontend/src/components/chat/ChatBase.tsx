"use client";
import { getSocket } from "@/lib/socket.config";
import React, { useEffect, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { Button } from "../ui/button";

const ChatBase = ({ groupId}: {groupId: string}) => {
  // State to track if the socket is connected
  const [isConnected, setIsConnected] = useState(false);
  
  useEffect(() => {
    // Get the socket instance and connect
    const socket = getSocket();
    socket.auth = {
      room: groupId
    }
    socket.connect();

    // Log successful connection
    socket.on("connect", () => {
      console.log("Connected to socket server");
      setIsConnected(true);
    });

    // Handle incoming messages
    socket.on("message", (data) => {
      console.log("Received socket message:", data);
    });

    // Handle socket disconnection
    socket.on("disconnect", () => {
      console.log("Socket disconnected");
      setIsConnected(false);
    });

    // Cleanup: Disconnect the socket when the component unmounts
    return () => {
      socket.off("message"); // Remove the specific listener
      socket.close();
    };
  }, []);

  const handleClick = () => {
    const socket = getSocket();
    if (isConnected) {
      console.log("Sending message via socket");
      socket.emit("message", { name: "Siddharth", id: uuidV4() });
    } else {
      console.error("Socket is not connected!");
    }
  };

  return (
    <div>
      <Button onClick={handleClick}>Send Message</Button>
    </div>
  );
};

export default ChatBase;
