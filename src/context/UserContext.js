import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom/dist";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const storedToken = localStorage.getItem("token") || "";
  const storedUser = JSON.parse(localStorage.getItem("user")) || {}; // Parsing stored user data

  useEffect(() => {
    if (storedToken && storedUser) {
      setUser({
        _id: storedUser?._id,
        token: storedToken,
        isLoggedIn: !!storedToken,
      });
    }
  }, [navigate]); // Add setUser and navigate as dependencies
  useEffect(() => {
    if (!user.isLoggedIn) {
      navigate("/login");
    }
  }, [user.isLoggedIn, navigate]); // Add navigate as a dependency

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
