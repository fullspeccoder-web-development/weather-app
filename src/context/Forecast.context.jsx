import { createContext, useState } from "react";

import DATA from "../data.json";

export const ForecastContext = createContext({
  data: DATA,
  setDATA: () => {},
});

export const ForecastProvider = ({ children }) => {
  const [data, setDATA] = useState(DATA);
  const value = {
    data,
    setDATA,
  };

  return (
    <ForecastContext.Provider value={value}>
      {children}
    </ForecastContext.Provider>
  );
};
