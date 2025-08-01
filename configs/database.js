import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect("");
    console.log("database is connect");
  } catch (error) {
    console.log("database is not connect");
  }
}
