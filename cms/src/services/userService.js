import { message } from "antd";
import axios from "../Util/axios";
const userService = {
  register: async (userdata) => {
    try {
      const response = await axios.post("/user/register", userdata);
      return response.data;
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error("Error response:", error.response.data);
        return error.response.data;
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response from server:", error.request);
        return { success: false, message: "No response from server." };
      } else {
        // Something happened in setting up the request
        console.error("Error in request setup:", error.message);
        return { success: false, message: "Request setup error." };
      }
    }
  },
};
export default userService;
