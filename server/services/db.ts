import mongoose from "mongoose";

export async function connectToDatabase() {
  // await mongoose.connect("mongodb://127.0.0.1:27017/mongoose-app");
  try {
    await mongoose.connect(Bun.env.DB_URL);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.error("[Server] Error: " + error);
    process.exit(1);
  }
}

// export async function disconnectFromDatabase() {
//   try {
//     await mongoose.disconnect();
//   } catch (error) {
//     console.error("[Server] Error: " + error);
//     process.exit(1);
//   }
// }
