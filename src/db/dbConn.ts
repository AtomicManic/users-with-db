import mongoose from "mongoose";

export const connectDB = async () => {
  const mongo_uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.vdsttfw.mongodb.net/?retryWrites=true&w=majority`;

  await mongoose.connect(mongo_uri);
  mongoose.connection.on("error", (err) => {
    console.log("Mongoose connection error: " + err);
  });
  console.log("MongoDB connected");
};
