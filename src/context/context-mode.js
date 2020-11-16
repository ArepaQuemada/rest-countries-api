import { useState, createContext } from "react";

export const ModeContext = createContext();

export const ModeContextProvider = (props) => {
  const [mode, setMode] = useState({ color: "ligth" });

  return (
    <ModeContext.Provider value={[mode, setMode]}>
      {props.children}
    </ModeContext.Provider>
  );
};
