import express from "express";
import { config } from "dotenv";
import { abdulazizdev } from "./src/router/index.routes.js";

config(); // .env faylini yuklash

const app = express();

app.use(express.json());
app.use(express.static('src/public'));
app.set("view engine", "ejs");

app.use("/", abdulazizdev);

const PORT = process.env.PORT || 3001

app.listen(PORT, (err)=>{
  if(err){
    console.log(err);
  }
  console.log("Server listing on port:" + PORT);
})
