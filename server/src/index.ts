import express, { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import Routes from "./routes/index.js";

const app:Application = express();
const PORT = process.env.PORT || 7000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/api', Routes)

app.listen(PORT, () => console.log(`server running on port ${PORT}`))