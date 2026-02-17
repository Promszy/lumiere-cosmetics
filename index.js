const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to Cloud DB"))
    .catch(err => console.log(err));

// Simple Route to Get Products
app.get('/api/products', async (req, res) => {
    // In production, fetch from MongoDB using Product.find()
    res.json({ message: "Welcome to the Cosmetics API" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
