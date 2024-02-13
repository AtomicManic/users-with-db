import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import { connectDB } from "./db/dbConn.js";
import dotenv from "dotenv";
import { errorHandler } from "./middleware/errorHandler.mw.js";
import { CustomError } from "./types/customError.type.js";
import { Response } from "express";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(compression());
app.use(cookieParser());
app.use("/users", userRouter);
app.use("/auth", authRouter);

connectDB();

app.use(
  errorHandler as (
    err: Error | CustomError,
    req: any,
    res: Response,
    next: any
  ) => void
);

app.listen(port, () => {
  console.log(`Server in running on port ${port}`);
});
