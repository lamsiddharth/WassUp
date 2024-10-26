import express from "express";
import "dotenv/config";
import cors from "cors";
import Routes from "./routes/route.js";
import { Server } from "socket.io";
import { setupSocket } from "./socket.js";
import { createServer } from "http";
const app = express();
const PORT = process.env.PORT;
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*"
    }
});
setupSocket(io);
export { io };
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    return res.send('working fine');
});
app.use("/api", Routes);
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
