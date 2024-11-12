import express from "express";
import { config } from "dotenv";
import {abdulazizdev} from "./src/router/index.routes.js"
config()

const app = express()

app.use(express.json())
app.use(express.static('src/public'))
app.set("view engine", "ejs")


app.use("/abdulazizdev", abdulazizdev)


const PORT = process.env.PORT || 3002

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})