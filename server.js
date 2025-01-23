import express from "express";
import ViteExpress from "vite-express";
import dotenv from "dotenv";

dotenv.config();

import graphqlAPI from "./server/graphql/index.js";
import authManager from "./server/authentication/authManager.js";

const app = express();

app.use(express.json());

graphqlAPI(app)
authManager(app)

const server = app.listen(process.env.PORT, "0.0.0.0", () =>
  console.log(`🚀 is running on port ${process.env.PORT}`)
);

ViteExpress.bind(app, server);