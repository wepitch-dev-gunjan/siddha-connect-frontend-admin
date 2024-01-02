import { createContext, useContext, useState } from "react";
import { AdminContext } from "./AdminContext";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const { admin } = useContext(AdminContext);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <DashboardContext.Provider
      value={{
        error,
        loading
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
