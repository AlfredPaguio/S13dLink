import { Client } from "pg";

export async function connectToDatabase() {
  try {
    const client = new Client({
      connectionString: Bun.env.DB_URL,
    });
    await client.connect();
    console.log("Connected to PostgreSQL");
    return client;
  } catch (error) {
    console.error("[Server] Error connecting to PostgreSQL:", error);
    throw error;
  }
}

// export async function connectToDatabase() {
//   try {
//     await mongoose.connect();
//     await mongoose.connection.db.admin().command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } catch (error) {
//     console.error("[Server] Error: " + error);
//     process.exit(1);
//   }
// }

// export async function disconnectFromDatabase() {
//   try {
//     await mongoose.disconnect();
//   } catch (error) {
//     console.error("[Server] Error: " + error);
//     process.exit(1);
//   }
// }
