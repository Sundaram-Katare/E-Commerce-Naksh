import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.listen(PORT, () => {
    console.log(`Backend is running on PORT ${PORT}`);
});