import express from "express";
import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import { connectDB } from "./db/dbConn.js";
import dotenv from "dotenv";
import { errorHandler } from "./middleware/errorHandler.mw.js";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
dotenv.config(); // Load environment variables from .env file
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(compression());
app.use(bodyParser.json());
app.use("/users", userRouter);
app.use("/auth", authRouter);
connectDB();
app.use(errorHandler);
app.listen(port, () => {
    console.log(`Server in running on port ${port}`);
});
