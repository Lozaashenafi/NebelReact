import express from "express";
const appRoute = express.Router();

import aboutRouter from "../api/about/about.route.js"; // Adjust the path as needed
import userRoute from "../api/user/user.route.js"; // Adjust the path as needed

appRoute.use("/user", userRoute);
appRoute.use("/aboutus", aboutRouter);

export default appRoute;
