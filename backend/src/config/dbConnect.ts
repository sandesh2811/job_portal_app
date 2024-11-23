import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    await mongoose.connect((process.env.MONGODB_URI as string) || "");
    console.log("Database connected successfully!");
  } catch (error) {
    console.log("Couldn't connect to the database!", error);
    process.exit(1);
  }
};

export default connectToDatabase;
