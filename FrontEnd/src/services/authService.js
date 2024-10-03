import { message } from "antd";
import axios from "../Util/axios";

const authService = {
  login: async (formData) => {
    try {
      console.log("service: " + JSON.stringify(formData));
      const response = await axios.post("user/login", formData);
      console.log("service:res " + response); // Check the response structure in the console

      if (response && response.data && response.data.success) {
        localStorage.setItem("token", response.data.token);
        return { success: true, message: "Login successful" };
      } else {
        return { success: false, message: "Login failed" };
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
