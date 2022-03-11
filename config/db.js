import mongoose from "mongoose";


const connectDB = async () => {
  let db_url = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/Logistics"

  mongoose.connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  mongoose.connection.on("connected", () => {
    console.log(`Connected to Database`);
  });
  mongoose.connection.on("error", (err) => {
    console.error("Connection Error:", err);
  });
  return
}

export { connectDB }