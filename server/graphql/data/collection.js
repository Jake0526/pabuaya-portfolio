import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const URI = process.env.ATLAS_URI || "";

const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  // Connect the client to the server
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("medbank").command({ ping: 1 });
  console.log("You successfully connected to MongoDB!");
} catch (err) {
  console.error(err);
}

let db = client.db("medbank");

export default db;