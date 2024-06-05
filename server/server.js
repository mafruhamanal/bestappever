import express from "express";
import cors from "cors";
import records from "./routes/record.js";
import "dotenv/config";
import mongoose from 'mongoose';
import connectToDB from './db/connection.js'

const PORT = process.env.PORT || 5050;
const app = express();
connectToDB()

app.use(cors());
app.use(express.json());
app.use("/record", records);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});