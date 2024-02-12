var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import mongoose from "mongoose";
export const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const mongo_uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.vdsttfw.mongodb.net/?retryWrites=true&w=majority`;
    yield mongoose.connect(mongo_uri);
    mongoose.connection.on("error", (err) => {
        console.log("Mongoose connection error: " + err);
    });
    console.log("MongoDB connected");
});
