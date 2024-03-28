const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection URI
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@water-polo.dhzv5cm.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let classCollection; // Define classCollection globally

async function connectMongoDB() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log("Connected to MongoDB!");
    const database = client.db("water-polo");
    classCollection = database.collection("classes"); // Assign classCollection here
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

// Connect to MongoDB
connectMongoDB();

// Routes
app.post("/new-class", async (req, res) => {
  try {
    const classes = req.body;
    // Insert each class object into the database
    const results = await classCollection.insertMany(classes);
    res.send(results); // Send back the results of the insertion
  } catch (error) {
    console.error("Error handling new class request:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get('/classes', async (req, res) => {
    try {
      // Query for all documents
      const query = {};
      // Find documents in classCollection and convert to array
      const result = await classCollection.find(query).toArray();
      res.send(result); // Send back the result
    } catch (error) {
      console.error("Error handling classes request:", error);
      res.status(500).send("Internal Server Error");
    }
  });

  // get classes by inst
  app.get('/classes/:email', async (req, res) => {
    const email = req.params.email;
    const query = { "Instructor Email": email }; // Assuming the field name is "Instructor Email"
    try {
        const result = await classCollection.find(query).toArray();
        res.send(result);
    } catch (error) {
        console.error("Error retrieving classes:", error);
        res.status(500).send("Internal Server Error");
    }
});

// Manage classes route
app.get('/classes-manage', async (req, res) => {
    try {
        // Retrieve all classes from the existing classCollection
        const result = await classCollection.find({}).toArray();
        // Send the result as a response
        res.send(result);
    } catch (error) {
        console.error("Error retrieving classes:", error);
        res.status(500).send("Internal Server Error");
    }
});


app.get('/', (req, res) => {
  res.send('Hello Katada!');
});

// Start the Express server
const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Gracefully close MongoDB connection when the server shuts down
process.on('SIGINT', async () => {
  try {
    await client.close();
    console.log("MongoDB connection closed.");
    server.close(() => {
      console.log('Server shut down.');
      process.exit(0);
    });
  } catch (error) {
    console.error("Error closing MongoDB connection:", error);
    process.exit(1);
  }
});
