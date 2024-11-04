import { createContext, useState } from "react";

export const EasyContext = createContext(false);

export const EasyProvider = ({ children }) => {
  const [usedHints, setUsedHints] = useState(false);
  const [tries, setTries] = useState(3);
  const [isEasyMode, setEasyMode] = useState(false);
  const [achievements, setAchievements] = useState([]);
  return (
    <EasyContext.Provider
      value={{ tries, setTries, isEasyMode, setEasyMode, achievements, setAchievements, usedHints, setUsedHints }}
    >
      {children}
    </EasyContext.Provider>
  );
};
