const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const Item = require('./models/Item');

const app = express();
const port = 3000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// CORS middleware
app.use(cors({
  origin: 'http://localhost:3001',  // Allow requests from this origin
  methods: ['GET', 'POST'],         // Allow these HTTP methods
  allowedHeaders: ['Content-Type'], // Allow these headers
}));

// Define a GET endpoint to fetch all items
app.get('/api/items', async (req, res) => {
  try {
    console.log("This is Get API call");
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Define a POST endpoint to add a new item
app.post('/api/items', async (req, res) => {
  try {
    const newItem = new Item({
      name: req.body.name,
      description: req.body.description,
    });

    const item = await newItem.save();
    res.json(item);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
