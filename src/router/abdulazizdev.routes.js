import express  from "express";
import {aboutCon, homeCon, contactCon} from '../controller/index.controller.js'

export const abdulazizdev =  express.Router()

abdulazizdev.get('/', homeCon)
abdulazizdev.get('/about', aboutCon)
abdulazizdev.get('/contact', contactCon)