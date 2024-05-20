
import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://jishnuchithreshan006:chithreshan@cluster0.z4olxyq.mongodb.net/food-del').then(()=>console.log("DB connected"));
}