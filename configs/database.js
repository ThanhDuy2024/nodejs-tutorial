import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("database is connect");
  } catch (error) {
    console.log("database is not connect");
  }
}
