import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // await mongoose.connect('mongodb://127.0.0.1:27017/aes');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(`Error on DB: ${error.message}`);
    process.exit(1);
  }
}

export default connectDB;