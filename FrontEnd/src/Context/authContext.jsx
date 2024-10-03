import { useState, useEffect, useContext, createContext } from "react";
import getAuth from "../Util/authHeader";

// Create auth context
const AuthContext = createContext();

// Prepare auth provider
export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isManager, setIsManager] = useState(false); // Added isManager state

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const loggedInUser = await getAuth();
      console.log("Logged-in user:", loggedInUser); // Debugging
      if (loggedInUser?.token) {
        setIsLoggedIn(true);
        if (loggedInUser.role === "ADMIN") {
          setIsAdmin(true);
        } else if (loggedInUser.role === "MANAGER") {
          setIsManager(true);
        }
        const { id, firstName, role, token } = loggedInUser;
        setUserData({
          id,
          firstName,
          role,
          token,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const values = {
    isLoggedIn,
    setIsLoggedIn,
    isAdmin,
    isManager, // Added to values
    userData,
    setUserData,
    fetchData,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

// useAuth
export const useAuth = () => {
  return useContext(AuthContext);
};
