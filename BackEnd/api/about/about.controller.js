import { PrismaClient } from "@prisma/client";
import multer from "multer";
import path from "path";
import aboutSchema from "./about.schema.js"; // Import your schema

const prisma = new PrismaClient();

// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "uploads/aboutus")); // Specify the folder to save the images
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Create a unique filename
  },
});

// Create multer upload instance
const upload = multer({ storage });

// Use the upload middleware for the create and update routes
const aboutController = {
  create: async (req, res) => {
    try {
      // Validate the incoming data
      aboutSchema.create.parse(req.body);
      const { title, description, isActive } = req.body;
      console.log(" back" + req.body);
      const imageFile = req.file;
      let imageUrl = null;
      // If an image is uploaded, process it
      if (imageFile) {
        imageUrl = `uploads/aboutus/${imageFile.filename}`; // Save relative path for the database
      }

      const newAbout = await prisma.aboutUs.create({
        data: {
          title,
          description,
          isActive: isActive !== undefined ? isActive : true,
          imageUrl,
        },
      });

      res.status(201).json({
        success: true,
        message: "AboutUs created successfully",
        data: newAbout,
      });
    } catch (error) {
      console.error("Error creating AboutUs:", error);
      if (error.errors) {
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors, // Return validation errors
        });
      }
      res.status(500).json({
        success: false,
        message: "Failed to create AboutUs. Please try again.",
      });
    }
  },

  get: async (req, res) => {
    try {
      const aboutUsList = await prisma.aboutUs.findMany();
      res.status(200).json({
        success: true,
        data: aboutUsList,
      });
    } catch (error) {
      console.error("Error retrieving AboutUs:", error);
      res.status(500).json({
        success: false,
        message: "Failed to retrieve AboutUs. Please try again.",
      });
    }
  },

  update: async (req, res) => {
    try {
      // Validate the incoming data
      aboutSchema.update.parse(req.body);

      const { id, title, description, isActive } = req.body;
      const imageFile = req.file;

      const updatedAbout = await prisma.aboutUs.update({
        where: { id: Number(id) },
        data: {
          title,
          description,
          isActive: isActive !== undefined ? isActive : true,
          imageUrl: imageFile
            ? `uploads/aboutus/${imageFile.filename}`
            : undefined, // Save relative path for the database
        },
      });

      res.status(200).json({
        success: true,
        message: "AboutUs updated successfully",
        data: updatedAbout,
      });
    } catch (error) {
      console.error("Error updating AboutUs:", error);
      if (error.errors) {
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors, // Return validation errors
        });
      }
      res.status(500).json({
        success: false,
        message: "Failed to update AboutUs. Please try again.",
      });
    }
  },
};

// Export the upload middleware along with the controller
export const uploadImage = upload.single("ImageFile"); // This will match the field name in your form
export default aboutController;
