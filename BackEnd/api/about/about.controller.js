import { PrismaClient } from "@prisma/client";
import multer from "multer";
import path from "path";
import aboutSchema from "./about.schema.js"; // Import your schema

const prisma = new PrismaClient();

// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/aboutus");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
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
      const imageFile = req.file;
      let imageUrl = null;

      // Process the image if it is uploaded
      if (imageFile) {
        imageUrl = `uploads/aboutus/${imageFile.filename}`; // Save relative path for the database
      }

      // Mark all existing AboutUs records as inactive
      await prisma.aboutUs.updateMany({
        where: { isActive: true },
        data: { isActive: false },
      });

      // Create the new AboutUs record
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
        message:
          "AboutUs created successfully and the previous ones are set to inactive.",
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
      // Retrieve the first active About Us entry
      const activeAboutUs = await prisma.aboutUs.findFirst({
        where: {
          isActive: true,
        },
      });

      res.status(200).json({
        success: true,
        data: activeAboutUs,
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
