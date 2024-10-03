import express from "express";
import userController from "./user.controller.js";
import { errorHandler } from "../../config/error.js";

const userRoute = express.Router();
//import controller

//define routers
userRoute.post("/register", errorHandler(userController.register));
userRoute.post("/login", errorHandler(userController.login));

export default userRoute;
