import { MongoClient, ServerApiVersion } from "mongodb";
import "dotenv/config"; 
import mongoose from 'mongoose';
const portNumber = process.env.PORT

const uri = process.env.ATLAS_URI

const connectionString = process.env.ATLAS_URI;const connectToDB = async () => {
    try {
        await mongoose.connect(connectionString, {
            autoIndex: true
        })
        console.log('Connected to Mongodb Atlas');} catch (error) {
        console.error(error);
    }
}

export default connectToDB