import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "";

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            serverSelectionTimeoutMS: 5000, // Evita bloqueos largos
        });
        console.log("✅ MongoDB connected successfully");
    } catch (error) {
        console.error("❌ Error connecting to MongoDB:", error);
        process.exit(1);
    }
};