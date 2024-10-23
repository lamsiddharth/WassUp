import express from "express";
import "dotenv/config";
import cors from "cors";
import Routes from "./routes/route.js";
const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    return res.send('working fine');
});
app.use("/api", Routes);
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
