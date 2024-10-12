import jwt from "jsonwebtoken";
import { prisma } from "../config/prisma.js";
import { JWT_SECRATE } from "../config/secrate.js";

const userAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({
      message: "Authorization header missing or incorrect",
      success: false,
    });
  }

  const token = authHeader.split(" ")[1]; // Extract the token after 'Bearer '
  console.log("Extracted Token:", token);

  if (!token) {
    return res.status(403).json({
      message: "Token not found",
      success: false,
    });
  }

  try {
    const payload = await jwt.verify(token, JWT_SECRATE);
    console.log("Token Payload:", payload);

    const user = await prisma.users.findFirst({
      where: { id: payload.id },
    });

    if (!user) {
      return res.status(403).json({
        message: "User not found",
        success: false,
      });
    }

    req.user = user; // Attach user to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error("Token verification error:", error);
    return res.status(403).json({
      message: "Invalid token",
      success: false,
    });
  }
};

const isAdmin = (req, res, next) => {
  const user = req.user;
  if (user && user.role !== "ADMIN") {
    return res.status(403).json({
      message: "User is not an admin",
      success: false,
    });
  }
  next(); // User is an admin, proceed to the next middleware or route handler
};

const isManager = (req, res, next) => {
  const user = req.user;
  if (user && user.role !== "MANAGER") {
    return res.status(403).json({
      message: "User is not a manager",
      success: false,
    });
  }
  next(); // User is a manager, proceed to the next middleware or route handler
};

export { userAuth, isAdmin, isManager };
