import express from "express";
import userRoutes from "./routes/userRoutes.js";
import { configDotenv } from "dotenv";
import connectDB from "./db.js";
import cors from "cors";
const app = express();
const PORT = 3000;
configDotenv();
connectDB();


// Middleware
app.use(cors());

app.use(express.json());

// Routes

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});