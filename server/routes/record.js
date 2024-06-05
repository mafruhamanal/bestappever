// Import Express
import express from 'express';

// Import the Record model
import Record from '../models/RecordModel.js';

// router is an instance of the express router.
const router = express.Router();

// Route to get all records
router.get('/', async (req, res) => {
  try {
    const records = await Record.find();
    res.send(records).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching records');
  }
});

// Route to get a single record by id
router.get('/:id', async (req, res) => {
  try {
    const record = await Record.findById(req.params.id);
    if (!record) return res.status(404).send('Record not found');
    res.send(record).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching record');
  }
});

// Route to create a new record
router.post('/', async (req, res) => {
  try {
    const newRecord = new Record({
      name: req.body.name,
      position: req.body.position,
      level: req.body.level
    });
    const savedRecord = await newRecord.save();
    res.send(savedRecord).status(201);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error adding record');
  }
});

// Route to update a record by id
router.patch('/:id', async (req, res) => {
  try {
    const updatedRecord = await Record.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRecord) return res.status(404).send('Record not found');
    res.send(updatedRecord).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating record');
  }
});

// Route to delete a record by id
router.delete('/:id', async (req, res) => {
  try {
    const deletedRecord = await Record.findByIdAndDelete(req.params.id);
    if (!deletedRecord) return res.status(404).send('Record not found');
    res.send(deletedRecord).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting record');
  }
});

export default router;


// import express from "express";

// // This will help us connect to the database
// import db from "../db/connection.js";

// // This help convert the id from string to ObjectId for the _id.
// import { ObjectId } from "mongodb";

// // router is an instance of the express router.
// // We use it to define our routes.
// // The router will be added as a middleware and will take control of requests starting with path /record.
// const router = express.Router();

// // This section will help you get a list of all the records.
// router.get("/", async (req, res) => {
//   let collection = await db.collection("records");
//   let results = await collection.find({}).toArray();
//   res.send(results).status(200);
// });

// // This section will help you get a single record by id
// router.get("/:id", async (req, res) => {
//   let collection = await db.collection("records");
//   let query = { _id: new ObjectId(req.params.id) };
//   let result = await collection.findOne(query);

//   if (!result) res.send("Not found").status(404);
//   else res.send(result).status(200);
// });

// // This section will help you create a new record.
// router.post("/", async (req, res) => {
//   try {
//     let newDocument = {
//       name: req.body.name,
//       position: req.body.position,
//       level: req.body.level,
//     };
//     let collection = await db.collection("records");
//     let result = await collection.insertOne(newDocument);
//     res.send(result).status(204);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error adding record");
//   }
// });

// // This section will help you update a record by id.
// router.patch("/:id", async (req, res) => {
//   try {
//     const query = { _id: new ObjectId(req.params.id) };
//     const updates = {
//       $set: {
//         name: req.body.name,
//         position: req.body.position,
//         level: req.body.level,
//       },
//     };

//     let collection = await db.collection("records");
//     let result = await collection.updateOne(query, updates);
//     res.send(result).status(200);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error updating record");
//   }
// });

// // This section will help you delete a record
// router.delete("/:id", async (req, res) => {
//   try {
//     const query = { _id: new ObjectId(req.params.id) };

//     const collection = db.collection("records");
//     let result = await collection.deleteOne(query);

//     res.send(result).status(200);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error deleting record");
//   }
// });

// export default router;