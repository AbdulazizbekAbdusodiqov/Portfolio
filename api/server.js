import express from "express";
import { config } from "dotenv";
import { abdulazizdev } from "../src/router/index.routes.js";

config(); // .env faylini yuklash

const app = express();

app.use(express.json());
app.use(express.static('src/public'));
app.set("view engine", "ejs");

app.use("/abdulazizdev", abdulazizdev);

// Vercel uchun API funksiyasi
export default (req, res) => {
  app(req, res);
};
