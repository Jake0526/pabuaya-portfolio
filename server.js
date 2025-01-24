import express from "express";
import ViteExpress from "vite-express";
import dotenv from "dotenv";
import path from "path"; // Import the path module

dotenv.config();

import graphqlAPI from "./server/graphql/index.js";
import authManager from "./server/authentication/authManager.js";

const app = express();

app.use(express.json());

// Serve static files from the "dist" directory in production
if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "dist")));
}

graphqlAPI(app)
authManager(app)

const server = app.listen(process.env.PORT, "0.0.0.0", () =>
  console.log(`🚀 is running on port ${process.env.PORT}`)
);

ViteExpress.bind(app, server);