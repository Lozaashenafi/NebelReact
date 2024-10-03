import express from "express";
import aboutController from "./about.controller.js";
import { errorHandler } from "../../config/error.js";

const userRoute = express.Router();
//import controller

//define routers
userRoute.post("/create", errorHandler(aboutController.create));
userRoute.get("/get", errorHandler(aboutController.get));
userRoute.put("/update", errorHandler(aboutController.update));

export default userRoute;
