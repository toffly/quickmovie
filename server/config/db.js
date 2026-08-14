import mongoose from "mongoose";
import { setServers } from "node:dns/promises";
setServers(["1.1.1.1", "8.8.8.1"]); // or ["8.8.8.8", "8.8.4.4"]

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database connected"),
    );
    await mongoose.connect(`${process.env.MONGODB_URI}`);
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB