import { createContext, useState } from "react";

export const AttendenceContext = createContext();

export const AttendenceProvider = ({ children }) => {
  const[location , setLocation] = useState({})
  const [punchInEnable, setPunchInEnable] = useState(false);
  return (
    <AttendenceContext.Provider
      value={{
        punchInEnable,
        setPunchInEnable,
        location, 
        setLocation
      }}
    >
      {children}
    </AttendenceContext.Provider>
  );
};
