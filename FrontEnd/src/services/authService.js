import { message } from "antd";
import axios from "../Util/axios";

const authService = {
  login: async (formData) => {
    try {
      console.log("Auth service form data:", JSON.stringify(formData));
      const response = await axios.post("user/login", formData);
      console.log("Response:", response.data); // Log the response data
      // Check if response data is structured as expected
      if (response.data && response.data.success) {
        const token = response.data.token; // Extract token from the response
        localStorage.setItem("token", token); // Store the token
        return { success: true, message: response.data.message }; // Return success message
      } else {
        return { success: false, message: "Login failed" }; // Fallback message
      }
    } catch (error) {
      console.error("Error during login:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        return { success: false, message: error.response.data.message };
      } else {
        return {
          success: false,
          message: "Failed to login. Please try again later.",
        };
      }
    }
  },
  forgetPassword: (data) => {
    // Implement this function if needed
  },
};

export default authService;
