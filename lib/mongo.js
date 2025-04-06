import mongoose from "mongoose";

const connectBD = async () => {
  const MONGO_URI = process.env.URL_MONGO || "";
  try {
    await mongoose.connect(MONGO_URI);
    console.log("🟢 Conectado a MongoDB");
  } catch (error) {
    console.error("🔴 Error al conectar a MongoDB:", error);
  }
};
export default connectBD;
