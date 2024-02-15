import express from "express";
import { router } from "./handler.js";

const app=express();
app.use(router);
const port=2000;
//Starts the server listen
app.listen(port,()=>{
    console.log(`Connected to http://localhost:${port}`);
})