// Import Mongoose
import mongoose from 'mongoose';

// Define schema for "records" collection
const recordSchema = new mongoose.Schema({
  name: String,
  position: String,
  level: String
});

// Create Mongoose model
const Record = mongoose.model('Record', recordSchema);

export default Record;
