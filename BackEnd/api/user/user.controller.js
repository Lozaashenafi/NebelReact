import { prisma } from "../../config/prisma.js";
import { JWT_SECRATE } from "../../config/secrate.js";
import userSchema from "./user.schema.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userController = {
  register: async (req, res, next) => {
    try {
      userSchema.register.parse(req.body); // Validate the incoming data
      console.log(req.body);
      // Check if the email already exists
      const existingUser = await prisma.users.findFirst({
        where: {
          OR: [{ email: req.body.email }],
        },
      });

      if (existingUser) {
        return res.status(403).json({
          message: "Email is associated with an existing account",
          success: false,
        });
      }

      // Hash the password
      const hashedPassword = bcrypt.hashSync(req.body.password, 10);
      console.log(hashedPassword);
      // Create the new user
      const newUser = await prisma.users.create({
        data: {
          email: req.body.email,
          phone: req.body.phone,
          role: req.body.role,
          password: hashedPassword,
          profile: {
            create: {
              firstName: req.body.firstName,
              middleName: req.body.middleName,
              lastName: req.body.lastName,
              gender: req.body.gender,
            },
          },
        },
      });

      // Return success response
      return res.status(201).json({
        message: "User created successfully",
        user: newUser,
        success: true,
      });
    } catch (error) {
      console.error("Registration error:", error);
      return res.status(500).json({
        message: "Internal server error",
        success: false,
      });
    }
  },
  login: async (req, res, next) => {
    console.log(req.body);
    try {
      const { email, password } = req.body;

      // Check if the user exists
      const userExist = await prisma.users.findFirst({
        where: { email },
        include: {
          profile: true,
        },
      });

      if (!userExist) {
        return res
          .status(401)
          .json({ success: false, message: "User does not exist" });
      }

      // Check if the password matches
      const isMatch = bcrypt.compareSync(password, userExist.password);
      if (!isMatch) {
        return res
          .status(401)
          .json({ success: false, message: "Incorrect password" });
      }

      // Prepare token
      const token = jwt.sign(
        {
          id: userExist.id,
          role: userExist.role,
          firstName: userExist.profile.firstName,
        },
        JWT_SECRATE,
        {
          expiresIn: "12h", // token will expire in 1 hour
        }
      );

      res.status(200).json({
        success: true,
        message: "Login successful",
        token,
      });
    } catch (error) {
      console.error("Error during login:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
};
export default userController;
