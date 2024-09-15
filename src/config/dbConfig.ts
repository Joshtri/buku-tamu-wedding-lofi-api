import mongoose from 'mongoose';
import { config } from 'dotenv';

// Load environment variables from .env file
config();

const connectDB = async (): Promise<void> => {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error('MONGODB_URI is not defined in the environment variables');
        }

        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            // Add timeout option if needed (e.g., 30 seconds)
            // serverSelectionTimeoutMS: 30000,
        });

        console.log(`Database connected: ${conn.connection.host}`);
    } catch (error) {
        console.error('Database connection error:', error);
    }
};

export default connectDB;
