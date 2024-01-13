import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom/dist";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    token: '',
    isLoggedIn: false,
  });
  const navigate = useNavigate();

  const storedToken = localStorage.getItem('token') || '';
  const storedUser = JSON.parse(localStorage.getItem('user')) || {}; // Parsing stored user data

  useEffect(() => {
    if (storedToken && storedUser) {
      setUser({
        _id: storedUser?._id,
        name: storedUser?.name,
        email: storedUser?.email,
        token: storedToken,
        isLoggedIn: !!storedToken,
      })
    }
  }, []);

  useEffect(() => {
    if (!user.isLoggedIn) {
      navigate("/login");
    }
  }, [user.isLoggedIn, navigate]);

  return (
    <UserContext.Provider
      value={
        {
          user, setUser
        }
      }
    >
      {children}
    </UserContext.Provider>
  );
};
