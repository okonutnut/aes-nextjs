import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/aes');
    console.log('MongoDB connected to database : ' + mongoose.connection.db.databaseName);
  } catch (error) {
    console.error(`Error on DB: ${error.message}`);
    process.exit(1);
  }
}

export default connectDB;