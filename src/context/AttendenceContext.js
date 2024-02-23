import { createContext, useState } from "react";

export const AttendenceContext = createContext();

export const AttendenceProvider = ({ children }) => {
  const[location , setLocation] = useState({})
  const [punchInEnable, setPunchInEnable] = useState(false);
  const [punchInButtonEnable, setPunchInButtonEnable] = useState(false);

  const [isPunchInEnable, setIsPunchInEnable] = useState(false);

  return (
    <AttendenceContext.Provider
      value={{
        punchInEnable,
        setPunchInEnable,
        location, 
        setLocation,
        isPunchInEnable,
        setIsPunchInEnable
      }}
    >
      {children}
    </AttendenceContext.Provider>
  );
};
