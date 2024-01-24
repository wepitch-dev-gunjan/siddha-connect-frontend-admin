import { createContext, useState } from "react";

export const AttendenceContext = createContext();

export const AttendenceProvider = ({ children }) => {
  const [punchInEnable, setPunchInEnable] = useState(false);
  return (
    <AttendenceContext.Provider
      value={{
        punchInEnable,
        setPunchInEnable,
      }}
    >
      {children}
    </AttendenceContext.Provider>
  );
};
