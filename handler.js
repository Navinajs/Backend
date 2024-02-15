import express from "express";
import {create,update,read,del,mid}  from "./app.js";
import bodyParser from 'body-parser';

//exporting router
export const router = express.Router();
router.use(bodyParser.json());

//call postAPI
router.post("/create/:id1/:id2",mid,create);

//call getAPI
router.get("/read",mid,read);

//call putAPI
router.put("/update",mid,update);

//call deleteAPI
router.delete("/delete",mid,del);


