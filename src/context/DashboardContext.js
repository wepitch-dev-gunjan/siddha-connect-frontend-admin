import { createContext, useContext, useEffect, useState } from "react";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
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
