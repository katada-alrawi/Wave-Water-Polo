 import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js'; // assuming userRoutes.js is an ESM file
import classRoutes from './routes/classRoutes.js'; // assuming classRoutes.js is an ESM file

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(express.json());

// MongoDB connection
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@music-cons.epjwsxc.mongodb.net`;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Use routes
app.use('/user', userRoutes);
app.use('/class', classRoutes);
// Add other routes similarly

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
